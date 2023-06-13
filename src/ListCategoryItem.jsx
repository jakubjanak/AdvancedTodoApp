import { ListItem, IconButton, ListItemText, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


export default function ListCategoryItem({tc, handleDelete}) {
    const handleClick = () => {
        
        
    }

    return (
        <Box maxWidth={220}>
        <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
            <ListItemText style={{cursor: "pointer"}} onClick={handleClick}>{tc.name}</ListItemText>
        </ListItem>
        </Box>
    )
}