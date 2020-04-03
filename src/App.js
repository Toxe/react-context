import React, { Component } from "react";
import UserContainer from "./User";

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
                <UserContainer user={users[0]} />
                <UserContainer user={users[1]} />
                <UserContainer user={users[2]} />
            </div>
        );
    }
}
