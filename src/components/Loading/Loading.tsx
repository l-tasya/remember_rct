import LinearProgress from "@mui/material/LinearProgress/LinearProgress"
import {useAppSelector} from "../../common/hook/hooks"
import React from "react";

export const Loading: React.FC<{ loading?: boolean }> = React.memo(({loading}) => {
    const stylesForLoading = {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
    }
    const status = useAppSelector(t => t.app.status)
    const initialize = useAppSelector(t => t.app.initialize)
    return <>{status === 'loading' && <LinearProgress sx={stylesForLoading}/>}
        {status === 'failed' &&
            <LinearProgress variant={'determinate'} value={100} color={'error'} sx={stylesForLoading}/>}
        {initialize === "failed" &&
            <LinearProgress variant={'determinate'} value={100} color={'error'} sx={stylesForLoading}/>}
        {loading && <LinearProgress sx={stylesForLoading}/>}
    </>
})