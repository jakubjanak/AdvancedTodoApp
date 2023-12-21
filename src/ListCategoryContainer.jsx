import { List, Typography, Box, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import ListCategoryItem from "./ListCategoryItem";
import AddCategoryForm from "./AddCategoryForm";
import Todos from "./Todos";
import "./ListCategoryContainer.css";
import { getLocalStorageData, deleteCategory } from "./utils/utils";

export default function ListCategoryContainer() {
    const [todoData, setTodoData] = useState(getLocalStorageData);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todoData));
    }, [todoData])

    const [width, setWidth] = useState(false);

    window.addEventListener("resize", () => {
            if (window.innerWidth <= 700) {
                setWidth(true);
            } else {
                setWidth(false);
            }
    })

    return (
        <div id="mainDiv">
        <Box m={3}>
            <Typography variant="h4" component="h1" mb={2}>Categories</Typography>
            <AddCategoryForm setUseState={setTodoData} />
            <List>
                {            
                todoData.map((tc) => {
                    return <ListCategoryItem key={tc.id} tc={tc} handleDelete={() => deleteCategory(tc.id, setTodoData)} setUseState={setTodoData} todoData={todoData} />
                })}
            </List>
        </Box>
        <Divider orientation={width ? "horizontal" : "vertical"} flexItem />
        <Box m={3} style={{display: "flex", flexDirection: "column", justifyContent: "start"}}>
            <Todos data={todoData} setUseState={setTodoData} />
        </Box>
        </div>
    )
}