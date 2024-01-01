import { ListItem, IconButton, ListItemText, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { chosenCategory } from "../utils/utils";

export default function Category({tc, handleDelete, setUseState, todoData}) {
    const handleClick = () => {
      chosenCategory(tc.id, setUseState, todoData);
    }

    return (
      <Box style={{backgroundColor: tc.clicked === true ? "whitesmoke" : "white", borderLeft: tc.clicked ? "4px solid #3875CB" : "none"}}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText style={{ cursor: "pointer" }} onClick={handleClick}>
            {tc.name}
          </ListItemText>
        </ListItem>
      </Box>
    );
}