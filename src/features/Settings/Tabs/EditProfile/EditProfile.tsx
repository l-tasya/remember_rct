import React, {useState} from "react";
import {IProfile} from '../../../../common/types/types';
import {useFormik} from "formik";
import {Container, ContainerForm, Copy, Footer, Header, Info} from "./styles";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import Avatar from "@mui/material/Avatar/Avatar";

interface IProps {
    profile: IProfile
    saveChanges: (user: IProfile) => void
    savePhoto: (file: File) => void
}

type Initial = {
    name: string,
    surname: string,
    about: string,
    file: File

}
type FormikErrorType = {
    name?: string
    surname?: string
    about?: string
}
const validate = (values: Initial) => {
    const errors: FormikErrorType = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.surname) {
        errors.surname = 'Required';
    }
    if (!values.about) {
        errors.about = 'Required';
    }

    return errors;
}
export const EditProfile: React.FC<IProps> = React.memo(({profile, saveChanges, savePhoto}) => {
    let initialName = profile.fullName.split(" ")[0]
    let initialSurname = profile.fullName.split(" ")[1]
    let formik = useFormik({
        initialValues: {
            name: initialName,
            surname: initialSurname,
            about: profile.aboutMe,
            file: {}
        } as Initial,
        validate,
        onSubmit: (values) => {
            saveChangesCallback(values.name, values.surname, values.about)
            savePhoto(values.file)
        }
    })
    let [hover, setHover] = useState(false)
    const saveChangesCallback = (name: string, surname: string, about: string) => {
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
    let avatar: string = profile?.photos.small ? profile?.photos.small : ''
    return <div>
        <form onSubmit={formik.handleSubmit}>
            <Header>
                <div style={{transition: '0.3s'}} onMouseMove={() => setHover(true)} onMouseOut={() => setHover(false)}>
                    {
                        avatar ? !hover ? <Avatar sx={{width: '48px', height: '100%'}} src={avatar}/> :
                                <IconButton size={'large'} color="primary" aria-label="upload picture" component="label">
                                    <input id="file" name="file" type="file" hidden onChange={(event) => {
                                        formik.setFieldValue("file", event.currentTarget.files![0]);
                                    }}/>
                                    <PhotoCamera/>
                                </IconButton>
                            :
                            <IconButton size={'large'} color="primary" aria-label="upload picture" component="label">
                                <input id="file" name="file" type="file" hidden onChange={(event) => {
                                    formik.setFieldValue("file", event.currentTarget.files![0]);
                                }}/>
                                <PhotoCamera/>
                            </IconButton>
                    }
                </div>
                <div>
                    <Info value={"gray"}>{formik.values.name} {formik.values.surname}</Info>
                    <Identifier id={profile.userId}/>

                </div>
            </Header>

            <ContainerForm>
                <TextField
                    label="Name"
                    size="small"
                    margin={'normal'}
                    variant={'standard'}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    {...formik.getFieldProps('name')}
                />
                <TextField
                    label="Surname"
                    size="small"
                    margin={'normal'}
                    variant={'standard'}
                    error={formik.touched.surname && Boolean(formik.errors.surname)}
                    helperText={formik.touched.surname && formik.errors.surname}
                    {...formik.getFieldProps('surname')}
                />
                <TextField
                    label="About"
                    size="small"
                    margin={'normal'}
                    variant={'standard'}
                    error={formik.touched.about && Boolean(formik.errors.about)}
                    helperText={formik.touched.about && formik.errors.about}
                    {...formik.getFieldProps('about')}
                />
            </ContainerForm>
            <Footer>
                <Button
                    variant={"contained"}
                    size={"small"}
                    type={'submit'}
                >Save</Button>
            </Footer>
        </form>
    </div>
})


const Identifier: React.FC<{ id: number }> = React.memo(({id}) => {
    let [copied, setCopied] = useState<boolean>(false)
    const copy = async () => {
        await navigator.clipboard.writeText(id.toString());
        setCopied(true)
        setTimeout(() => {
            setCopied(state => !state)
        }, 3000)
    }

    return <Container value="light" onClick={copy}>
        ID:{id}<Copy/>{copied && <span style={{color: "lightgreen", transition: '30s'}}>Copied!</span>}
    </Container>
})



