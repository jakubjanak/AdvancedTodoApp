import { List } from "@mui/material";
import TodosItems from "./TodosItems";

export default function Todos({data, addingTodos, handleTodoItemDelete, toggleCheckbox}) {
    return (
        <>
        <List style={{margin: "0", padding: "0"}}>
            {/* <AddTodoForm addingTodos={addingTodos} /> */}
            {data.map((d) => {  
                if (d.clicked) {
                    return (
                        <TodosItems d={d} key={d.id} addingTodos={addingTodos} handleTodoItemDelete={handleTodoItemDelete} toggleCheckbox={toggleCheckbox} />
                    )
                }
            })}
        </List>
        </>
    )   
}