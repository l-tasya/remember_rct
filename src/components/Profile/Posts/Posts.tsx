import React from "react";
import {Post} from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {addPostAC, PostType, removePostAC} from "../../../redux/reducers/profileReducer";
import {StyledInput} from "../../../common/components/StyledInput/StyledInput";
import styled from "styled-components";
import { StyledBlock } from "../../../common/styles/styles";

export const Posts = () => {
    let posts = useSelector<AppStateType, PostType[]>(t => t.profile.posts)
    let dispatch = useDispatch()
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
`
    const Input = styled.div`
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      background: white;
      border-radius: 8px;
      margin: 10px 0 ;
      padding: 16px;
      display: flex;
      justify-content: center;
`
    return (
        <Container>
            <Content>
                <Input>
                    <StyledInput label={'New post'} addItem={(value: string) => dispatch(addPostAC(value))}/>
                </Input>
                {posts.map(t => <Post removePost={() => dispatch(removePostAC(t.id))} key={t.id} message={t.message}
                                      time={t.time} id={t.id}/>)}
            </Content>
            <About>
                <div>Friends: 5,344+</div>
                <div>Groups: 344</div>
                <div>Live in: ...</div>
                <div>From: ...</div>
                <div>Followers: 999,999+</div>
            </About>
        </Container>
    )
}