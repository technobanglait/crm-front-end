import React from 'react';

const BtnSubmit = ({btnText}) => {

    const [isHover, setIsHover] = React.useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

    const btnStyle = {
        // border: "solid red 1px",
        border: "none",
        height : "40px",
        width: "120px",
        borderRadius: "10px",
        color: "White",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "600",
        cursor: "pointer",
        type: "submit",
        backgroundColor: isHover ? "#1b9480" : "#21a58e",
    }
    return (
        // <div style={btnStyle}>
            <button 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            type={"submit"} style={btnStyle}>{btnText}</button>
        // </div>
    );
};

export default BtnSubmit;