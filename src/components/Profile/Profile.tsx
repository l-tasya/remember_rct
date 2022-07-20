import React from "react";
import {Route, Routes} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {Groups} from "./Groups/Groups";
import {Posts} from "./Posts/Posts";
import {UserInfo} from "./User/UserInfo/UserInfo";

export const Profile = () => {

    return (<div>
            <UserInfo />
            <Routes>
                <Route path="posts" element={<Posts />} />
                <Route path="friends" element={<Friends />} />
                <Route path="groups" element={<Groups />} />
            </Routes>
        </div>
    )
}