import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Dummy Name",
        email: "dummy@gmail.com",
    },

});

// It gives name when we are in react dev tools  and not just Context.provider
UserContext.displayName="UserContext"
export default UserContext;