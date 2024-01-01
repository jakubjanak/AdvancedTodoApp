import { Box, List } from "@mui/material";
import Task from "./Task";

export default function Tasks({todoData, setUseState}) {
    return (
        <Box m={3} style={{display: "flex", flexDirection: "column", justifyContent: "start"}}>
            <List style={{margin: "0", padding: "0"}}>
                {todoData.map((d) => {
                    if (d.clicked) {
                        return (
                            <Task d={d} key={d.id} setUseState={setUseState} todoData={todoData} />
                        )
                    }
                })}
            </List>
        </Box>
    )
}