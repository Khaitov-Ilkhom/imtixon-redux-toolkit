import {api} from "./index.jsx";

const AuthApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (reg) => ({
        url: "/register",
        method: "POST",
        body: reg
      })
    }),
    signIn: build.mutation({
      query: (log) => ({
        url: "/login",
        method: "POST",
        body: log
      })
    })
  })
})

export const {useSignUpMutation, useSignInMutation} = AuthApi