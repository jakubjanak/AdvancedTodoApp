import { List, Typography, Box, Divider } from "@mui/material";
import { useState } from "react";
import ListCategoryItem from "./ListCategoryItem";
import AddCategoryForm from "./AddCategoryForm";
import Todos from "./Todos";

export default function ListCategoryContainer() {
    // const initialValues = [
    //     {id: crypto.randomUUID(), name: "Personal", items: [{id: crypto.randomUUID(), text: "Empty the trash!"}, {id: crypto.randomUUID(), text: "Enjoy yourself!"}, {id: crypto.randomUUID(), text: "Do homework!"}], clicked: false},
    //     {id: crypto.randomUUID(), name: "Work", items: [{id: crypto.randomUUID(), text: "Wash the dishes!"}], clicked: false},
    //     {id: crypto.randomUUID(), name: "Home", items: [{id: crypto.randomUUID(), text: "Go for the walk with a dog!"}], clicked: false},
    // ]

    const [todoCat, setTodoCat] = useState([]);

    const handleDelete = (id) => {
        setTodoCat((prevValues) => {
            return prevValues.filter((item) => item.id !== id);
        })
    }

    const handleTodoItemDelete = (todoId) => {
        let updatedArray = [];
        updatedArray = todoCat;
        updatedArray = todoCat.map((category) => {
            if (category.items) {
                category.items = category.items.filter((item) => item.id !== todoId);
            }
            return category;
        })
        setTodoCat([...updatedArray]);
    }

    const addNewCategory = (newCategory) => {
        setTodoCat((prevValues) => {
            return [...prevValues, newCategory];
        })
    }

    const addingTodos = (data) => {
        let newTodoCat = [];
        newTodoCat = todoCat;
        newTodoCat.map((tc) => {
            if (tc.clicked) {
                const items = tc.items;
                items.push(data);
            }
        })
        // this fking works!
        setTodoCat([...newTodoCat]);
    }

    // updatování clicked, aby při kliknutí na kategorii byli vidět jen itemy, které do ní patří
    const updatingClicked = (id) => {
        const change = todoCat.map((tc) => {
            if (tc.id === id) {
                if (!tc.clicked) {
                    return {...tc, clicked: true}
                } else {
                    return {...tc, clicked: false}
                }
            } else {
                // ochrana - při kliknutí na jinou kategorii ta předchozí zmizí
                return {...tc, clicked: false};
            }
        })
        setTodoCat(change);
    }

    

    return (
        <div style={{display: "flex"}}>
        <Box m={3}>
            <Typography variant="h4" component="h1" mb={2}>Categories</Typography>
            <AddCategoryForm addNewCategory={addNewCategory} />
            <List>
                {
                
                todoCat.map((tc) => {
                    return <ListCategoryItem key={tc.id} tc={tc} setTodoCat={setTodoCat} todoCat={todoCat} handleDelete={() => handleDelete(tc.id)} updatingClicked={updatingClicked} />
                })}
            </List>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box m={3} style={{display: "flex", flexDirection: "column", justifyContent: "start"}}>
            <Todos data={todoCat} addingTodos={addingTodos} handleTodoItemDelete={handleTodoItemDelete} />
        </Box>
        </div>
    )
}