import React  from "react";
import {UserState} from '../../Context/Context';

const Connect = ({name})=>{

    const {state:{age,  address}} = UserState();
    return(
        <>
            <h1>Hello i m Contact</h1>
            <p>Hello :- {name}</p>
            <p>My age is :- {age}</p>
            <p>My addrress is :- {address}</p>
        </>
    )
}

export default Connect;