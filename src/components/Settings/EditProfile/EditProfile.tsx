import React, {useState} from "react";
import styled from "styled-components";
import {StyledIMGBadge, StyledTitle} from "../../../common/styles/mui-styles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Button from "@mui/material/Button/Button";
import {IProfile} from '../../../common/types/types';
import {useAppSelector} from '../../../common/hook/hooks';

interface IProps {
    profile: IProfile
    saveChanges: (user: IProfile) => void
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
const Info = styled(StyledTitle)`
  font-weight: 700;
  font-size: 20px;
`
export const EditProfile: React.FC<IProps> = React.memo(({profile, saveChanges}) => {
    let initialName = profile.fullName.split(" ")[0]
    let initialSurname = profile.fullName.split(" ")[1]

    let [name, setName] = useState<string>(initialName)
    let [surname, setSurname] = useState<string>(initialSurname)
    let [about, setAbout] = useState<string>(profile.aboutMe)


    const saveChangesCallback = () => {
        let item: IProfile = {
            fullName: `${name} ${surname}`,
            aboutMe: about,
            userId: profile.userId,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: profile.contacts,
            lookingForAJob: profile.lookingForAJob,
            photos: {
                small: null,
                large: null
            }
        }
        saveChanges(item)
    }
    const profileEntity = useAppSelector(t => t.profile.entityStatus)

    return <div>
        {/*<Title value={'default'}>Personal Data</Title>*/}
        <Header>
            <Avatar>
                <CameraAltIcon/>
            </Avatar>
            <div>
                <Info value={"gray"}>{name} {surname}</Info>
                <div>ID: {profile.userId} <ContentCopyIcon
                    sx={{fontSize: 12, color: theme => theme.palette.primary.main}}/></div>
            </div>
        </Header>
        <Form>
            <Item>
                <label>Name</label>
                <input disabled={profileEntity === 'loading'} value={name}
                       onChange={(e) => setName(e.currentTarget.value)} type="text"/>
            </Item>
            <Item>
                <label>Surname</label>
                <input disabled={profileEntity === 'loading'} value={surname}
                       onChange={(e) => setSurname(e.currentTarget.value)} type="text"/>
            </Item>
            <Item>
                <label>About me</label>
                <input disabled={profileEntity === 'loading'} value={about}
                       onChange={(e) => setAbout(e.currentTarget.value)} type="text"/>
            </Item>
        </Form>
        <Footer>
            <Button
                variant={"contained"}
                size={"small"}
                onClick={saveChangesCallback}
                disabled={profileEntity === 'loading'}
            >Save</Button>
        </Footer>
    </div>
})