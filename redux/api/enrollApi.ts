import { baseApi } from "./baseApi";

const enrollApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    
    getAllEnrollments: build.query({
      query: (userId) => ({
        url: `/users/enrolled/${userId}`,
        method: "GET",
      }),
      providesTags: ["Favourite"],
    }),

    enrollCourse: build.mutation({
      query: (data) => ({
        url: "/users/enroll",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Favourite"],
    }),

  }),
});

export const {
    useGetAllEnrollmentsQuery,
    useEnrollCourseMutation,
} = enrollApi;
