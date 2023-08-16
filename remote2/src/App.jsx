import './App.css'
import Button from "./components/Button/Button";
import {Layout} from "./Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    // const env = ;
    console.log(import.meta.env)

    if (import.meta.env.PROD)
        return (
            <Routes >
                <Route element={<Layout/>} path={"/"}>
                    <Route element={<Button/>} path={"/"}/>
                    <Route element={<Button text={"page"}/>} path={"/page"}/>
                </Route>
            </Routes>
        )

    return (
        <BrowserRouter basename={"r2"}>
            <Routes >
                <Route element={<Layout/>} path={"/"}>
                    <Route element={<Button/>} path={"/"}/>
                    <Route element={<Button text={"page"}/>} path={"/page"}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
