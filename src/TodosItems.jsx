import {
  ListItem,
  IconButton,
  ListItemText,
  Typography,
  Checkbox,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CircleIcon from "@mui/icons-material/Circle";
import AddTodoForm from "./AddTodoForm";
import { deleteTask } from "./utils/utils";
import { toggleTaskCheckbox } from "./utils/utils";

export default function TodosItems({
  d,
  setUseState,
  todoData,
}) {
  const handleChange = (id) => {
    toggleTaskCheckbox(todoData, id, setUseState);
  };

  return (
    <>
      <Typography variant="h4" commponent="h1" mb={2}>
        {d.name}
      </Typography>
      <AddTodoForm setUseState={setUseState} todoData={todoData} />
      {d.items.map((dItem) => {
        return (
          <ListItem
            // style={{backgroundColor: dItem.priority === "low" ? "green" : dItem.priority === "medium" ? "yellow" : dItem.priority === "high" ? "red" : "none"}}
            key={dItem.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTask(todoData, setUseState, dItem.id)}
              >
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
                  inputProps={{ "aria-label": dItem.id }}
                />
              </ListItemIcon>
              <ListItemIcon>
                <CircleIcon
                  fontSize="small"
                  style={{
                    color:
                      dItem.priority === "low"
                        ? "green"
                        : dItem.priority === "medium"
                        ? "yellow"
                        : dItem.priority === "high"
                        ? "red"
                        : "grey",
                  }}
                />
              </ListItemIcon>

              <ListItemText id={dItem.id} primary={dItem.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
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
