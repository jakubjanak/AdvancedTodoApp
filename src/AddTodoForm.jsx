import { TextField } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useState } from "react";
import "./AddTodoForm.css";
import { addNewTask } from "./utils/utils";

export default function AddTodoForm({setUseState, todoData}) {
    const [todo, setTodo] = useState("");
    const [priority, setPriority] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo !== "") {
            const data = {id: crypto.randomUUID(), text: todo, priority: priority, completed: false};
            addNewTask(todoData, data, setUseState);
            setTodo("");
        }
    }

    const handleSelectChange = (e) => {
        setPriority(e.target.value);
    }

    return (
      <form className="todosPage" onSubmit={handleSubmit} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "flex-start", gap: "0.5rem"}}>
        <TextField
          fullWidth
          label="Add Task"
          variant="outlined"
          size="small"
          value={todo}
          onChange={handleChange}
          helperText={todo === "" ? "The input field cannot be empty" : ""}
          // InputProps={{
          //     endAdornment: <InputAdornment position="end">
          //         <IconButton sx={{margin: "0", padding: "0"}} type="submit">
          //             <AddIcon />
          //         </IconButton>
          //     </InputAdornment>
          // }}
        ></TextField>
        <FormControl sx={{ m: 0, minWidth: 120 }} size="small" className="fullWidth">
          <Select
            value={priority}
            onChange={handleSelectChange}
            displayEmpty
            inputProps={{ "aria-label": "Priority" }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
          <FormHelperText>Priority</FormHelperText>
        </FormControl>
        {/* <IconButton sx={{ margin: "0", padding: "0" }} type="submit">
          <AddIcon />
        </IconButton> */}
        <Button variant="contained" startIcon={<AddIcon />} sx={{minWidth: 120, p: .95}} size="medium" type="submit" className="fullWidth">
          Add
        </Button>
      </form>
    );
}