import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./component/Home";
import {Header} from "./component/Header";
import {About} from "./component/About";
import {Background} from "./component/Background";
import {Skills} from "./component/Skills";
import {Projects} from "./component/Projects";

export const App = () => {
    return (
        <div className="App">
            <Background/>
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    );
}

