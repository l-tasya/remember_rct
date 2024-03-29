import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../app/store";

export type AppThunkDispatchType = ThunkDispatch<AppStateType, any, AnyAction>
//APP DISPATCH
export const useAppDispatch = () => useDispatch<AppThunkDispatchType>()


export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector