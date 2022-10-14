import styled from "styled-components";

//global

//contentContainer wrap-------------------------
export const PaddedContentContainer = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    height: 100%;
    padding: 6px;
`
export const ContentContainerWithoutPadding = styled.div`
   grid-column-start: 1;
   grid-column-end: 4;
   grid-row-start: 1;
       height: 100%;
   

`
//--------------------------
//paper--------------------------
type StyledBlockPropsType = {
    radius?: number
    padding?: string
    elevation?: number
}
const elevationReducer = (elevation: number) => {
    switch (elevation) {
        case 0: {
            return 'box-shadow: 0px'
        }
        case 2: {
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
export const StyledBlock = styled.div`
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    ${(props: StyledBlockPropsType) => props.radius ? `border-radius: ${props.radius}px;` : `border-radius: 4px;`}
    ${(props: StyledBlockPropsType) => (props.padding === 'none') ? `padding: 0px;` : `padding: 16px;`}
    ${(props: StyledBlockPropsType) => props.elevation ? elevationReducer(props.elevation) : elevationReducer(2)}
    

`


//-------------------------
export const AppWrapper = styled.div`
  background: #f5f5f5;
  overflow-y: hidden;
`

export const StyledIMGBadge = styled.div`
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
    color: #3f424b;
    font-size: 23px;
    }
`
export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: white;
    border: 0;
    outline: 0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    height: 30px;
    width: 50%;
    font-weight: 700;
    color: #3f424b;
    margin: 3px;
    
`
export const ProfileBadge = styled.img`
    border-radius: 50%;
    width: 40px;
    background: gray;
`