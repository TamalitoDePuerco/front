class ApiConfig {
  constructor() {
    this.baseURL = "http://localhost:8000";
  }

  getBaseUrl() {
    return this.baseURL;
  }
}

const apiConfig = new ApiConfig();

export default apiConfig;
