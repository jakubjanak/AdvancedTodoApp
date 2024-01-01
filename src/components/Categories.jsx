import { Box, Typography, List } from "@mui/material";
import InputForm from "./InputForm";
import { deleteCategory } from "../utils/utils";
import Category from "./Category";

export default function Categories({setUseState, todoData}) {
    return (
            <Box m={3}>
                <Typography variant="h4" component="h1" mb={2}>Categories</Typography>
                <InputForm setUseState={setUseState} todoData={todoData} isCategory={true} />
                <List>
                {            
                todoData.map((tc) => {
                    return <Category key={tc.id} tc={tc} handleDelete={() => deleteCategory(tc.id, setUseState)} setUseState={setUseState} todoData={todoData} />
                })}
                </List>
            </Box>
    )
}