import React, { useContext } from 'react'
import { ListContext } from './DivOne'

const DivFive = () => {
    
    const list = useContext(ListContext)

    return ( 
        <div onClick={() => list.dispatch({ type: 'add_num', payload: Math.random() })}>Div Five</div>
    );
}
 
export default DivFive;