import { List } from "@mui/material";
import TodosItems from "./TodosItems";

export default function Todos({data, setUseState}) {
    return (
        <>
        <List style={{margin: "0", padding: "0"}}>
            {data.map((d) => {  
                if (d.clicked) {
                    return (
                        <TodosItems d={d} key={d.id} setUseState={setUseState} todoData={data} />
                    )
                }
            })}
        </List>
        </>
    )   
}