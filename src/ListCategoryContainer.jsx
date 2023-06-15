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

    const [todoCat, setTodoCat] = useState(initialValues);

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

    // updatování clicked, aby při kliknutí na kategorii byli vidět jen itemy, které do ní patří
    const updatingClicked = (id) => {
        const change = todoCat.map((tc) => {
            if (tc.id === id) {
                if (tc.clicked === false) {
                    return {...tc, clicked: true}
                } else {
                    return {...tc, clicked: false}
                }
                
            } else {
                return tc;
            }
        })
        setTodoCat(change);
    }

    

    return (
        <Box m={3}>
            <Typography variant="h4" component="h1" mb={2}>Categories</Typography>
            <AddCategoryForm addNewCategory={addNewCategory} />
            <List>
                {todoCat.map((tc) => {
                    return <ListCategoryItem key={tc.id} tc={tc} setTodoCat={setTodoCat} todoCat={todoCat} handleDelete={() => handleDelete(tc.id)} updatingClicked={updatingClicked} />
                })}
            </List>
            {todoCat.map((tcClicked) => {
                if (tcClicked.clicked === true) {
                    return tcClicked.items.map((item) => {
                        return <p key={item.id}>{item.text}</p>
                    })
                }
            })}
        </Box>
    )
}