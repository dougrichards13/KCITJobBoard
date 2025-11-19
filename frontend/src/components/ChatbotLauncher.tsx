'use client';

export default function ChatbotLauncher() {
  const handleChatbotClick = () => {
    try {
      // Use environment variable or fallback to localhost in development
      const chatbotUrl = process.env.NEXT_PUBLIC_CHATBOT_URL || 'http://localhost:3001';
      window.open(chatbotUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open chatbot:', error);
      // Fallback: could show a modal or toast notification
      alert('Chatbot is currently unavailable. Please try again later or contact us directly.');
    }
  };

  return (
    <button
      className="chatbot-launcher"
      title="Chat with our AI Assistant"
      aria-label="Open AI chatbot assistant"
      onClick={handleChatbotClick}
      type="button"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="32" 
        width="32" 
        viewBox="0 0 24 24" 
        aria-hidden="true"
        fill="none"
      >
        <circle cx="12" cy="12" r="10" fill="var(--color-secondary)"/>
        <path 
          d="M8 13h8M8 16h8M10 10h4" 
          stroke="var(--color-neutral-dark)" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

