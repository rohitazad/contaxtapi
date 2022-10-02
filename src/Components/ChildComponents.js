import React from 'react';

import GrandChildComponent from './GrandChildComponents';

const ChildComponent = ({name, updateName})=>{
    return (
        <>
            <h1>Hello i m ChildComponent</h1>
            <br />
            Hello you in the child :- {name}
            <hr />
            <GrandChildComponent name={name} updateName={updateName}/>
        </>
    )
}
export default ChildComponent;