import '../components0608-User/style0608/Admin.css'
import {Outlet, useNavigate} from "react-router-dom";

function Admin() {
    const navigate = useNavigate();
    return (
        <>
            <div className={'admin'}>
                <button className='btn-back-user' onClick={() => navigate('/user')}>Back to User</button>
                Admin Page

            </div>
            <Outlet/>
            {/* để Outlet ở đây, có thể tạo thêm nhiều con trong Admin giống User  */}
        </>
    )
}

export default Admin