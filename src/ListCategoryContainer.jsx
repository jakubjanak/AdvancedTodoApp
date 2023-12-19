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

    const handleTodoItemDelete = (todoId) => {
        let updatedArray = [];
        updatedArray = todoData;
        updatedArray = todoData.map((category) => {
            if (category.items) {
                category.items = category.items.filter((item) => item.id !== todoId);
            }
            return category;
        })
        setTodoData([...updatedArray]);
    }

    const addingTodos = (data) => {
        let newTodoCat = [];
        newTodoCat = todoData;
        newTodoCat.map((tc) => {
            if (tc.clicked) {
                // const items = tc.items;
                const highPriorityArr = [];
                const mediumPriorityArr = [];
                const lowPriorityArr = [];
                const noPriorityArr = [];
                const completedArr = [];
                tc.items.map((item) => {
                    if (item.completed === true) {
                        completedArr.push(item)
                    } else if (item.priority === "high") {
                        highPriorityArr.push(item);
                    } else if (item.priority === "medium") {
                        mediumPriorityArr.push(item)
                    } else if (item.priority === "low") {
                        lowPriorityArr.push(item);
                    } else {
                        noPriorityArr.push(item);
                    }
                })

                switch(data.priority) {
                    case "high":
                        highPriorityArr.unshift(data);
                        break;
                    case "medium":
                        mediumPriorityArr.unshift(data);
                        break;
                    case "low":
                        lowPriorityArr.unshift(data);
                        break;
                    default:
                        noPriorityArr.unshift(data);
                }

                let allIn = [...highPriorityArr, ...mediumPriorityArr, ...lowPriorityArr, ...noPriorityArr, ...completedArr];
                console.log(allIn);

                // items.unshift(data);
                tc.items = [...allIn];
            }
        })
        // this fking works!
        setTodoData([...newTodoCat]);
    }
    
    const toggleCheckbox = (todoId) => {
        let updatedArray = [];
        updatedArray = todoData;
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
        setTodoData([...updatedArray]);
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
            <Todos data={todoData} addingTodos={addingTodos} handleTodoItemDelete={handleTodoItemDelete} toggleCheckbox={toggleCheckbox} />
        </Box>
        </div>
    )
}