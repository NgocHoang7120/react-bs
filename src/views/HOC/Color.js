import React from "react";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) => {
    const randomColor = getRandomColor();
    const mystyle = {
        color: randomColor,
        fontSize: '20px',
        // backgroundColor: "DodgerBlue",
        // padding: "10px",
        // fontFamily: "Arial"
    };
    return (props) => (
        <div style={mystyle}>
            <WrappedComponent {...props}/>
        </div>
    )
};

export default Color;