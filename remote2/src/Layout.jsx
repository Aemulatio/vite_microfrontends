import Button from "./components/Button/Button.jsx";
import {NavLink, Outlet} from "react-router-dom";


export const Layout = () => {
    return (
        <div className={"remote_app2"}>
            <NavLink to={"/r2"} className={({isActive})=>isActive?"active":null}>Home remote2</NavLink>
            <NavLink to={"/r2/page"} className={({isActive})=>isActive?"active":null}>Remote 2 page</NavLink>
            <h1>Remote 2</h1>
            <Outlet/>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>)
}
