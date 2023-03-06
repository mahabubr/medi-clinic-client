import apiSlice from "../api/apiSlice";

const roleApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postRole: builder.mutation({
            query: (data) => ({
                url: '/user',
                method: "POST",
                body: data
            }),
        }),
        getRole: builder.query({
            query: (email) => ({
                url: `/user?email=${email}`
            })
        }),
    })
})

export const { usePostRoleMutation, useGetRoleQuery } = roleApi