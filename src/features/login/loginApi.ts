import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define User interface if it's not imported from elsewhere
export interface User {
  id: string; // Add other properties as per your user model
  fullName: string;
  username: string;
  contactPhone: string;
  address: string;
}

export interface logInUser {
  username: string;
  password: string;
}

export interface registerUser {
  fullName: string;
  password?: string;
  username: string;
  contactPhone: string;
  address: string;
}

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vehicle-mng-backend.onrender.com/api",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<User, logInUser>({
      query: (user) => ({
        url: "login",
        method: "POST",
        body: user,
      }),
    }),

    registerUser: builder.mutation<User, registerUser>({
      query: (user) => ({
        url: "register",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

// Uncomment and update this to export the hooks for your mutations
// export const { useRegisterUserMutation, useLoginUserMutation } = loginApi;

export default loginApi;
