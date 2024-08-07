import {Route, Routes} from "react-router-dom";
import User from "./components/User";
import ListProduct from "./components/ListProduct";
import HotProduct from "./components/HotProduct";
import Category from "./components/Category";
import Admin from "./components/Admin";

function App() {
  return (
   <>
<Routes>
    <Route element={<User/>} path={'user'}>
        <Route element={<ListProduct/>} path={'/user/list-product'}></Route>
        <Route element={<HotProduct/>} path={'/user/hot-product'}></Route>
        <Route element={<Category/>} path={'/user/category'}></Route>
    </Route>
    <Route>
        <Route element={<Admin/>} path={'/user/admin'}></Route>
    </Route>
</Routes>
   </>
  );
}

export default App;
