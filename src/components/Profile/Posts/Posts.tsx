import React from "react";
import {Post} from "./Post/Post";
import {StyledInput} from "../../../common/components/StyledInput/StyledInput";
import styled from "styled-components";
import {About} from "./About/About";
import {IPost} from "../../../common/types/types";


const Container = styled.div`
    transition: 3s linear;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
`
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
    console.log("Posts")
    return (
        <Container>
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
            <About/>
        </Container>
    )
})