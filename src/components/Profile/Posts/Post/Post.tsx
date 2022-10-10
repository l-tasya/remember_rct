import React, { useCallback } from "react";
import styled from "styled-components";
import {ProfileBadge} from "../../../../common/styles/styles";
import {StyledBlock, StyledIMGBadge} from "../../../../common/styles/styles";
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import {useSelector} from "react-redux";
import {ThemeColorType} from "../../../../redux/reducers/settingsReducer";
import {AppStateType} from "../../../../redux/store/store";
import {Like} from "../../../../common/components/Like/Like";
import {Remove} from "../../../../common/components/Remove/Remove";

export type PostPropsType = {
    id: string
    message: string
    time: string
    removePost: (postID: string) => void
    likeCount: number
    likeCallback: (postID: string) => void
    isLiked: boolean
}
export const Post: React.FC<PostPropsType> = React.memo(({id, message, time, removePost, likeCount, isLiked, likeCallback}) => {
    //state
    const color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
    //styles
    const Container = styled(StyledBlock)`
    margin: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px auto 1fr;
    justify-content: start;
    align-items: center;
    min-width: 300px;
    color: #3f424b;
    
`
    const Header = styled.div`
       display: grid;
       grid-column-start: 1;
       grid-column-end: 3;
       grid-row-start: 1;
       grid-template-rows: 1fr 1fr;
       grid-template-columns: 50px 1fr 1fr 1fr;
       
       
`
    const Content = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 8px 8px;
    color: #666;
    font-family: system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';;
`
    const Footer = styled.div`
     grid-row-start: 3;
     grid-column-start: 1;
     grid-column-end: 3;
     margin: 0 8px;
     svg{
        font-size: 23px;
     }
     display: grid;
     align-items: center;
     grid-template-columns: repeat(14, 1fr);
     grid-template-rows: 1fr 1fr;
     
`
    const Title = styled.div`
    grid-column-start: 2;
    grid-column-end: 4;
    font-weight: 600;
    font-size: 15px;
    :hover{
    color: ${color.second};
    transition: 0.2s;
    }
`
    const SubTitle = styled.div`
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    font-weight: 400;
color: #666;
    
`
    const UserIMG = styled(ProfileBadge)`
    grid-row-start: 1;
    grid-row-end: 3;
    justify-self: center;
    
`


    const LikeInfo = styled.div`
      grid-column-start: 1;
      grid-column-end: 10;
      grid-row-start: 2;
      margin: 8px 8px 0 0;
      font-weight: 400;
      display: flex;
      justify-content: flex-start;
      div{
      display: grid;
      grid-template-columns: 10px 10px 10px;
      align-items: center;
      margin-right: 10px;
      }
    
`
    const Badge = styled(StyledIMGBadge)`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    background: ${color.second}
    `
    const Share = styled.div`
    grid-column-start: 14;
`
    const RemoveEl = styled(Remove)`
    grid-column-start: 4;
    grid-row-start: 1;
`
    const removeCallback = useCallback(() =>{
        removePost(id)
    },[removePost, id])
    const like = useCallback(()=>{
        likeCallback(id)
    },[likeCallback, id])
    return (
        <Container>
            <Header>
                <UserIMG src={'http://localhost:3000/static/media/eral.3a96cf0943b92706de14.jpg'}/>
                <Title>Nursain Temirtas</Title>
                <SubTitle>{time}</SubTitle>
                <RemoveEl removeCallback={removeCallback} fontSize={15}/>
            </Header>


            <Content>
                {message}
            </Content>

            <Footer>
                <div>
                    <Like disabled={isLiked} isLiked={isLiked} likeCallback={like}/>
                </div>
                <div>
                    <CommentIcon/>
                </div>
                <Share>
                    <ShareIcon/>
                </Share>
                <LikeInfo>
                    <div><Badge/><Badge/><Badge/></div><span>Liked by <b>{`${likeCount}`}</b> users</span>
                </LikeInfo>
            </Footer>
        </Container>
    )
})