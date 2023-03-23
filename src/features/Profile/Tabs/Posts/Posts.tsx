import React from "react";
import {Post} from "./Post/Post";
import {StyledInput} from "../../../../components/StyledInput/StyledInput";
import styled from "styled-components";

import {IPost} from "../../../../common/types/types";


const Content = styled.div`
  display: grid;
  grid-gap: 10px;
`


interface IProps {
    posts: IPost[]
    addPost: (value: string) => void
    removePost: (postID: string) => void
    likeCallback: (postID: string) => void
}

export const Posts: React.FC<IProps> = React.memo(({posts, addPost, removePost, likeCallback}) => {
    return (
        <Content>
            <StyledInput withButton={"+"} addItem={addPost}/>
            {posts.map(t => <Post
                removePost={removePost}
                key={t.id}
                message={t.message}
                time={t.time}
                id={t.id}
                likeCount={t.likeCount}
                isLiked={t.isLiked}
                likeCallback={likeCallback}/>
            )
            }
        </Content>
    )
})