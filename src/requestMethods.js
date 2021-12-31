import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2Q5YzUwMjc1NGE5ZmEwYTkxMmNlMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDg2NDg5MiwiZXhwIjoxNjQxMTI0MDkyfQ.ACqmuQ-ntwtwwJW19poWRbvts92d-5dITQsYn7gOZm4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
