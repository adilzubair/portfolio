// Analytics utility functions for tracking user interactions

export const trackEvent = (eventName, eventData = {}) => {
  // Track with Vercel Analytics if available
  if (window.va) {
    window.va('track', eventName, eventData);
  }

  // Also log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, eventData);
  }
};

// Pre-defined event trackers
export const analytics = {
  // Navigation events
  trackNavigation: (section) => {
    trackEvent('navigation_click', { section });
  },

  // Download events
  trackResumeDownload: () => {
    trackEvent('resume_download', { timestamp: new Date().toISOString() });
  },

  // Contact form events
  trackFormSubmit: (success) => {
    trackEvent('contact_form_submit', { success });
  },

  trackFormError: (errorType) => {
    trackEvent('contact_form_error', { errorType });
  },

  // Project interaction events
  trackProjectView: (projectName) => {
    trackEvent('project_view', { project: projectName });
  },

  trackProjectLinkClick: (projectName, linkType) => {
    trackEvent('project_link_click', { project: projectName, linkType });
  },

  // Theme toggle
  trackThemeToggle: (theme) => {
    trackEvent('theme_toggle', { theme });
  },

  // Social media clicks
  trackSocialClick: (platform) => {
    trackEvent('social_click', { platform });
  },

  // Scroll depth
  trackScrollDepth: (percentage) => {
    trackEvent('scroll_depth', { percentage });
  },

  // Time on page
  trackTimeOnPage: (seconds) => {
    trackEvent('time_on_page', { seconds });
  },
};

export default analytics;
