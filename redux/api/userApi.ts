import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/users/all-profile",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
    updateUserProfile: build.mutation({
      query: ({userId, data}) => ({
        url: `/users/profile/${userId}`,
        method: "PUT",
        body:data
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateUserProfileMutation,
} = userApi;
