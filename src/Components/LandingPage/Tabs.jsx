import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import "./Tabs.scss";
export default function ColorTabs() {
  const [value, setValue] = React.useState('two');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='main-tabs-hdr'>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="OverView" className='tab-label' />
          <Tab value="two" label="Projects" className='tab-label' />
          <Tab value="three" label="Campaigns" className='tab-label' />
          <Tab value="four" label="Documents" className='tab-label' />
          <Tab value="five" label="Followers" className='tab-label' />
          <Tab value="six" label="Activity" className='tab-label' />
        </Tabs>
      </Box>
    </div>
  );
}
