import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import A11yProps from '../../../Components/A11yProps/A11yProps';
import TabPanel from '../../../Components/TabPanel/TabPanel';
import { ContainerSubTitleText, ContainerTitleText } from '../../../Styles/Typography/Typography';
import Ambulances from './Ambulances/Ambulances';
import Doctors from './Doctors/Doctors';
import Hospitals from './Hospitals/Hospitals';
import MedicalShop from './MedicalShop/MedicalShop';
import Medicine from './Medicine/Medicine';
import Nurses from './Nurses/Nurses';
import Therapy from './Therapy/Therapy';

const AllSectionTab = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '90%', margin: '0 auto', mt: 10 }}>
            <ContainerSubTitleText>Explore</ContainerSubTitleText>
            <ContainerTitleText>Our Category</ContainerTitleText>
            <Box
                sx={{
                    flexGrow: 1, display: {
                        xs: 'block',
                        lg: 'flex'
                    }, mt: 5
                }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Doctors" {...A11yProps(0)} />
                    <Tab label="Hospitals" {...A11yProps(1)} />
                    <Tab label="Therapy" {...A11yProps(2)} />
                    <Tab label="Pharmacy" {...A11yProps(3)} />
                    <Tab label="Ambulances" {...A11yProps(4)} />
                    <Tab label="Nurses" {...A11yProps(5)} />
                    <Tab label="Medicines" {...A11yProps(6)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Doctors />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Hospitals />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Therapy />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <MedicalShop />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Ambulances />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Nurses />
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Medicine />
                </TabPanel>
            </Box>
        </Box>
    );
};

export default AllSectionTab;