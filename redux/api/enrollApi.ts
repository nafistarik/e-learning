import { baseApi } from "./baseApi";

const enrollApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    
    getAllEnrollments: build.query({
      query: (userId) => ({
        url: `/users/enrolled/${userId}`,
        method: "GET",
      }),
      providesTags: ["Enroll"],
    }),

    enrollCourse: build.mutation({
      query: (data) => ({
        url: "/users/enroll",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Enroll"],
    }),

    getAllEnrollmentsByAdmin: build.query({
      query: () => ({
        url: "users/course-enrollments",
        method: "GET",
      }),
      providesTags: ["Enroll"],
    }),

  }),
});

export const {
    useGetAllEnrollmentsQuery,
    useEnrollCourseMutation,
    useGetAllEnrollmentsByAdminQuery,
} = enrollApi;
