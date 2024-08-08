import {Route, Routes} from "react-router-dom";
import User from "./components-User/User";
import ListProduct from "./components-User/ListProduct";
import HotProduct from "./components-User/HotProduct";
import Category from "./components-User/Category";
import Admin from "./components-Admin/Admin";

function App() {
    return (
        <>
            <Routes>
                <Route element={<User/>} path={'user'}>
                    <Route element={<ListProduct/>} path={'list-product'}></Route>
                    <Route element={<HotProduct/>} path={'hot-product'}></Route>
                    <Route element={<Category/>} path={'category'}></Route>
                </Route>
                <Route element={<Admin/>} path={'admin'}></Route>
            </Routes>
        </>
    );
}

export default App;
