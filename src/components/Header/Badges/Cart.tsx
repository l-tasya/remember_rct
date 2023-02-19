import React from "react";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {MenuBadge} from '../../../common/components/Menu/Menu';

export const Cart: React.FC = React.memo(() => {
    //TODO: CART COMPONENT
    return <MenuBadge svg={<LocalGroceryStoreIcon/>}>
        <div>Cart</div>
    </MenuBadge>
})