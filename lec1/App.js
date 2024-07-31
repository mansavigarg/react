const heading = React.createElement("h1" , {} , "Hi there from react")

console.log(heading); // returns a object

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading); // renders that object on the dom