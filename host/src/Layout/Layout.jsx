import {useState} from "react";
import {NavLink, Outlet} from "react-router-dom";


export const Layout = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div style={{
                display: "flex",
                gap: 5,
                justifyContent: "center"
            }}>
                <NavLink to={"/"} style={({isActive})=>({textDecoration: isActive ?  "underline" : "none"})}>Home</NavLink>
                <NavLink to={"/r2"} style={({isActive})=>({textDecoration: isActive ?  "underline" : "none"})}>Remote 2</NavLink>
            </div>
            <h1>Host</h1>
            <Outlet/>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )

}
