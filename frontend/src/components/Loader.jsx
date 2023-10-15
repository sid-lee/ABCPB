import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <Spinner 
            animation="border"
            role="status"
            style={{
                width: "100px",
                margin: "auto",
                height: "100px",
                display: "block"
            }}
        ></Spinner>
    );
}

export default Loader;