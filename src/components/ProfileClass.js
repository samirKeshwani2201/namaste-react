import React from "react";



class Profile extends React.Component {

    constructor(props) {
        super(props);
        // Create a state 
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/samirKeshwani2201")
        const json = await data.json();

        this.setState({
            userInfo: json,

        })
    }


    render() {
        const { count, count2 } = this.state;

        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state.userInfo.avatar_url} alt="" />
                <h2>Name:{this.state.userInfo.name}</h2>
                <h2>Location :{this.state.userInfo.location}</h2>



            </div>
        );
    }

}

export default Profile;
