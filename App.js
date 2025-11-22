import React from "react";
import ReactDOM from "react-dom/client"; // 👈 important difference
import Header  from "./Header";
import "./Header.css";
const Heading=()=>(
    <div>
        <h1 id="heading">Hello Divakar from react</h1>,
        {title}
        <h1>Hello raina</h1>
    </div>
);
const title=(<div>
    <h1>React Project</h1>
    <h1>Java Project</h1>
</div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);