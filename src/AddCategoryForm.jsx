import { TextField, InputAdornment, IconButton } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { addNewCategory } from "./utils/utils";

export default function AddCategoryForm({setUseState}) {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        return setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "") {
            addNewCategory({id: crypto.randomUUID(), name: name, items: [], clicked: false}, setUseState)
        setName("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <TextField
            fullWidth
            label="Add Category"
            helperText={name === "" ? "The input field cannot be empty" : ""}
            variant="outlined"
            size="small"
            value={name}
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