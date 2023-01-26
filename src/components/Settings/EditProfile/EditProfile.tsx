import React, {useState} from "react";
import styled from "styled-components";
import {StyledIMGBadge, Title} from "../../../common/styles/mui-styles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Button from "@mui/material/Button/Button";
import {ProfileUserType} from "../../../redux/reducers/profileReducer";

type EditProfilePropsType = {
    user: ProfileUserType
    saveChanges: (user: ProfileUserType) => void
}
const Header = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 16px;
`
const Footer = styled.div`
  grid-column: 1 / -1;
  margin: 8px 0;
`
const Avatar = styled(StyledIMGBadge)`
  background: white;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`
const Item = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
label{
align-self: flex-end;
font-size: 12px;
}
input{
font-size: 17px;
height: 30px;
padding: 0 5px;
font-weight: 400;
&:focus{
outline: none;
font-weight: 400;
}
}
`
const Form = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
grid-column-gap: 16px

`
const Info = styled(Title)`
  font-weight: 700;
  font-size: 20px;
`
export const EditProfile: React.FC<EditProfilePropsType> = React.memo(({user, saveChanges}) => {
    let initialName = user.fullName.split(" ")[0]
    let initialSurname = user.fullName.split(" ")[1]
    let [name, setName] = useState<string>(initialName)
    let [surname, setSurname] = useState<string>(initialSurname)
    let [about, setAbout] = useState<string>(user.aboutMe)


    const saveChangesCallback = () => {
        let item: ProfileUserType = {
            fullName: `${name} ${surname}`,
            aboutMe: about,
            userId: user.userId,
            lookingForAJobDescription: user.lookingForAJobDescription,
            contacts: user.contacts,
            lookingForAJob: user.lookingForAJob,
            photos: {}
        }
        saveChanges(item)
    }


    return <div>
        {/*<Title value={'default'}>Personal Data</Title>*/}
        <Header>
            <Avatar>
                <CameraAltIcon/>
            </Avatar>
            <div>
                <Info value={"gray"}>{name} {surname}</Info>
                <div>ID: {user.userId} <ContentCopyIcon
                    sx={{fontSize: 12, color: theme => theme.palette.primary.main}}/></div>
            </div>
        </Header>
        <Form>
            <Item>
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.currentTarget.value)} type="text"/>
            </Item>
            <Item>
                <label>Surname</label>
                <input value={surname} onChange={(e) => setSurname(e.currentTarget.value)} type="text"/>
            </Item>
            <Item>
                <label>About me</label>
                <input value={about} onChange={(e) => setAbout(e.currentTarget.value)} type="text"/>
            </Item>
        </Form>
        <Footer>
            <Button
                variant={"contained"}
                size={"small"}
                onClick={saveChangesCallback}
            >Save</Button>
        </Footer>
    </div>
})