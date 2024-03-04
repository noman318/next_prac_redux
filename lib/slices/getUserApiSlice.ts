import { BASE_URL, apiSlice } from "./apiSlice";

export const jsonApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: BASE_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetAllUsersQuery } = jsonApiSlice;
