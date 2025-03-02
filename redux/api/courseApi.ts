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

    getSingleCourse: build.query({
      query: (courseId) => ({
        url: `/courses/${courseId}`,
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),

    createCourse: build.mutation({
      query: (data) => ({
        url: "/courses/new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Courses"],
    }),

    updateCourse: build.mutation({
      query: ({ id, data }) => ({
        url: `/courses/update/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Courses"],
    }),

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
  useGetSingleCourseQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseApi;
