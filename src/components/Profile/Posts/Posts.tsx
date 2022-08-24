import React from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/reducers/profileReducer";
import {StyledInput} from "../../../common/components/StyledInput/StyledInput";
import styled from "styled-components";
import {StyledBlock} from "../../../common/styles/styles";

type PostsPropsType = {
    posts: PostType[]
    addPost: (value:string)=>void
    removePost: (postID:string)=>void
    likeCallback: (postID: string)=>void
}
export const Posts: React.FC<PostsPropsType> = React.memo(({posts, addPost,removePost,likeCallback}) => {

    const Container = styled.div`
    transition: 3s linear;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    height: 100%;
`
    const Content = styled.div`
    margin-top: 10px;
`
    const About = styled(StyledBlock)`
    display: block;
    margin: 20px 0 20px 20px;
    height: 300px;
    min-width: 200px;
    h4{
    color: #3f424b;
    }
`
    const Input = styled(StyledBlock)`
      border-radius: 8px;
      margin: 10px 0 ;
      display: flex;
      justify-content: center;
`
    return (
        <Container>
            <Content>
                <Input>
                    <StyledInput label={'New post'} addItem={addPost}/>
                </Input>
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
            <About>
                <h4>About:</h4>
                <div>Friends: 5,344+</div>
                <div>Groups: 344</div>
                <div>Live in: ...</div>
                <div>From: ...</div>
                <div>Followers: 999,999+</div>
            </About>
        </Container>
    )
})