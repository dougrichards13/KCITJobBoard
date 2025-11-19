'use client';

import { useState, useEffect } from 'react';

interface Job {
  id: number;
  title: string;
  location: string;
  description: string;
  requirements?: string;
  responsibilities?: string;
  salary_range?: string;
  created_at: string;
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

  // Fetch active jobs from Django API
  useEffect(() => {
    fetch('http://localhost:8001/api/jobs/')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching jobs:', err);
        setError('Unable to load job postings. Please try again later.');
        setLoading(false);
      });
  }, []);

  const openApplication = (job: Job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const closeApplication = () => {
    setSelectedJob(null);
    setShowApplicationForm(false);
  };

  const toggleJobDetails = (jobId: number) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-12 px-4">
        <div className="mb-8">
          <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6">
            <svg className="w-16 h-16 text-[#4F7942]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ color: "#4F7942", fontFamily:"Montserrat,Arial,sans-serif" }}>
          Join Our Team
        </h1>
        <p className="text-lg text-[#495464] mb-8 max-w-2xl mx-auto" style={{ fontFamily:"Lato,Arial,sans-serif" }}>
          Be part of a mission-driven financial organization dedicated to supporting rural communities and agribusiness growth. Discover opportunities to make a meaningful impact.
        </p>
      </section>

      {/* Job List Feed as Cards */}
      <section id="positions" className="max-w-4xl mx-auto px-4 py-6">
        {loading && (
          <div className="text-center py-12">
            <p className="text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>Loading positions...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600" style={{ fontFamily: "Lato,Arial,sans-serif" }}>{error}</p>
          </div>
        )}
        
        {!loading && !error && jobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
              No open positions at this time. Please check back later!
            </p>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div key={job.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden">
                <div className="px-8 py-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#4F7942] mb-2" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="inline-flex items-center text-sm text-[#5CA4EA] font-semibold">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        {job.salary_range && (
                          <span className="inline-flex items-center text-sm text-[#FFC857] font-semibold">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {job.salary_range}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-base text-[#495464] mb-4 leading-relaxed" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
                    {isExpanded ? job.description : `${job.description.substring(0, 180)}${job.description.length > 180 ? '...' : ''}`}
                  </p>

                  {isExpanded && (
                    <div className="space-y-4 mb-4">
                      {job.requirements && (
                        <div>
                          <h4 className="font-semibold text-[#4F7942] mb-2" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
                            Requirements
                          </h4>
                          <p className="text-sm text-[#495464] whitespace-pre-line" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
                            {job.requirements}
                          </p>
                        </div>
                      )}
                      {job.responsibilities && (
                        <div>
                          <h4 className="font-semibold text-[#4F7942] mb-2" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
                            Responsibilities
                          </h4>
                          <p className="text-sm text-[#495464] whitespace-pre-line" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
                            {job.responsibilities}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => openApplication(job)}
                      className="px-6 py-3 rounded-lg bg-[#4F7942] text-white font-semibold hover:bg-[#3d5f35] transition shadow-md"
                      style={{ fontFamily: "Montserrat,Arial,sans-serif" }}
                    >
                      Apply Now
                    </button>
                    {(job.requirements || job.responsibilities || job.description.length > 180) && (
                      <button
                        onClick={() => toggleJobDetails(job.id)}
                        className="px-6 py-3 rounded-lg border-2 border-[#4F7942] text-[#4F7942] font-semibold hover:bg-[#F7F7F2] transition"
                        style={{ fontFamily: "Montserrat,Arial,sans-serif" }}
                      >
                        {isExpanded ? 'Show Less' : 'View Details'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Equal Opportunity & Hiring Practices */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white border border-gray-200 rounded-2xl px-8 py-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#4F7942] mb-6 text-center" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
            Equal Opportunity Employer
          </h2>
          <div className="prose prose-lg max-w-none" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
            <p className="text-[#495464] mb-4 leading-relaxed">
              Cooperative Finance Association (CFA) is an equal opportunity employer committed to building a diverse and inclusive workforce. We do not discriminate on the basis of race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability, veteran status, or any other legally protected characteristics.
            </p>
            <p className="text-[#495464] mb-4 leading-relaxed">
              All employment decisions at CFA are based on business needs, job requirements, and individual qualifications. We believe that diversity strengthens our organization and enables us to better serve the agricultural communities we support.
            </p>
            <p className="text-[#495464] mb-4 leading-relaxed">
              CFA provides reasonable accommodations to qualified individuals with disabilities in accordance with applicable law. If you require assistance or accommodation during the application or interview process, please contact our Human Resources department.
            </p>
            <p className="text-[#495464] leading-relaxed">
              We are committed to fair and transparent hiring practices, ensuring all candidates are evaluated equitably based on their skills, experience, and potential to contribute to our mission of supporting rural and agricultural finance.
            </p>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationForm && selectedJob && (
        <ApplicationModal 
          job={selectedJob} 
          onClose={closeApplication}
        />
      )}
    </main>
  );
}

function ApplicationModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    cover_letter: '',
    linkedin_url: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resume) {
      setError('Please upload your resume');
      return;
    }

    setSubmitting(true);
    setError('');

    const formDataToSend = new FormData();
    formDataToSend.append('job', job.id.toString());
    formDataToSend.append('first_name', formData.first_name);
    formDataToSend.append('last_name', formData.last_name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('cover_letter', formData.cover_letter);
    formDataToSend.append('linkedin_url', formData.linkedin_url);
    formDataToSend.append('resume', resume);

    try {
      const response = await fetch('http://localhost:8001/api/applications/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data.error || data.message || `Failed to submit application (Status: ${response.status}). Please try again.`);
      }
    } catch (err) {
      console.error('Application submission error:', err);
      setError(`Network error: ${err instanceof Error ? err.message : 'Please check your connection and try again.'}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-[#4F7942] mb-4" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
            Application Submitted!
          </h2>
          <p className="text-[#495464] mb-6" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
            Thank you for applying to {job.title}. We&apos;ll review your application and be in touch soon!
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-[#4F7942] text-white rounded-lg font-semibold hover:bg-[#3d5f35] transition"
            style={{ fontFamily: "Montserrat,Arial,sans-serif" }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full my-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#4F7942]" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
              Apply for {job.title}
            </h2>
            <p className="text-sm text-[#5CA4EA]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
              {job.location}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#495464] hover:text-[#4F7942] text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#495464] mb-1" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
                First Name *
              </label>
              <input
                type="text"
                required
                value={formData.first_name}
                onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F7942] focus:border-transparent"
                style={{ fontFamily: "Lato,Arial,sans-serif" }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#495464] mb-1" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
                Last Name *
              </label>
              <input
                type="text"
                required
                value={formData.last_name}
                onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F7942] focus:border-transparent"
                style={{ fontFamily: "Lato,Arial,sans-serif" }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#495464] mb-1" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F7942] focus:border-transparent"
              style={{ fontFamily: "Lato,Arial,sans-serif" }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#495464] mb-1" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F7942] focus:border-transparent"
              style={{ fontFamily: "Lato,Arial,sans-serif" }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#495464] mb-1" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              value={formData.linkedin_url}
              onChange={(e) => setFormData({...formData, linkedin_url: e.target.value})}
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F7942] focus:border-transparent"
              style={{ fontFamily: "Lato,Arial,sans-serif" }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#495464] mb-1" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
              Resume * (PDF, DOC, DOCX - Max 5MB)
            </label>
            <input
              type="file"
              required
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files?.[0] || null)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F7942] focus:border-transparent"
              style={{ fontFamily: "Lato,Arial,sans-serif" }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#495464] mb-1" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
              Cover Letter (Optional)
            </label>
            <textarea
              value={formData.cover_letter}
              onChange={(e) => setFormData({...formData, cover_letter: e.target.value})}
              rows={6}
              placeholder="Tell us why you're interested in this position..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F7942] focus:border-transparent resize-none"
              style={{ fontFamily: "Lato,Arial,sans-serif" }}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="flex-1 px-6 py-3 border-2 border-[#4F7942] text-[#4F7942] rounded-lg font-semibold hover:bg-[#F7F7F2] transition disabled:opacity-50"
              style={{ fontFamily: "Montserrat,Arial,sans-serif" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 px-6 py-3 bg-[#4F7942] text-white rounded-lg font-semibold hover:bg-[#3d5f35] transition disabled:opacity-50"
              style={{ fontFamily: "Montserrat,Arial,sans-serif" }}
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
