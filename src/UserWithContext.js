import React from "react";
import "./UserWithContext.css";
import { UserContext } from "./UserContext";

export default function UserContainerWithContext() {
    return (
        <div className="UserContainer-WithContext">
            <div className="title-WithContext">UserContainerWithContext</div>
            <UserContainerContent />
        </div>
    );
}

function UserContainerContent() {
    return (
        <UserContext.Consumer>
            {(context) => (
                <div className="UserContainerContent-WithContext">
                    <div className="title-WithContext">UserContainerContent</div>
                    <div>for user id: {context.id}</div>
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
                    <div>User id: {context.id}</div>
                    <div>User name: {context.name}</div>
                </div>
            )}
        </UserContext.Consumer>
    );
}
