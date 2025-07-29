export const BASE_URL = "http://localhost:8000";
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", // Signup
    LOGIN: "api/auth/login", // Authenticate user & return JWT token
    GET_PROFILE: "/api/auth/profile", // Get logged-in user details
  },
  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image", // Upload Profile Picture
  },
  AI: {
    GENERATE_QUESTIONS: "/api/ai/generate-questions", // Generate interview questions and answers using Gemini
    GENERATE_EXPLAINATION: "/api/ai/generate-explanation", // Generate concept explaination using Gemini
  },
  SESSION: {
    CREATE: "/api/sessions/create", // Create a new Interview session with questions
    GET_ALL: "/api/sessions/my-sessions", // Get all user sessions
    GET_ONE: (id) => `/api/sessions/${id}`, // Get sessions details with question
    DELETE: (id) => `/api/sessions/${id}`, // Delete a session
  },
  QUESTION: {
    ADD_TO_SESSION: "/api/questions/add", // Add more questions to a sessions
    PIN: (id) => `/api/questions/${id}/pin`, // Pin or Unpin a question
    UPDATE_NOTE: (id) => `/api/questions/${id}/note`, // Update/Add a note to a question
  },
};
