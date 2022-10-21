import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
        }
      }
    }
  }
})

export default theme