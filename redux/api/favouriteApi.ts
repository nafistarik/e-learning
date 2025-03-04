import { baseApi } from "./baseApi";

const favouriteApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    
    getUserFavourites: build.query({
      query: (userId) => ({
        url: `/users/favorites/${userId}`,
        method: "GET",
      }),
      providesTags: ["Favourite"],
    }),

    addToFavourite: build.mutation({
      query: (data) => ({
        url: "/users/favorites",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Favourite"],
    }),

    removeFromFavourite: build.mutation({
      query: (courseId) => ({
        url: `/users/favorites/${courseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favourite"],
    }),
  }),
});

export const {
  useGetUserFavouritesQuery,
  useAddToFavouriteMutation,
  useRemoveFromFavouriteMutation
} = favouriteApi;
