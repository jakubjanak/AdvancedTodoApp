import { List, Typography, Box } from "@mui/material";
import { useState } from "react";
import ListCategoryItem from "./ListCategoryItem";
import AddCategoryForm from "./AddCategoryForm";

export default function ListCategoryContainer() {
    const initialValues = [
        {id: crypto.randomUUID(), name: "Personal", items: [{id: crypto.randomUUID(), text: "Empty the trash!"}], clicked: false},
        {id: crypto.randomUUID(), name: "Work", items: [{id: crypto.randomUUID(), text: "Wash the dishes!"}], clicked: false},
        {id: crypto.randomUUID(), name: "Home", items: [{id: crypto.randomUUID(), text: "Go for the walk with a dog!"}], clicked: false},
    ]

    const handleDelete = (id) => {
        setTodoCat((prevValues) => {
            return prevValues.filter((item) => item.id !== id);
        })
    }

    const addNewCategory = (newCategory) => {
        setTodoCat((prevValues) => {
            return [...prevValues, newCategory];
        })
    }

    const [todoCat, setTodoCat] = useState(initialValues);

    return (
        <Box m={3}>
            <Typography variant="h4" component="h1" mb={2}>Categories</Typography>
            <AddCategoryForm addNewCategory={addNewCategory} />
            <List>
                {todoCat.map((tc) => {
                    return <ListCategoryItem key={tc.id} tc={tc} handleDelete={() => handleDelete(tc.id)} />
                })}
            </List>
        </Box>
    )
}