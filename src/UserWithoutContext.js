import React from "react";
import "./User.css";

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
            <div>for user id: {props.user.id}</div>
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
        </div>
    );
}
