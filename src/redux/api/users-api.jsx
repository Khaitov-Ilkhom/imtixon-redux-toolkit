import {api} from "./index.jsx";

const UsersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => ({
        url: "/users"
      })
    }),
    getUser: build.query({
      query: (id) => ({
        url: `/users/${id}`
      })
    }),
    deletedUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
        id,
      }),
    }),
    createUser: build.mutation({
      query: (cre) => ({
        url: `/users/`,
        method: "POST",
        body: cre,
      }),
    }),
  })
})

export const {useGetAllUserQuery, useGetUserQuery, useDeletedUserMutation, useCreateUserMutation} = UsersApi