import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import React, { useState } from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { Box, Tab, Tabs } from '@mui/material';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const handleChange = (e, val) => {
    setValue(val)
    switch (val) {
      case 0:
        {
          router.push('/')
          return
        }
      case 1:
        {
          router.push('/books')
          return
        }
      default:
        return
    }
  }

  return (
    <AppBar sx={{bgcolor: '#322dd3'}}>
      <Toolbar>
        <IconButton>
          <ImportContactsIcon sx={{
            fontSize: '26px',
            color: 'whitesmoke'
          }} />
        </IconButton>
        <Box display='flex' margin='auto' >
          <Tabs onChange={handleChange} value={value} textColor='inherit'>
            <Tab label="Home" />
            <Tab label="All Books" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header