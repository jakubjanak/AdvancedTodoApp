import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box>
          <AppBar position='absolute' sx={{top: "auto", bottom: 0, textAlign: "center", padding: "10px 0"}} >
              <Typography variant="subtitle" component="p" sx={{ flexGrow: 1 }}>
                &copy; Jakub Janák 2023
              </Typography>
          </AppBar>
        </Box>
    )
}