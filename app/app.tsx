import * as React from "react"
import * as ReactDOM from "react-dom"
import './app.common.css'
// import { AppContextProvider } from './store'
import { RecoilRoot } from 'recoil'
import { Index } from "./components/index/index"
ReactDOM.render(
    <RecoilRoot>
        <Index />
    </RecoilRoot>
    ,
    document.getElementById("main")
)