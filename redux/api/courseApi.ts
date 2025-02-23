import { baseApi } from "./baseApi";

const courseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get all courses
    getCourses: build.query({
      query: () => ({
        url: "/courses",
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),

    // Create a new course (FormData handled in the component)
    createCourse: build.mutation({
      query: (data) => ({
        url: "/courses/new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Courses"],
    }),

    // Update an existing course
    updateCourse: build.mutation({
      query: ({ id, data }) => ({
        url: `/courses/update/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Courses"],
    }),

    // Delete a course
    deleteCourse: build.mutation({
      query: (id) => ({
        url: `/courses/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Courses"],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseApi;
