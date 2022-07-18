import React, {useState} from "react";
import styled from "styled-components";
import {v1} from "uuid";
import {RadioButton} from "../../common/components/Radio/Radio";
import {StyledBlock} from "../../common/styles/styles";

export type ColorValueType =
    | 'purple'
    | 'green'
    | 'blue'
    | 'red'
    | 'pink';
export type StateType = {
    id: string
    value: ColorValueType
    first: string
    second: string
}[]
export const Settings = () => {
    const SettingContainer = styled(StyledBlock)`
    grid-template-columns: repeat(3,1fr);
`
    const Title = styled.div`
`
    const ColorSelectContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
`

    let themesArray: StateType = [
        {id: v1(), value: 'purple', first: '#7c5ba1', second: '#c9a3fc'},
        {id: v1(), value: 'green', first: '#01d201', second: '#98ff98'},
        {id: v1(), value: 'blue', first: '#1a74ed', second: '#84bbff'},
        {id: v1(), value: 'red', first: '#dc2121', second: '#e38585'},
        {id: v1(), value: 'pink', first: '#ff0084', second: '#ff8bc0'},
    ];
    // TODO: lvl up to redux

    let [value, setValue] = useState<ColorValueType>('pink')
    return <SettingContainer>
        <Title>Select app theme</Title>
        <ColorSelectContainer>
            {themesArray.map(t => <RadioButton title={t.second} c1={() => setValue(t.value)}
                                               checked={t.value === value}/>)}
        </ColorSelectContainer>
        {/*{TODO: create submit button and setting}*/}
    </SettingContainer>
}