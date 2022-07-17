import React from "react";
import {Posts} from "./Posts/Posts";
import {UserInfo} from "./User/UserInfo/UserInfo";

export const Profile = () => {
    return (<div>
            <UserInfo />
            <Posts />
        </div>
    )
}