import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //create user
    createUser: build.mutation({
      query: (data) => {
        return {
          url: `/auth/register`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    // verify user
    verifyUser: build.mutation({
      query: (data) => {
        return {
          url: "/auth/verify-otp",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    // login user
    loginUser: build.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    // forgot password
    forgotPassword: build.mutation({
      query: (data) => {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    // reset password
    resetPassword: build.mutation({
      query: ({ data, headers }) => {
        return {
          url: "/auth/reset-password",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    // get user
    getUser: build.query({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Auth"],
    }),
    // update user
    updateUser: build.mutation({
      query: ({ formData, id }) => {
        return {
          url: `/users/${id}`,
          method: "PUT",
          body: formData,
        };
      },
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useVerifyUserMutation,
  useLoginUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} = authApi;
