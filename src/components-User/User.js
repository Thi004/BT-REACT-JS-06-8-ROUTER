import '../style/User.css'
import {Link, Outlet} from "react-router-dom";
function User () {
    return (
        <>
            <div className={'container'}>
                <div className={'header'}>
                    <nav>
                        <ul>
                            <li><Link to='/user'>Home</Link></li>
                            |
                            <li><Link to='hot-product'>Hot</Link></li> |
                            <li><Link to='category'>Category</Link></li> |
                            <li><Link to='/admin'>Admin</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={'body'}>
                    <Outlet/>
                    <div className={'slide'}>Slides</div>
                    <div className={'list-product'}> <Link to= 'list-product'>List Product</Link></div>
                    <div className={'hot-product'}>Top Product</div>
                </div>
                <div className={'footer'}>Footer</div>
            </div>
        </>
    )
}

export default User