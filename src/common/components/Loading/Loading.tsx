import LinearProgress from "@mui/material/LinearProgress/LinearProgress"
import {stylesForLoading} from "../../../App"
import {useAppSelector} from "../../hook/hooks"

export const Loading: React.FC = () => {
    const status = useAppSelector(t => t.app.status)
    const initialize = useAppSelector(t => t.app.initialize)
    return <>{status === 'loading' && <LinearProgress sx={stylesForLoading}/>}
        {status === 'failed' &&
            <LinearProgress variant={'determinate'} value={100} color={'error'} sx={stylesForLoading}/>}
        {initialize === "failed" &&
            <LinearProgress variant={'determinate'} value={100} color={'error'} sx={stylesForLoading}/>}
    </>
}