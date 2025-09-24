export const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

// ----------------- 🔐 Auth API Routes -----------------
export const registerUserUrl = baseUrl + '/auth/register'
export const loginUrl = baseUrl + '/auth/login'
export const forgotPasswordUrl = baseUrl + '/auth/forgot-password'
export const resetPasswordUrl = baseUrl + '/auth/reset-password'
export const changePasswordUrl = baseUrl + '/auth/change-password'
export const refreshTokenUrl = baseUrl + '/auth/refresh-token'

// ----------------- 🎡 Event API Routes -----------------
export const createEventUrl = baseUrl + '/event/create'
export const fetchUserEventsUrl = baseUrl + '/event'
export const fetchSingleEventUrl = (eventId) => baseUrl + `/event/${eventId}`
export const updateEventUrl = (eventId) => baseUrl + `/event/${eventId}`
export const deleteEventUrl = (eventId) => baseUrl + `/event/${eventId}`

// ----------------- 💻 Event API Routes -----------------
export const createWebsiteUrl = baseUrl + 'website/create'
export const getWebsiteUrl = baseUrl + `website/:websiteId`
export const updateSectionUrl = (websiteId, sectionId) => baseUrl + `website/${websiteId}/${sectionId}`
export const deleteWebsiteUrl = (websiteId) => baseUrl + `website/${websiteId}`
export const getPublicWebsiteUrl = (subdomain) => baseUrl + `website/public/${subdomain}`
export const sendEmailUrl = baseUrl + 'website/sendEmail'

// ----------------- 📋 Event API Routes -----------------
export const addTemplateUrl = baseUrl + 'template/add'
export const getAllTemplatesUrl = baseUrl + 'template/all'
