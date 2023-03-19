import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About"
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";


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
            {/* Outlet here we have to fill in different pages  */}
            <Outlet />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                children:[
                    {
                        path:"profile",
                        // If we gave path:"/profile" then it will be considered as localhost:1234/profile 
                        element:<Profile/>
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />

            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,

            },
        ],

    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// const headings = document.createElement("h1");
// headings.innerHTML = "Hello from JS ";

// const roots = document.getElementById("root");

// roots.appendChild(headings);
root.render(<RouterProvider router={appRouter} />);


