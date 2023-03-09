import { Alert, Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useFileUpload } from 'use-file-upload';
import { usePostPharmacyMutation, usePostRoleMutation } from '../../../Redux/features/role/roleApi';
import { PrimaryButton } from '../../../Styles/Button/button';

const Pharmacy = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [file, selectFile] = useFileUpload()

    const { user: { email } } = useSelector(state => state.auth)

    const [postRole, { isSuccess }] = usePostRoleMutation()
    const [postPharmacy] = usePostPharmacyMutation()

    const [time, setTime] = useState('');
    const handleChange = (event) => {
        setTime(event.target.value);
    };


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

                const pharmacyInfo = {
                    img: imageUrl,
                    name: data.name,
                    location: data.location,
                    ratting: 0,
                    phone: data.phone,
                    email: email,
                    opening_hours: time,
                    available_medicine: data.medicine,
                    role: 'pharmacy',
                }

                postRole(pharmacyInfo)
                postPharmacy(pharmacyInfo)
            })
    };

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
                            fullWidth id="outlined-basic" label="Shop Name" variant="outlined" />
                        {
                            errors.name?.type === 'required' &&
                            <Alert severity="error">Name is required</Alert>
                        }
                    </Box>
                    <Box>
                        <TextField
                            {...register("location", { required: true })}
                            fullWidth id="outlined-basic" label="Location" variant="outlined" />
                        {
                            errors.location?.type === 'required' &&
                            <Alert severity="error">Location is required</Alert>
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
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Shift Time</InputLabel>
                            <Select
                                {...register("shift", { required: true })}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={time}
                                label="Shift Time"
                                onChange={handleChange}
                            >
                                <MenuItem value={'5PM - 10PM'}>5PM - 9PM</MenuItem>
                                <MenuItem value={'8AM - 10PM'}>8AM - 10PM</MenuItem>
                                <MenuItem value={'4PM - 6PM'}>4PM - 6PM</MenuItem>
                                <MenuItem value={'8PM - 4AM'}>8PM - 4AM</MenuItem>
                            </Select>
                        </FormControl>
                        {
                            errors.shift?.type === 'required' &&
                            <Alert severity="error">Shift time is required</Alert>
                        }
                    </Box>
                    <Box>
                        <TextField
                            {...register("medicine", { required: true })}
                            fullWidth id="outlined-basic" label="Available Medicine" variant="outlined" />
                        {
                            errors.medicine?.type === 'required' &&
                            <Alert severity="error">Available Medicine is required</Alert>
                        }
                    </Box>
                </Box>
                <Box mt={2} display={'flex'} justifyContent={'center'}>
                    <PrimaryButton type='submit'>Register With Pharmacy</PrimaryButton>
                </Box>
            </form>
        </Box>
    );
};

export default Pharmacy;