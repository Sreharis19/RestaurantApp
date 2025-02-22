import React from "react";
import BlankData from "./BlankData";
import ErrorImage from "../../assets/imgs/errorimage.png";

const ErrorData = props => {
    return <BlankData {...props}/>
}

ErrorData.propTypes = {
    ...BlankData.propTypes
}

ErrorData.defaultProps = {
    image: ErrorImage,
    title: "Oops!",
    description: "Something went wrong. Please try again or contact the administration"
}

export default ErrorData;