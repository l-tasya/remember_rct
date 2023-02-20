import {Dispatch} from 'redux';
import {AppActionsType, setErrorAC, setLoadingStatusAC} from '../../redux/reducers/appReducer';
import {ResponseType} from '../types/types';

export const handleServerNetworkError = (dispatch: ErrorUtilsDispatchType, error: { message: string }) => {
    setTimeout(() => {
        dispatch(setErrorAC(error.message))
        dispatch(setLoadingStatusAC('failed'))
    }, 2000)

}
type ErrorUtilsDispatchType = Dispatch<AppActionsType>

export type ErrorCustomType = {
    message: string
}

export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {
    console.log(data)
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    dispatch(setLoadingStatusAC('failed'))
}




