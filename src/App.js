import React, { Component } from "react";
import UserContainerWithoutContext from "./UserWithoutContext";

export default class App extends Component {
    render() {
        const users = [
            {
                id: 0,
                name: "John"
            },
            {
                id: 1,
                name: "James"
            },
            {
                id: 2,
                name: "Jim"
            }
        ];

        return (
            <div>
                <UserContainerWithoutContext user={users[0]} />
                <UserContainerWithoutContext user={users[1]} />
                <UserContainerWithoutContext user={users[2]} />
            </div>
        );
    }
}
