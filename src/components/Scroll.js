import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border:'1px solid black', height:'900px'}}>{/* in jsx we have to capitalaze the Y in the overflowY  */}
            {/*  in jsx to add the style we have to use adouble curly brackets */}
            {props.children}
        </div>
    );
};
export default Scroll;