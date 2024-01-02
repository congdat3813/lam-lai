import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../base";



const authApi = API.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: ({username, password}) => ({
        url: 'login',
        method: 'POST',
        body: {username, password},
      }),
    }),
    registerUser: build.mutation({
      query: ({email, username, password}) => ({
        url: `signup`,
        method: 'POST',
        body: {email, username, password},
      }),
    }),
  }),
  overrideExisting: true,
});


export const { useLoginUserMutation, useRegisterUserMutation} = authApi;
