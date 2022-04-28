import React from 'react'
import DivThree from './DivThree';

const DivTwo = () => {
    return ( 
        <div>
            DivTwo
			I want this change, which is coming from the local
            <DivThree />
        </div>
    );
}
 
export default DivTwo;