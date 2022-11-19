import React from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/reducers/profileReducer";
import {StyledInput} from "../../../common/components/StyledInput/StyledInput";
import styled from "styled-components";
import {StyledBlock} from "../../../common/styles/styles";
import {Title} from "../../../common/styles/mui-styles";


const Input = styled(StyledBlock)`
      border-radius: 8px;
      margin: 10px 0 ;
      display: flex;
      justify-content: center;
`
const Container = styled.div`
    transition: 3s linear;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
`
const Content = styled.div`
    margin-top: 10px;
`
const About = styled(StyledBlock)`
    display: block;
    margin: 20px 0 20px 20px;
    height: 300px;
    min-width: 200px;
`
type PostsPropsType = {
    posts: PostType[]
    addPost: (value: string) => void
    removePost: (postID: string) => void
    likeCallback: (postID: string) => void
}
export const Posts: React.FC<PostsPropsType> = React.memo(({posts, addPost, removePost, likeCallback}) => {
    console.log('Posts')


    return (
        <Container>
            <Content>
                <Input>
                    <StyledInput addItem={addPost}/>
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
                <Title value={'main'} sx={{fontWeight: 700}}>About:</Title>
                <div>Friends: <Title value={'light'}>5,344+</Title></div>
                <div>Groups: <Title value={'light'}>344</Title></div>
                <div>Live in: <Title value={'light'}>...</Title></div>
                <div>From: <Title value={'light'}>...</Title></div>
                <div>Followers: <Title value={'light'}>999,999+</Title></div>
            </About>
        </Container>
    )
})