import { TextField, InputAdornment, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export default function AddTodoForm({addingTodos}) {
    const [todo, setTodo] = useState("") ;

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo !== "") {
            const data = {id: crypto.randomUUID(), text: todo, completed: false};
            addingTodos(data);
            setTodo("");
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{marginBottom: "0.5rem"}}>
            <TextField
                fullWidth
                label="Add Task"
                variant="outlined"
                size="small"
                value={todo}
                onChange={handleChange}
                helperText={todo === "" ? "The input field cannot be empty" : ""}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton sx={{margin: "0", padding: "0"}} type="submit">
                            <AddIcon />
                        </IconButton>
                    </InputAdornment>
                }}
            >

            </TextField>
        </form>
    )
}