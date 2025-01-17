import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/getBaseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/books`,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery,
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `/`,
      providesTagsList: ["Books"],
    }),

    getBookById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Book"],
    }),
  }),
});

export const { useGetAllBooksQuery } = booksApi;
