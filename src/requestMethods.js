import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2Q5ZTc5YzlhM2ZmMWYxYzBhYWQzMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA5NzE3NDAsImV4cCI6MTY0MTIzMDk0MH0.GAm8NzUNvHGH1D2hHcBj64OKtnyZmwd8sT-x0qH2AjY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: `Bearer ${TOKEN}`,
  },
});
