import { Box, ListItem, IconButton, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todos({text}) {
    return (
        <Box>
        <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
            <ListItemText>{text}</ListItemText>
        </ListItem>
        </Box>
    )   
}