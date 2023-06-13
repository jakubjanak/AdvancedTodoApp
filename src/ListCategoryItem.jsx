import { ListItem, IconButton, ListItemText, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";


export default function ListCategoryItem({tc, handleDelete}) {
    const [showMe, setShowMe] = useState(false);
    

    const handleClick = () => {
      if (showMe === false) {
        setShowMe(true);
      } else {
        setShowMe(false);
      }
      
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
        {showMe ? 
          tc.items.map((item) => {
          return <p key={item.id}>{item.text}</p>
          })
         : null}
        </Box>
    )
}