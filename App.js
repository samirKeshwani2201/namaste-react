const heading = React.createElement("h1", {
    id: "title",
}, "From react");

const heading2 = React.createElement("h2", {
    id: "title",
}, "From react heading 2 ");
const container = React.createElement("div", { id: "container", }, [heading, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"));
// const headings = document.createElement("h1");
// headings.innerHTML = "Hello from JS ";

// const roots = document.getElementById("root");

// roots.appendChild(headings);
root.render(container)

