import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer";

/**
      // Header 
                // Logo
                // Listitems(Right side )
                // Cart 
            // Body
                // SearchBar 
                // Restrauntlist
                      // Restaurant card
                            // Image 
                            // Name 
                            // Rating   
                            // Cusines
            // Footer 
                // Links
                // Copyright
 */









const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
// const headings = document.createElement("h1");
// headings.innerHTML = "Hello from JS ";

// const roots = document.getElementById("root");

// roots.appendChild(headings);
root.render(<AppLayout />);


