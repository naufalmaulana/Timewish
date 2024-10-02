import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function NavbarMobile(){
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        toast.success("Account has logged out");
        navigate("/auth/login");
    }
    return(
        <nav className="navbar navbar-expand-lg cmsNavM">
            <div className="container-fluid">
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={'/cms/dashboard'} className={({isActive}) => isActive ? "nav-link active" : "nav-link" } aria-current="page">
                                Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/cms/add'} className={({isActive}) => isActive ? "nav-link active" : "nav-link" } aria-current="page">
                            Add Item
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-danger w-100" onClick={logout}>Logout</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}