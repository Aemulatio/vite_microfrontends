import React, {Suspense, useState} from 'react'
import './App.css'
// import Remote from "remoteApp/FirstApp"

const Remote = React.lazy(() => import("remoteApp/FirstApp"))
const Remote2 = React.lazy(() => import("remoteApp2/Remote2"))
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./Layout/Layout.jsx";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>} path={"/"}>
                {/*<Route element={<Remote/>} path={"/"}/>*/}
                    <Route element={<Suspense fallback={<div>Loading...</div>}> <Remote/></Suspense>} index/>
                    <Route element={<Suspense fallback={<div>Loading...</div>}> <Remote2/></Suspense>} path={"r2/*"}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
