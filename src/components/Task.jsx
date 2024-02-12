import { Typography, ListItem, IconButton, ListItemButton, ListItemIcon, ListItemText, Checkbox } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Circle from "@mui/icons-material/Circle";
import InputForm from "./InputForm";
import { deleteTask, toggleTaskCheckbox } from "../utils/utils";
import { sortTodosByTheirPriority } from "../utils/utils";

export default function Task({d, setUseState, todoData}) {
    const handleChange = (id) => {
        toggleTaskCheckbox(todoData, id, setUseState);
        sortTodosByTheirPriority(todoData, setUseState);
      };

    return (
        <>
        <Typography variant="h4" commponent="h1" mb={2}>
        {d.name}
      </Typography>
      <InputForm setUseState={setUseState} todoData={todoData} isCategory={false} />
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
                <Delete />
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
                <Circle
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
    )
}