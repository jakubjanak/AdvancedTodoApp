import { ListItem, IconButton, ListItemText, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import AddTodoForm from "./AddTodoForm"

export default function TodosItems({d, addingTodos, handleTodoItemDelete}) {
    return (
        <>
        <Typography variant="h4" commponent="h1" mb={2}>{d.name}</Typography>
        <AddTodoForm addingTodos={addingTodos} />
        {d.items.map((dItem) => {
            return (
                <ListItem
                key={dItem.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleTodoItemDelete(dItem.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText>{dItem.text}</ListItemText>
              </ListItem>
            )
        })}
        </>
    )
}

// d.items.map((item) => {
//     return (
    //   <ListItem
    //     key={item.id}
    //     secondaryAction={
    //       <IconButton edge="end" aria-label="delete">
    //         <DeleteIcon />
    //       </IconButton>
    //     }
    //   >
    //     <ListItemText>{item.text}</ListItemText>
    //   </ListItem>