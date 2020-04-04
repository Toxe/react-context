import React, { Component } from "react";
import UserContainerWithoutContext from "./UserWithoutContext";
import UserContainerWithContext from "./UserWithContext";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 0,
                    name: "John",
                    count: 10,
                },
                {
                    id: 1,
                    name: "James",
                    count: 10,
                },
                {
                    id: 2,
                    name: "Jim",
                    count: 10,
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <UserContainerWithoutContext user={this.state.users[0]} />
                <UserContainerWithoutContext user={this.state.users[1]} />
                <UserContainerWithoutContext user={this.state.users[2]} />

                <UserContainerWithContext user={this.state.users[0]} />
                <UserContainerWithContext user={this.state.users[1]} />
                <UserContainerWithContext user={this.state.users[2]} />
            </div>
        );
    }
}
