import {Route, Routes} from "react-router-dom";
import Home from "./components0808/Home";
import Cart from "./components0808/page/Cart";
import Detail from "./components0808/page/Detail";
import Login from "./components0808/page/Login";
import Register from "./components0808/page/Register";


function App() {
    return (
        <>
            {/*component0608*/}
            {/*<Routes>*/}
            {/*    <Route element={<User/>} path={'user'}>*/}
            {/*        <Route element={<ListProduct/>} path={'list-product'}></Route>*/}
            {/*        <Route element={<HotProduct/>} path={'hot-product'}></Route>*/}
            {/*        <Route element={<Category/>} path={'category'}></Route>*/}
            {/*    </Route>*/}
            {/*    <Route element={<Admin/>} path={'admin'}></Route>*/}
            {/*</Routes>*/}

            {/*components0808*/}

            <Home/>
        </>
    );
}

export default App;
