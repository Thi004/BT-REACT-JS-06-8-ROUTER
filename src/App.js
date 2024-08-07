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
        <Route element={<ListProduct/>} path={'list-product'}></Route>
        <Route element={<HotProduct/>} path={'hot-product'}></Route>
        <Route element={<Category/>} path={'category'}></Route>
    </Route>
    <Route>
        <Route element={<Admin/>} path={'/user/admin'}></Route>
    </Route>
</Routes>
   </>
  );
}

export default App;
