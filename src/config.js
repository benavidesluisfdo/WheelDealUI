const config = {
  development: {
    URLS_BACKEND: 'http://localhost:8080'
    // Add other development configuration options here
  }
};

// Determine the environment based on the browser or Node.js environment
const environment = typeof window !== 'undefined' ? 'development' : process.env.NODE_ENV || 'development';

// Export the configuration based on the environment
export default config[environment];
