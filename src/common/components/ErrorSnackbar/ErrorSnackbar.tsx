import React from 'react';
import Snackbar from '@mui/material/Snackbar/Snackbar';
import {useAppDispatch, useAppSelector} from '../../hook/hooks';
import {setErrorAC, setLoadingStatusAC} from '../../../redux/reducers/appReducer';
import MuiAlert, {AlertProps} from '@mui/material/Alert/Alert';
import {Stack} from '@mui/material';

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ErrorSnackbar: React.FC = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector(t => t.app.error)
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            dispatch(setErrorAC(null));
        }
        dispatch(setErrorAC(null));
        dispatch(setLoadingStatusAC('idle'))
    };
    return <Stack spacing={2} sx={{width: '100%'}}><Snackbar open={Boolean(error)} autoHideDuration={3000}
                                                             onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
            {error}
        </Alert>
    </Snackbar>
    </Stack>
}




