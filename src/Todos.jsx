import { ListItem, IconButton, ListItemText, List } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddTodoForm from "./AddTodoForm";

export default function Todos({data}) {

    return (
        <>
        <List>
            <AddTodoForm />
            {data.map((d) => {                
                if (d.clicked === true) {
                    return (
                        d.items.map((item) => {
                        return (
                          <ListItem
                            key={item.id}
                            secondaryAction={
                              <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                              </IconButton>
                            }
                          >
                            <ListItemText>{item.text}</ListItemText>
                          </ListItem>
                        );
                    }))
                }
            })}
        </List>
        </>
    )   
}