import { TextField, FormControl, Select, MenuItem, FormHelperText, Button } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { useState } from "react";

export default function InputForm({setUseState, todoData, isCategory=false}) {
    const [formValue, setFormValue] = useState("");
    const [priorityValue, setPriorityValue] = useState("");

    const handleChange = (e) => {
        setFormValue(e.target.value);
    }

    const handlePriorityChange = (e) => {
        setPriorityValue(e.target.value);
    }

    return (
        <>
            <form style={{display: "flex", gap: "0.5rem", alignItems: "flex-start"}}>
                <TextField
                    fullWidth
                    label={isCategory ===  true ? "Add Category" : "Add Task"}
                    helperText={formValue === "" ? "The input field cannot be empty" : ""}
                    variant="outlined"
                    size="small"
                    value={formValue}
                    onChange={handleChange}
                    // InputProps={{
                    //     endAdornment: <InputAdornment position="end">
                    //         <IconButton sx={{margin: "0", padding: "0"}} type="submit">
                    //             <Add />
                    //         </IconButton>
                    //     </InputAdornment>
                    // }}
                >
                </TextField>
                {isCategory === false ?
                <FormControl sx={{ m: 0, minWidth: 120 }} size="small" className="fullWidth">
                <Select
                  value={priorityValue}
                  onChange={handlePriorityChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Priority" }}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
                <FormHelperText>Priority</FormHelperText>
              </FormControl> : ""
                }
                {/* <FormControl sx={{ m: 0, minWidth: 120 }} size="small" className="fullWidth">
                <Select
                  value={priorityValue}
                  onChange={handlePriorityChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Priority" }}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
                <FormHelperText>Priority</FormHelperText>
              </FormControl> */}
              <Button variant="contained" startIcon={<Add />} sx={{minWidth: 120, p: .95}} size="medium" type="submit" className="fullWidth">
                Add
                </Button>
            </form>
        </>
    )
}