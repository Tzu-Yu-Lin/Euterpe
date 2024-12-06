
const instance = axios.create({
  baseURL: "https://api.spotify.com/v1", // replace to  API basic URL
  timeout: 10000, 
});


instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// reponse to interceptors
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/index.html"; 
      location.removeItem("token");
    }
    return Promise.reject(error);
  }
);


window.axiosInstance = instance;
