

import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";


class About extends Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p>This is the Namaste react live course</p>
                <Profile name={"AkshayClass"} />
            </div>
        );
    }
}
export default About;
