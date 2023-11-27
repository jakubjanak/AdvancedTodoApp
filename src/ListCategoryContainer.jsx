import { List, Typography, Box, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import ListCategoryItem from "./ListCategoryItem";
import AddCategoryForm from "./AddCategoryForm";
import Todos from "./Todos";
import "./ListCategoryContainer.css";

export default function ListCategoryContainer() {
    // const initialValues = [
    //     {id: crypto.randomUUID(), name: "Personal", items: [{id: crypto.randomUUID(), text: "Empty the trash!"}, {id: crypto.randomUUID(), text: "Enjoy yourself!"}, {id: crypto.randomUUID(), text: "Do homework!"}], clicked: false},
    //     {id: crypto.randomUUID(), name: "Work", items: [{id: crypto.randomUUID(), text: "Wash the dishes!"}], clicked: false},
    //     {id: crypto.randomUUID(), name: "Home", items: [{id: crypto.randomUUID(), text: "Go for the walk with a dog!"}], clicked: false},
    // ]

    const getInitialData = () => {
        const data = JSON.parse(localStorage.getItem('todos'));
        if (!data) return [];
        return data;
    }

    const [todoCat, setTodoCat] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem(
            'todos',
            JSON.stringify(todoCat)
        )
    }, [todoCat])

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

    const toggleCheckbox = (todoId) => {
        let updatedArray = [];
        updatedArray = todoCat;
        updatedArray.map((category) => {
            category.items.map((item) => {
                if (item.id === todoId) {
                    item.completed = !item.completed;
                }
            })
            category.items.map((item, indx) => {
                if (item.id === todoId && item.completed === true) {
                    const saveItem = item;
                    category.items.splice(indx, 1);
                    category.items.push(saveItem);
                } else if (item.id === todoId && item.completed === false) {
                    const saveItem = item;
                    category.items.splice(indx, 1);
                    category.items.unshift(saveItem);
                }
            })
        })
        setTodoCat([...updatedArray]);
    }

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
            <AddCategoryForm addNewCategory={addNewCategory} />
            <List>
                {            
                todoCat.map((tc) => {
                    return <ListCategoryItem key={tc.id} tc={tc} handleDelete={() => handleDelete(tc.id)} updatingClicked={updatingClicked} />
                })}
            </List>
        </Box>
        <Divider orientation={width ? "horizontal" : "vertical"} flexItem />
        <Box m={3} style={{display: "flex", flexDirection: "column", justifyContent: "start"}}>
            <Todos data={todoCat} addingTodos={addingTodos} handleTodoItemDelete={handleTodoItemDelete} toggleCheckbox={toggleCheckbox} />
        </Box>
        </div>
    )
}