import {useState} from "react";

export const Button = () => {
    const [state, setState] = useState(0)
    return <button
        style={{
            border: "1px solid black",
            backgroundColor: "#eeeeee",
            color: "#111111",
        }}
        onClick={() => setState(s => s + 1)}
    >
        AAAAAA CLICK ME {state}
    </button>
}


export default Button;
