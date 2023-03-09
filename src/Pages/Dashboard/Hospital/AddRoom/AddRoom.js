import { Box, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';
import { SecondaryButton, TabPrimaryButton } from '../../../../Styles/Button/button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};


const AddRoom = () => {

    const [open, setOpen] = useState(false);
    const [roomText, setRoomText] = useState('')

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAddRoom = () => {
        console.log(roomText);
    }

    return (
        <Box sx={{ width: '90%', margin: '0 auto', mt: 5 }}>
            <TabPrimaryButton onClick={handleOpen}>ADD ROOM</TabPrimaryButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField type={'number'} onChange={(e) => setRoomText(e.target.value)} fullWidth id="outlined-basic" label="Room No" variant="outlined" />
                    <Box mt={1}>
                        <SecondaryButton onClick={handleAddRoom}>Add</SecondaryButton>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default AddRoom;