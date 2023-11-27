import { ListItem, IconButton, ListItemText, Typography, Checkbox, ListItemButton, ListItemIcon } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import AddTodoForm from "./AddTodoForm"

export default function TodosItems({d, addingTodos, handleTodoItemDelete, toggleCheckbox}) {
    const handleChange = (id) => {
      toggleCheckbox(id);
    }

    return (
        <>
        <Typography variant="h4" commponent="h1" mb={2}>{d.name}</Typography>
        <AddTodoForm addingTodos={addingTodos} />
        {d.items.map((dItem) => {
            return (
                <ListItem
                style={{backgroundColor: dItem.priority === "low" ? "green" : dItem.priority === "medium" ? "yellow" : dItem.priority === "high" ? "red" : "none"}}
                key={dItem.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleTodoItemDelete(dItem.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox 
                    edge="start"
                    checked={dItem.completed}
                    tabIndex={-1}
                    disableRipple
                    onChange={() => handleChange(dItem.id)}
                    inputProps={{"aria-label": dItem.id}}
                    />
                  </ListItemIcon>
                  <ListItemText id={dItem.id} primary={dItem.text} />
                </ListItemButton>
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