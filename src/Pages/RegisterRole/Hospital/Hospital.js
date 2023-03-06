import { Alert, Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MultiSelect } from 'react-multi-select-component';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useFileUpload } from 'use-file-upload';
import { usePostRoleMutation } from '../../../Redux/features/role/roleApi';
import { PrimaryButton } from '../../../Styles/Button/button';

const Hospital = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user: { email } } = useSelector(state => state.auth)

    const [selected, setSelected] = useState([]);
    const [postRole, { isSuccess }] = usePostRoleMutation()

    const [file, selectFile] = useFileUpload()

    useEffect(() => {
        if (isSuccess) {
            toast.success('Congratulations ! Your Account Registered', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }, [isSuccess])

    const onSubmit = data => {
        const image = file?.file
        const formData = new FormData()
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_API_KEY}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const imageUrl = imageData.data.url
                toast.success('Image Uploaded', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                const hospitalInfo = {
                    img: imageUrl,
                    name: data.name,
                    description: data.description,
                    email: email,
                    phone: data.phone,
                    location: data.location,
                    ratting: 0,
                    role: 'hospital',
                    hash_tag: selected
                }

                postRole(hospitalInfo)

            })
    };

    const options = [
        { label: "Hospital", value: "Hospital" },
        { label: "Doctor", value: "Doctor" },
        { label: "Covid", value: "Covid" },
        { label: "Medicine", value: "Medicine" },
        { label: "Nurse", value: "Nurse" },
        { label: "Health", value: "Health" },
        { label: "Healthcare", value: "Healthcare" },
        { label: "Doctors", value: "Doctors" },
        { label: "Surgery", value: "Surgery" },
        { label: "Medical", value: "Medical" },
    ];


    return (
        <Box sx={{ width: '80%', margin: '0 auto' }}>
            <Box>
                {
                    file
                        ?
                        <Box mt={2} sx={{ display: 'grid', placeItems: 'center' }}>
                            <img style={{ width: '200px', height: '150px', borderRadius: '8px', objectFit: 'cover' }} src={file.source} alt='preview' />
                        </Box>
                        :
                        <Box {...register("photo", { required: true })} sx={{ display: 'grid', placeItems: 'center' }}>
                            <svg onClick={() => {
                                // Single File Upload
                                selectFile()
                            }}
                                style={{ width: '200px', height: '150px', }}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            {
                                errors.photo?.type === 'required' &&
                                <Alert severity="error">Image is required</Alert>
                            }
                        </Box>
                }
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box mt={5} sx={{
                    display: 'grid', gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)'
                    }, gap: 2
                }}>
                    <Box>
                        <TextField
                            {...register("name", { required: true })}
                            fullWidth id="outlined-basic" label="Full Name" variant="outlined" />
                        {
                            errors.name?.type === 'required' &&
                            <Alert severity="error">Name is required</Alert>
                        }
                    </Box>
                    <Box>
                        <TextField
                            {...register("description", { required: true })}
                            fullWidth id="outlined-basic" label="Description" variant="outlined" />
                        {
                            errors.designation?.type === 'required' &&
                            <Alert severity="error">Description is required</Alert>
                        }
                    </Box>
                    <Box>
                        <TextField
                            defaultValue={email} disabled
                            fullWidth id="outlined-basic" label="Email" variant="outlined" />
                    </Box>
                    <Box>
                        <TextField
                            {...register("phone", { required: true })}
                            fullWidth id="outlined-basic" label="Phone" variant="outlined" />
                        {
                            errors.phone?.type === 'required' &&
                            <Alert severity="error">Phone number is required</Alert>
                        }
                    </Box>
                    <Box>
                        <TextField
                            {...register("location", { required: true })}
                            fullWidth id="outlined-basic" label="Location Name" variant="outlined" />
                        {
                            errors.location?.type === 'required' &&
                            <Alert severity="error">Location Name is required</Alert>
                        }
                    </Box>
                    <Box>
                        <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
                        />
                    </Box>
                </Box>
                <Box mt={2} display={'flex'} justifyContent={'center'}>
                    <PrimaryButton type='submit'>Register With Hospital</PrimaryButton>
                </Box>
            </form>
        </Box>
    );
};

export default Hospital;