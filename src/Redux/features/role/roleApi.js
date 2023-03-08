import apiSlice from "../api/apiSlice";

const roleApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postRole: builder.mutation({
            query: (data) => ({
                url: '/role',
                method: "POST",
                body: data
            }),
        }),
        postUser: builder.mutation({
            query: (data) => ({
                url: '/user',
                method: "POST",
                body: data
            }),
        }),
        postDoctor: builder.mutation({
            query: (data) => ({
                url: '/doctor',
                method: "POST",
                body: data
            }),
        }),
        postHospital: builder.mutation({
            query: (data) => ({
                url: '/hospital',
                method: "POST",
                body: data
            }),
        }),
        postPharmacy: builder.mutation({
            query: (data) => ({
                url: '/pharmacy',
                method: "POST",
                body: data
            }),
        }),
        getRoleFilter: builder.query({
            query: (email) => ({
                url: `/role-filter?email=${email}`
            })
        })
    })
})

export const {
    usePostRoleMutation,
    usePostUserMutation,
    usePostDoctorMutation,
    usePostHospitalMutation,
    usePostPharmacyMutation,
    useGetRoleFilterQuery
} = roleApi