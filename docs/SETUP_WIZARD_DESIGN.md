# Setup Wizard - Technical Design Document

**Version**: 0.9  
**Status**: Design Phase  
**Target**: Q1 2025

---

## Overview

Conversational setup wizard for non-technical HR users to configure KCIT Job Board without developer assistance.

## Design Philosophy

**Conversational Experience + Rules-Based Logic**
- Feels like talking to an expert assistant
- Actually a sophisticated decision tree
- Progressive disclosure (one question at a time)
- Context-aware follow-ups
- No external AI dependencies (for v0.9)

## User Flow

### Entry Points

**1. First-Time Setup (Automatic)**
- User creates superuser via `python manage.py createsuperuser`
- First login redirects to Setup Wizard
- Flag: `setup_completed = False` in Site configuration

**2. Manual Access**
- Admin menu: "Setup Wizard" link
- Can re-run to update configuration
- Shows current settings, allows changes

### Conversation Flow

```
Bot: 👋 Welcome to KCIT Job Board! I'll help you set up your hiring platform.
     This should take about 10 minutes. Ready to start?

User: [Yes, let's start] [I'll do this later]

Bot: Perfect! First, tell me about your organization.
     What's your company name?

User: [Text input: "Acme Corporation"]

Bot: Great! Acme Corporation it is. 
     Which industry best describes your organization?
     This helps me recommend compliance settings.

User: [Dropdown: Technology, Healthcare, Finance, Manufacturing, Other]

Bot: Got it. How many employees does Acme Corporation have?

User: [Radio: 1-10, 11-50, 51-200, 201-1000, 1000+]

Bot: Thanks! Now let's customize your careers page.
     What's your primary brand color? (I'll suggest a palette)

User: [Color picker with hex input]

Bot: Beautiful! Here's a preview of your careers page.
     [Live preview shown]
     
     Want to upload your logo now, or skip for later?

User: [Upload logo] [Skip for now]

Bot: Let's set up email notifications.
     When someone applies, where should we send alerts?

User: [Email input with validation]

Bot: Do you have an SMTP server for sending emails?

User: [Yes, I'll configure it] [No, use default (console for now)]

--- IF YES TO SMTP ---

Bot: I'll guide you through SMTP setup. Which provider?

User: [Gmail, Outlook 365, SendGrid, Custom]

Bot: [Provider-specific instructions with fields]
     Let's test it! I'll send a test email.

User: [Send test email]

Bot: ✅ Test email sent successfully!

--- END SMTP BRANCH ---

Bot: Now, let's set up departments and user roles.
     What departments will be hiring?

User: [Add Department: Name, Description]
     [+ Add Another Department]

Bot: Great! You've added:
     - Engineering
     - Marketing
     - Sales
     
     Who should have access to the admin?
     
User: [Add User: Email, Role (HR Admin, Hiring Manager, Interviewer)]
     [+ Add Another User]

Bot: Almost done! Let's configure compliance settings.
     Where is your organization located?

User: [Country selector]

--- COMPLIANCE RECOMMENDATIONS ---

Bot: Based on your location (United States), I recommend:
     ✅ EEOC compliance tracking
     ✅ ADA accommodation notices
     ✅ 1-year application retention
     
     Want me to enable these?

User: [Yes, enable recommended] [Let me choose]

--- END COMPLIANCE ---

Bot: 🎉 Setup complete! Here's what we configured:
     
     ✅ Organization: Acme Corporation
     ✅ Branding: Custom colors and logo
     ✅ Email: Notifications enabled
     ✅ Departments: 3 departments created
     ✅ Users: 5 team members invited
     ✅ Compliance: US regulations enabled
     
     You can now:
     • Post your first job
     • View your careers page
     • Invite your team
     
     [Go to Dashboard] [Post First Job] [View Careers Page]
```

## Technical Implementation

### Backend (Django)

**New App: `setup_wizard`**

```
backend/setup_wizard/
├── __init__.py
├── models.py          # SetupProgress, Configuration
├── views.py           # Wizard API endpoints
├── serializers.py     # Config serialization
├── conversation.py    # Conversation flow logic
├── validators.py      # Input validation
└── tests.py           # Comprehensive tests
```

**Key Models**

```python
class SetupConfiguration(models.Model):
    """Stores wizard configuration state"""
    
    # Organization
    company_name = models.CharField(max_length=200)
    industry = models.CharField(max_length=100)
    company_size = models.CharField(max_length=50)
    
    # Branding
    primary_color = models.CharField(max_length=7)  # Hex
    logo = models.ImageField(upload_to='branding/', null=True)
    custom_css = models.TextField(blank=True)
    
    # Email
    notification_email = models.EmailField()
    smtp_host = models.CharField(max_length=255, blank=True)
    smtp_port = models.IntegerField(default=587)
    smtp_username = models.CharField(max_length=255, blank=True)
    smtp_password = models.CharField(max_length=255, blank=True)  # Encrypted
    smtp_use_tls = models.BooleanField(default=True)
    
    # Compliance
    jurisdiction = models.CharField(max_length=100)
    compliance_frameworks = models.JSONField(default=list)
    data_retention_days = models.IntegerField(default=365)
    
    # Wizard State
    setup_completed = models.BooleanField(default=False)
    current_step = models.CharField(max_length=50, default='welcome')
    completed_steps = models.JSONField(default=list)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ConversationState(models.Model):
    """Tracks conversation flow state"""
    
    session_id = models.UUIDField(default=uuid.uuid4, unique=True)
    current_node = models.CharField(max_length=100)
    context = models.JSONField(default=dict)  # Store user responses
    created_at = models.DateTimeField(auto_now_add=True)
```

**Conversation Engine**

```python
# setup_wizard/conversation.py

class ConversationNode:
    """Represents a single conversation step"""
    
    def __init__(self, node_id, bot_message, input_type, validators=None, 
                 next_node=None, branches=None):
        self.node_id = node_id
        self.bot_message = bot_message
        self.input_type = input_type  # 'text', 'choice', 'email', 'color', etc.
        self.validators = validators or []
        self.next_node = next_node  # Static next node
        self.branches = branches or {}  # Conditional branches
    
    def get_next_node(self, user_response):
        """Determine next node based on user response"""
        if self.branches:
            for condition, node_id in self.branches.items():
                if self.evaluate_condition(condition, user_response):
                    return node_id
        return self.next_node


class ConversationFlow:
    """Manages the conversation decision tree"""
    
    def __init__(self):
        self.nodes = self.build_conversation_tree()
    
    def build_conversation_tree(self):
        return {
            'welcome': ConversationNode(
                node_id='welcome',
                bot_message="👋 Welcome! I'll help you set up your job board. Ready?",
                input_type='choice',
                choices=['Yes, let\'s start', 'I\'ll do this later'],
                branches={
                    'choice_0': 'org_name',  # Yes
                    'choice_1': 'exit'       # Later
                }
            ),
            'org_name': ConversationNode(
                node_id='org_name',
                bot_message="Great! What's your company name?",
                input_type='text',
                validators=[RequiredValidator(), MaxLengthValidator(200)],
                next_node='org_industry'
            ),
            'org_industry': ConversationNode(
                node_id='org_industry',
                bot_message="Which industry best describes your organization?",
                input_type='choice',
                choices=['Technology', 'Healthcare', 'Finance', 'Manufacturing', 
                        'Retail', 'Education', 'Non-Profit', 'Other'],
                next_node='org_size'
            ),
            # ... more nodes
        }
    
    def process_response(self, current_node_id, user_response, context):
        """Process user response and determine next step"""
        
        node = self.nodes[current_node_id]
        
        # Validate response
        is_valid, error_message = self.validate_response(node, user_response)
        if not is_valid:
            return {
                'error': error_message,
                'retry_current': True
            }
        
        # Store response in context
        context[current_node_id] = user_response
        
        # Determine next node
        next_node_id = node.get_next_node(user_response)
        
        if next_node_id == 'complete':
            return self.complete_setup(context)
        
        next_node = self.nodes[next_node_id]
        
        return {
            'bot_message': next_node.bot_message,
            'input_type': next_node.input_type,
            'choices': getattr(next_node, 'choices', None),
            'current_node': next_node_id,
            'progress': self.calculate_progress(current_node_id)
        }
```

**API Endpoints**

```python
# setup_wizard/views.py

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

@api_view(['POST'])
@permission_classes([IsAdminUser])
def start_wizard(request):
    """Initialize wizard session"""
    
    # Check if setup already completed
    config, created = SetupConfiguration.objects.get_or_create(id=1)
    
    if not created and config.setup_completed:
        return Response({
            'already_completed': True,
            'can_modify': True,
            'current_config': SetupConfigSerializer(config).data
        })
    
    # Create conversation session
    session = ConversationState.objects.create(
        current_node='welcome'
    )
    
    flow = ConversationFlow()
    first_message = flow.nodes['welcome']
    
    return Response({
        'session_id': session.session_id,
        'bot_message': first_message.bot_message,
        'input_type': first_message.input_type,
        'choices': first_message.choices,
        'current_node': 'welcome'
    })


@api_view(['POST'])
@permission_classes([IsAdminUser])
def process_response(request):
    """Process user response and return next question"""
    
    session_id = request.data.get('session_id')
    user_response = request.data.get('response')
    
    session = ConversationState.objects.get(session_id=session_id)
    
    flow = ConversationFlow()
    result = flow.process_response(
        current_node_id=session.current_node,
        user_response=user_response,
        context=session.context
    )
    
    if 'error' in result:
        return Response(result, status=400)
    
    # Update session
    if not result.get('completed'):
        session.current_node = result['current_node']
        session.context = result.get('context', session.context)
        session.save()
    
    return Response(result)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def test_email(request):
    """Test SMTP configuration"""
    
    from django.core.mail import send_mail
    from django.conf import settings
    
    # Temporarily override settings with user's config
    # Send test email
    # Return success/failure
    
    pass
```

### Frontend (React)

**New Component: Setup Wizard**

```typescript
// frontend/src/components/SetupWizard/SetupWizard.tsx

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  content: string;
  timestamp: Date;
  inputType?: 'text' | 'choice' | 'email' | 'color' | 'file';
  choices?: string[];
}

export default function SetupWizard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [inputType, setInputType] = useState<string>('text');
  const [choices, setChoices] = useState<string[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Initialize wizard
  useEffect(() => {
    startWizard();
  }, []);
  
  const startWizard = async () => {
    const response = await fetch('/api/setup-wizard/start/', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    const data = await response.json();
    
    setSessionId(data.session_id);
    addBotMessage(data.bot_message, data.input_type, data.choices);
  };
  
  const addBotMessage = (content: string, inputType: string, choices?: string[]) => {
    setMessages(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: 'bot',
        content,
        timestamp: new Date(),
        inputType,
        choices
      }
    ]);
    
    setInputType(inputType);
    setChoices(choices || []);
  };
  
  const handleSubmit = async (response: string) => {
    // Add user message
    setMessages(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: 'user',
        content: response,
        timestamp: new Date()
      }
    ]);
    
    setCurrentInput('');
    setLoading(true);
    
    // Send to backend
    const apiResponse = await fetch('/api/setup-wizard/process/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        session_id: sessionId,
        response: response
      })
    });
    
    const data = await apiResponse.json();
    
    setLoading(false);
    
    if (data.error) {
      addBotMessage(`❌ ${data.error}`, inputType, choices);
      return;
    }
    
    if (data.completed) {
      addBotMessage(data.completion_message, 'complete');
      return;
    }
    
    setProgress(data.progress);
    addBotMessage(data.bot_message, data.input_type, data.choices);
  };
  
  return (
    <div className="setup-wizard-container">
      {/* Django Admin Header (preserved) */}
      <div className="wizard-header">
        <h1>Setup Wizard</h1>
        <button className="save-exit">Save & Exit</button>
      </div>
      
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
        <span>{progress}% Complete</span>
      </div>
      
      {/* Chat Container */}
      <div className="chat-container">
        {messages.map(msg => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        
        {loading && <LoadingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Area */}
      <div className="input-area">
        {inputType === 'text' && (
          <TextInput 
            value={currentInput}
            onChange={setCurrentInput}
            onSubmit={handleSubmit}
          />
        )}
        
        {inputType === 'choice' && (
          <ChoiceButtons 
            choices={choices}
            onSelect={handleSubmit}
          />
        )}
        
        {inputType === 'email' && (
          <EmailInput 
            value={currentInput}
            onChange={setCurrentInput}
            onSubmit={handleSubmit}
          />
        )}
        
        {/* More input types... */}
      </div>
    </div>
  );
}
```

### SSO Integration (Within Wizard)

**SSO Configuration Node in Conversation**

```python
'sso_enable': ConversationNode(
    node_id='sso_enable',
    bot_message="""
    Do you want to enable Single Sign-On (SSO)?
    
    SSO lets your team log in using their existing work credentials
    (like Microsoft 365, Google Workspace, or Okta).
    """,
    input_type='choice',
    choices=['Yes, enable SSO', 'No, use regular passwords'],
    branches={
        'choice_0': 'sso_provider',
        'choice_1': 'departments'
    }
),

'sso_provider': ConversationNode(
    node_id='sso_provider',
    bot_message="Which identity provider does your organization use?",
    input_type='choice',
    choices=[
        'Microsoft 365 / Azure AD',
        'Google Workspace',
        'Okta',
        'SAML 2.0 (Generic)',
        'Other'
    ],
    next_node='sso_azure_ad'  # Branch to provider-specific flow
),

'sso_azure_ad': ConversationNode(
    node_id='sso_azure_ad',
    bot_message="""
    Great! To set up Azure AD SSO, I'll need a few details from your 
    Azure portal. Don't worry, I'll guide you through it.
    
    First, what's your Azure AD Tenant ID?
    (You can find this in Azure Portal → Azure Active Directory → Overview)
    """,
    input_type='text',
    validators=[UUIDValidator()],
    next_node='sso_azure_client_id'
),

# ... more SSO configuration nodes
```

## Styling (Preserving Django Admin Feel)

```css
/* setup_wizard/static/css/wizard.css */

.setup-wizard-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Roboto", "Lucida Grande", Verdana, Arial, sans-serif;
  background: #f8f8f8;
}

.wizard-header {
  background: #4F7942;
  color: white;
  padding: 15px 20px;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-bar {
  background: white;
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;
}

.progress-fill {
  height: 6px;
  background: #4F7942;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.chat-container {
  background: white;
  min-height: 500px;
  max-height: 600px;
  overflow-y: auto;
  padding: 20px;
}

.message-bot {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.message-bot .avatar {
  width: 36px;
  height: 36px;
  background: #4F7942;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-right: 12px;
}

.message-bot .content {
  background: #f0f0f0;
  padding: 12px 16px;
  border-radius: 0 12px 12px 12px;
  max-width: 70%;
  line-height: 1.5;
}

.message-user {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.message-user .content {
  background: #4F7942;
  color: white;
  padding: 12px 16px;
  border-radius: 12px 0 12px 12px;
  max-width: 70%;
}

.input-area {
  background: white;
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  border-radius: 0 0 8px 8px;
}

.choice-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.choice-button {
  padding: 12px 20px;
  border: 2px solid #4F7942;
  background: white;
  color: #4F7942;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

.choice-button:hover {
  background: #4F7942;
  color: white;
}

/* Professional, business-appropriate styling throughout */
```

## Testing Strategy

1. **Unit Tests**: Each conversation node logic
2. **Integration Tests**: Full conversation flows
3. **E2E Tests**: Complete wizard run-through
4. **User Testing**: HR professionals (non-technical)

## Timeline

- **Week 1-2**: Backend conversation engine
- **Week 3-4**: Frontend chat UI
- **Week 5**: SSO integration nodes
- **Week 6**: Testing & refinement

---

## Future Enhancements (v1.0)

- **Actual LLM Integration**: Swap conversation engine with Ollama/LLM
- **Voice Input**: Speak responses instead of typing
- **Multi-language**: Conversation in user's language
- **Smart Suggestions**: AI-powered configuration recommendations
