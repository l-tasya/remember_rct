import React from "react";

export type PostType = {
    id: string
    message: string
    time: string
}
export const Post: React.FC<PostType> = ({ message, time}) => {
    return (
        <div>{message}<span>{time}</span></div>
    )
}