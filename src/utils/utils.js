export function getLocalStorageData() {
    const data = JSON.parse(localStorage.getItem("todos"));

    if (!data) {
        return [];
    } else {
        return data;
    }
}

// todo category functions
export function addNewCategory(data, setState) {
    setState((prevData) => {
        return [...prevData, data];
    })
}

export function deleteCategory(id, setState) {
    setState((prevData) => {
        return prevData.filter((category) => category.id !== id);
    })
}

export function chosenCategory(id, setState, data) {
    setState(
        data.map((category) => {
            if (category.id === id) {
                if (category.clicked) {
                    return {...category, clicked: false}
                } else {
                    return {...category, clicked: true}
                }
            } else {
                // ochrana - při kliknutí na jinou kategorii ta předchozí zmizí
                return {...category, clicked: false}
            }
        })
    )
}

// todo tasks functions
export function addNewTask(todoData, newData, setUseState) {
    let helpfulArray = new Array;
    helpfulArray = todoData;

    helpfulArray.map((category) => {
        if (category.clicked) {
            const highPriorityTasks = new Array;
            const mediumPriorityTasks = new Array;
            const lowPriorityTasks = new Array;
            const noPriorityTasks = new Array;
            const completedTasks = new Array;

            category.items.map((task) => {
                if (task.completed === true) {
                    completedTasks.push(task);
                } else {
                    switch(task.priority) {
                        case "high":
                            highPriorityTasks.push(task);
                            break;
                        case "medium":
                            mediumPriorityTasks.push(task);
                            break;
                        case "low":
                            lowPriorityTasks.push(task);
                            break;
                        default:
                            noPriorityTasks.push(task);
                    }
                }
            })

            switch(newData.priority) {
                case "high":
                    highPriorityTasks.unshift(newData);
                    break;
                case "medium":
                    mediumPriorityTasks.unshift(newData);
                    break;
                case "low":
                    lowPriorityTasks.unshift(newData);
                    break;
                default:
                    noPriorityTasks.unshift(newData);
            }

            category.items = [...highPriorityTasks, ...mediumPriorityTasks, ...lowPriorityTasks, ...noPriorityTasks, ...completedTasks];
        }
    })
    console.log(helpfulArray);
    setUseState([...helpfulArray]);
}

export function deleteTask(todoData, setUseState, taskId) {
    let helpfulArray = new Array;

    todoData.map((category) => {
        if (category.items) {
            category.items = category.items.filter((item) => item.id !== taskId)
        }
        return helpfulArray = todoData;
    })
    setUseState([...helpfulArray]);
}

export function toggleTaskCheckbox(todoData, taskId, setUseState) {
    todoData.map((category) => {
        category.items.map((task) => {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }
        })
        category.items.map((task, indx) => {
            if (task.id === taskId && task.completed === true) {
                category.items.splice(indx, 1);
                category.items.push(task);
            } else if (task.id === taskId && task.completed === false) {
                category.items.splice(indx, 1);
                category.items.unshift(task);
            }
        })
    })
    setUseState([...todoData]);
}