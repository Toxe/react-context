import React from "react";
import "./UserWithoutContext.css";

export default function UserContainerWithoutContext(props) {
    return (
        <div className="UserContainer-WithoutContext">
            <div className="title-WithoutContext">UserContainerWithoutContext</div>
            <UserContainerContent user={props.user} />
        </div>
    );
}

function UserContainerContent(props) {
    return (
        <div className="UserContainerContent-WithoutContext">
            <div className="title-WithoutContext">UserContainerContent</div>
            <div>for user with id={props.user.id} and count={props.user.count}</div>
            <UserContainerBody user={props.user} />
        </div>
    );
}

function UserContainerBody(props) {
    return (
        <div className="UserContainerBody-WithoutContext">
            <div className="title-WithoutContext">UserContainerBody</div>
            <UserInfo user={props.user} />
        </div>
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo-WithoutContext">
            <div className="title-WithoutContext">UserInfo</div>
            <div>User id: {props.user.id}</div>
            <div>User name: {props.user.name}</div>
            <div>Counter: {props.user.count}</div>
        </div>
    );
}
