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
        const data = {id: crypto.randomUUID(), text: todo};
        addingTodos(data);
        setTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Add Task"
                variant="outlined"
                size="small"
                value={todo}
                onChange={handleChange}
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