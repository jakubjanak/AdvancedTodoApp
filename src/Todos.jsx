import { ListItem, IconButton, ListItemText, List } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddTodoForm from "./AddTodoForm";
import TodosItems from "./TodosItems";

export default function Todos({data, addingTodos}) {
    return (
        <>
        <List style={{margin: "0", padding: "0"}}>
            {/* <AddTodoForm addingTodos={addingTodos} /> */}
            {data.map((d) => {  
                if (d.clicked) {
                    return (
                        <TodosItems d={d} key={d.id} addingTodos={addingTodos}/>
                    )
                }
            })}
        </List>
        </>
    )   
}