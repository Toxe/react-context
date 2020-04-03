import React from "react";
import "./User.css";

export default function UserContainer(props) {
    return (
        <div className="UserContainer">
            <div className="title">UserContainer</div>
            <UserContainerContent user={props.user} />
        </div>
    );
}

function UserContainerContent(props) {
    return (
        <div className="UserContainerContent">
            <div className="title">UserContainerContent</div>
            <div>for user id: {props.user.id}</div>
            <UserContainerBody user={props.user} />
        </div>
    );
}

function UserContainerBody(props) {
    return (
        <div className="UserContainerBody">
            <div className="title">UserContainerBody</div>
            <UserInfo user={props.user} />
        </div>
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <div className="title">UserInfo</div>
            <div>User id: {props.user.id}</div>
            <div>User name: {props.user.name}</div>
        </div>
    );
}
