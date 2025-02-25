import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/users/all-profile",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
} = userApi;
