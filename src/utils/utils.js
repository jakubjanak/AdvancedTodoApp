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

