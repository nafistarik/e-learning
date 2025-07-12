import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEAPI = "https://course-platform-ap-kkbn.onrender.com/api"

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEAPI,
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", ` ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "Auth",
    "Courses",
    "Favourite",
    "Enroll"
  ],
});
export const {} = baseApi;
