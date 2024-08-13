import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" href="#" to={'/'}>Home <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#" to={'/cart'}>Cart</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                <Link to={'/login'}>Login</Link>
                                </button>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    <Link to={'/register'}>Link</Link>
                                </button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}