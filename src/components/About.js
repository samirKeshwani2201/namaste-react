

import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";
import UserContext from "../utils/UserContext";


class About extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {({ user }) =>
                        <h4 className="font-bold text-xl p-10">
                            {user.name}
                        </h4>
                    }
                </UserContext.Consumer>
                <h1>About Us</h1>
                <p>This is the Namaste react live course</p>
                <Profile name={"AkshayClass"} />
            </div>
        );
    }
}
export default About;
