import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getSearchProducts: builder.query({
      query: (name) => `/products/search?q=${name}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetSearchProductsQuery,
} = productsApi;
