import React from 'react';
import Snackbar from '@mui/material/Snackbar/Snackbar';
import {useAppDispatch, useAppSelector} from '../../common/hook/hooks';
import {setAlertMessageAC, setLoadingStatusAC} from '../../features/App/appReducer';
import MuiAlert, {AlertProps} from '@mui/material/Alert/Alert';
import {Stack} from '@mui/material';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AlertSnackbar: React.FC = () => {
    const dispatch = useAppDispatch()
    const alertMessage = useAppSelector(t => t.app.alertMessage)
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            dispatch(setAlertMessageAC(null));
        }
        dispatch(setAlertMessageAC(null));
        dispatch(setLoadingStatusAC('idle'))
    };
    return <Stack spacing={2} sx={{width: '100%'}}>
        <Snackbar anchorOrigin={{horizontal: 'center', vertical: 'top'}} open={Boolean(alertMessage)}
                  autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                {alertMessage}
            </Alert>
        </Snackbar>
    </Stack>
}
