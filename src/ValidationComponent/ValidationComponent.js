import React from 'react';

const validationComponent = (props) =>{
    let valid = "Text not longh enough";

    if (props.size > 5){
        valid = "Text longh enough";
    }

    return (
        <div>
            <p>{valid}</p>
        </div>
    )
};

export default validationComponent;