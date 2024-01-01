import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Tasks from "../components/Tasks";
import "../styles/Homepage.css";
import { getLocalStorageData } from "../utils/utils";
import { Divider } from "@mui/material";

function Homepage() {
    const [data, setData] = useState(getLocalStorageData);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(data));
    }, [data])

    const [width, setWidth] = useState(false);

    window.addEventListener("resize", () => {
            if (window.innerWidth <= 700) {
                setWidth(true);
            } else {
                setWidth(false);
            }
    })

    return (
        <div className="mainDiv">
        <Categories setUseState={setData} todoData={data}/>
        <Divider orientation={width ? "horizontal" : "vertical"} flexItem />
        <Tasks todoData={data} setUseState={setData} />
        </div>
    )
}

export default Homepage;