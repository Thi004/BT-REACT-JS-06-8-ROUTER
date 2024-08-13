import './style0808/Home.css'
import Header from "./Header";
import Navbar from "./Navbar";
import Left from "./Left";
import Right from "./Right";
import {Route, Routes} from "react-router-dom";
import Cart from "./page/Cart";
import Login from "./page/Login";
import Register from "./page/Register";
import Mid from "./page/Mid";
import Detail from "./page/Detail";

function Home() {
    return (
        <>
            <div className='container-fluid'>
                <Header/>
                <Navbar/>
                <div className="row">
                    <Left/>
                    <div className="col-7 mid">
                    <Routes>
                        <Route element={<Cart/>} path={'cart'}></Route>
                        <Route element={<Login/>} path={'login'}></Route>
                        <Route element={<Register/>} path={'register'}></Route>
                        <Route element={<Detail/>} path={'detail/:x'}></Route>
                        <Route element={<Mid/>} path={''}></Route>
                    </Routes>
                    </div>
                    <Right/>
                </div>
            </div>
        </>
    )
}


export default Home