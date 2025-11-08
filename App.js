// const heading=React.createElement("h1",{id:"heading"},"Hello World From React!!!");
//             const root=ReactDOM.createRoot(document.getElementById("root"));
//             root.render(heading);
const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"HEllO From inside of the container"),
            React.createElement("h1",{},"HEllO From inside of the container")]
    )
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
