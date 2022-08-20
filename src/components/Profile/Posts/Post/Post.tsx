import React from "react";
import styled from "styled-components";
import CancelIcon from '@mui/icons-material/Cancel';
import {ProfileBadge} from "../../../../common/components/Menu/Menu";
import {StyledIMGBadge} from "../../../../common/styles/styles";
import ChatIcon from '@mui/icons-material/Chat';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import {useSelector} from "react-redux";
import {ThemeColorType} from "../../../../redux/reducers/settingsReducer";
import {AppStateType} from "../../../../redux/store/store";

export type PostPropsType = {
    id: string
    message: string
    time: string
    removePost: () => void
    likeCount: number
    likeCallback: (postID: string) => void
    isLiked: boolean
}
export const Post: React.FC<PostPropsType> = ({id,message, time, removePost, likeCount, isLiked, likeCallback}) => {
    const color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
    //styles
    const Container = styled.div`
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    margin: 20px 0;
    padding: 16px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px auto 1fr;
    justify-content: start;
    align-items: center;
    min-width: 300px;
    
`
    const InfoContainer = styled.div`
       display: grid;
       grid-column-start: 1;
       grid-column-end: 3;
       grid-row-start: 1;
       grid-template-rows: 1fr 1fr;
       grid-template-columns: 50px 1fr 1fr 1fr;
       
       
`
    const Footer = styled.div`
     grid-row-start: 3;
     grid-column-start: 1;
     grid-column-end: 3;
     svg{
        font-size: 18px;
     }
     display: grid;
     align-items: center;
     grid-template-columns: repeat(6, 1fr);
     grid-template-rows: 1fr 1fr;
     span{
        margin-right: 8px;
        font-weight: 700;
        font-size: 15px;
        color: #3f424b;
     }
     
`
    const Title = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
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
    color: gray;
    
`
    const UserIMG = styled(ProfileBadge)`
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    justify-self: center;
    
`
    const Remove = styled(CancelIcon)`
    &:hover{
    color: red;


    }
    grid-column-start: 4;
    grid-row-start: 1;
    justify-self: flex-end;
    align-self: center;
`
    const Content = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 8px 8px;
    color: #666;
    font-family: system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';;
`
    const Item = styled.button`
border: 0;
background: transparent;
    display: flex;
    align-items: center;
    :hover{
    span{
    color: ${color.second};
        transition: 0.2s;
    }
    svg{
    color: ${color.second}
    }
    }
`
    const Badge = styled(StyledIMGBadge)`
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin: 0 8px;
`
    const LikeBadge = styled(Badge)`
    background: ${isLiked? 'red':'#d4ddea'}
`
    const Liked = styled.div`
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      margin: 8px 8px 0 8px;
      color: #3f424b;
      display: grid;
      grid-template-columns: 1fr 4fr;
      span{
      font-weight: 400;
      }
      b{
      font-weight:600;
      }
      div{
      display: grid;
      grid-template-columns: 10px 10px 10px;
      align-items: center;
      }
    
`
    const UserItem = styled(StyledIMGBadge)`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    `
    const onClickHandler = () => {
        removePost()
    }
    return (
        <Container>
            <InfoContainer>
                <UserIMG src={'http://localhost:3000/static/media/eral.3a96cf0943b92706de14.jpg'}/>
                <Title>Nursain Temirtas</Title>
                <SubTitle>{time}</SubTitle>
                <Remove onClick={() => onClickHandler()} sx={{color: 'darkgrey', fontSize: 15}}/>
            </InfoContainer>


            <Content>
                {message}
            </Content>

            <Footer>
                <Item
                    disabled={isLiked}
                    onClick={()=>likeCallback(id)}>

                    <LikeBadge>
                        <ThumbUpIcon/>
                    </LikeBadge>
                    <span>Like</span>
                </Item>
                <Item>
                    <Badge>
                        <ChatIcon/>
                    </Badge>
                    <span>Comment</span>
                </Item>
                <Item>
                    <Badge>
                        <ShareIcon/>
                    </Badge>
                    <span>Share</span>
                </Item>
                <Liked>
                    <div><UserItem/><UserItem/><UserItem/></div>
                    <span>Liked by <b>{`${likeCount}`}</b> users</span>

                </Liked>
            </Footer>
        </Container>
    )
}