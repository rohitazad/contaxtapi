import React from 'react';

import {UserState} from '../Context/Context';

const GrandChildComponent = ({name, updateName})=>{
    const {state:{age,  address}, dispatch} = UserState();
    return (
        <>
            <h1>Hello i m GrandChildComponents</h1>
            <p>Hello Grand Child :- {name}</p>
            <button onClick={()=>{updateName('Rohit Azad Malik R.A.M')}}>Click to my name update</button>
            <br />
            <br />
            <input type="text" value={age} onChange={(e)=>{
                dispatch({
                    type:'ADD_AGE',
                    payload:e.target.value
                })
            }} placeholder='type age'/><br />
            <textarea value={address} onChange={(e)=>{
                dispatch({
                    type:'ADD_ADDRESS',
                    payload:e.target.value
                })
            }} placeholder='type   address'>

            </textarea>
        </>
    )
}
export default GrandChildComponent;