import apiSlice from "../api/apiSlice";

const hospitalApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHospital: builder.query({
            query: () => ({
                url: '/hospital'
            })
        }),
        updateHospital: builder.mutation({
            query: (id, data) => ({
                url: `/hospital-room/${id}`,
                method: 'PUT',
                body: data
            })
        })
    })
})

export const { useGetHospitalQuery } = hospitalApi