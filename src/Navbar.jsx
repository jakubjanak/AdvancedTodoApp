import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';

export default function Navbar() {
    return (
        <Box mb={2}>
          <AppBar position='relative'>
            <Toolbar>
              <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                ToDo App
              </Typography>
                <IconButton>
                    <Link href='https://github.com/jakubjanak' target='_blank'>
                        <Avatar alt='Jakub Janák' src='logo.png' />
                    </Link>
                </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      );
}