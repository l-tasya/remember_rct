import styled from "styled-components";
//global
//scroll-------------------------
export const Scroll = styled.div`
    overflow-y: scroll;
    position: absolute;
    width: 100%;
    //firefox
    scrollbar-color: black white;
    scrollbar-width: thin;
    //google chrome
    ::-webkit-scrollbar {
    height: 10px;
    width: 5px;
    background: white;
    }
    ::-webkit-scrollbar-thumb {
    background: black;
}
`
//contentContainer wrap-------------------------
export const PaddedContentContainer = styled(Scroll)`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr;
    grid-column-start: 2;
    height: 100%;

    
`
export const ContentContainerWithoutPadding = styled.div`
       width: 100%;
       height: 100%;
   

`
//paper--------------------------
type StyledBlockPropsType = {
    radius?: number | 'none' | 'default'
    padding?: string
    elevation?: 1 | 3 | 'none' | 'default'
    post?: boolean
}
const elevationReducer = (elevation: 3 | 1 | 'none' | 'default') => {
    switch (elevation) {
        case 'none': {
            return 'box-shadow: 0px;'
        }
        case 'default': {
            return 'box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);'
        }
        case 1: {
            return '  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);'
        }
        case 3: {
            return 'box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;'
        }
        default: {
            throw new Error('i dont understand this elevation(maybe it is invalid)')
        }
    }
}
const borderReducer = (value: number | 'none' | 'default') => {
    switch (value) {
        case 'none': {
            return 'border-radius: 0px;'
        }
        case 'default': {
            return `border-radius: 4px;`
        }
        default: {
            return `border-radius: ${value};`
        }
    }
}
export const StyledBlock = styled.div`
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    ${(props: StyledBlockPropsType) => props.radius ? borderReducer(props.radius) : borderReducer('default')}
    ${(props: StyledBlockPropsType) => (props.padding === 'none') ? `padding: 0px;` : `padding: 16px;`}
    ${(props: StyledBlockPropsType) => props.elevation ? elevationReducer(props.elevation) : elevationReducer('default')}
    ${(props: StyledBlockPropsType) => props.post ? 'min-width: 200px; height: 200px; margin-top: 8px;' : ''}
`

//other-------------------------

