import React, { Component } from "react";
import UserContainerWithoutContext from "./UserWithoutContext";
import UserContainerWithContext from "./UserWithContext";
import { UserContext } from "./UserContext";

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

                <UserContext.Provider value={users[0]}>
                    <UserContainerWithContext />
                </UserContext.Provider>
                <UserContext.Provider value={users[1]}>
                    <UserContainerWithContext />
                </UserContext.Provider>
                <UserContext.Provider value={users[2]}>
                    <UserContainerWithContext />
                </UserContext.Provider>
            </div>
        );
    }
}
