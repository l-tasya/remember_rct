import React from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export type PostPropsType = {
    id: string
    message: string
    time: string
    removePost: () => void
}
export const Post: React.FC<PostPropsType> = ({ message, time, removePost}) => {
    return (
        <div>{message}<span>{time}</span><HighlightOffIcon onClick={()=>removePost()} sx={{color: 'red'}}/></div>
    )
}