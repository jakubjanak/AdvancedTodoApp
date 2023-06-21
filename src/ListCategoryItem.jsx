import { ListItem, IconButton, ListItemText, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ListCategoryItem({tc, handleDelete, updatingClicked}) {
    const handleClick = () => {
      updatingClicked(tc.id);
    }

    // CAPITALIZING FIRST LETTER IN CATEGORY ITEMS
    // const itemText = tc.name;
    // const firstLetter = itemText.charAt(0);
    // const firstLetterCap = firstLetter.toUpperCase();
    // const remainingLetters = itemText.slice(1);
    // const finalText = firstLetterCap + remainingLetters;

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