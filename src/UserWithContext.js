import React, { Component } from "react";
import "./UserWithContext.css";
import { UserContext } from "./UserContext";

export default class UserContainerWithContext extends Component {
    constructor(props) {
        super(props);
        this.state = props.user;
    }

    incCount = () => {
        this.setState((state) => ({
            count: state.count + 1,
        }));
    };

    decCount = () => {
        this.setState((state) => ({
            count: state.count - 1,
        }));
    };

    render() {
        const context = {
            user: this.state,
            incCount: this.incCount,
            decCount: this.decCount,
        };

        return (
            <UserContext.Provider value={context}>
                <div className="UserContainer-WithContext">
                    <div className="title-WithContext">UserContainerWithContext</div>
                    <UserContainerContent />
                </div>
            </UserContext.Provider>
        );
    }
}

function UserContainerContent() {
    return (
        <UserContext.Consumer>
            {(context) => (
                <div className="UserContainerContent-WithContext">
                    <div className="title-WithContext">UserContainerContent</div>
                    <div>for user with id={context.user.id} and count={context.user.count}</div>
                    <UserContainerBody />
                </div>
            )}
        </UserContext.Consumer>
    );
}

function UserContainerBody() {
    return (
        <div className="UserContainerBody-WithContext">
            <div className="title-WithContext">UserContainerBody</div>
            <UserInfo />
        </div>
    );
}

function UserInfo() {
    return (
        <UserContext.Consumer>
            {(context) => (
                <div className="UserInfo-WithContext">
                    <div className="title-WithContext">UserInfo</div>
                    <div>User id: {context.user.id}</div>
                    <div>User name: {context.user.name}</div>
                    <UserCounter />
                </div>
            )}
        </UserContext.Consumer>
    );
}

function UserCounter() {
    return (
        <UserContext.Consumer>
            {(context) => (
                <div className="UserCounter-WithContext">
                    <div>Counter: {context.user.count}</div>
                    <button onClick={context.decCount}>-</button>
                    <button onClick={context.incCount}>+</button>
                </div>
            )}
        </UserContext.Consumer>
    );
}
