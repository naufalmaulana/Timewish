import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Sidebar(){
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        toast.success("Account has logged out");
        navigate("/auth/login");
    }
    return(
        <>
            <div className="sidebar">
                <svg className="mb-3" width="170" height="27" viewBox="0 0 170 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.24 0.799998H0.44V5.768H7.856V26H12.824V5.768H20.24V0.799998ZM23.6558 26H28.6238V0.799998H23.6558V26ZM32.7669 26H37.8249L40.6329 11.546L45.9969 25.748H49.4169L54.7989 11.546L57.5889 26H62.6649L57.7689 0.799998H53.5749L47.7069 16.226L41.8569 0.799998H37.6629L32.7669 26ZM65.5508 26H81.4988V21.032H70.5188V14.984H79.0868V10.016H70.5188V5.768H81.4988V0.799998H65.5508V26ZM90.7395 26H96.3555L99.9195 11.996L103.502 26H109.118L115.526 0.799998H110.396L106.292 16.91L102.188 0.799998H97.6335L93.5295 16.91L89.4255 0.799998H84.2955L90.7395 26ZM118.616 26H123.584V0.799998H118.616V26ZM136.889 26.468C141.983 26.468 146.375 23.354 146.375 18.692C146.375 14.102 142.019 11.69 136.889 10.916C134.405 10.538 132.353 10.25 132.353 8.126C132.353 6.506 134.585 5.318 136.889 5.354C139.319 5.354 141.299 6.434 141.731 7.658L146.393 5.966C145.133 2.438 141.083 0.349999 136.889 0.349999C131.849 0.349999 127.385 3.464 127.385 8.126C127.385 13.004 131.453 15.092 136.889 15.884C139.085 16.226 141.407 16.982 141.407 18.692C141.407 20.366 139.229 21.5 136.889 21.5C134.441 21.5 132.461 20.384 132.029 19.16L127.367 20.888C128.645 24.362 132.659 26.468 136.889 26.468ZM164.227 0.799998V10.016H154.651V0.799998H149.683V26H154.651V14.984H164.227V26H169.195V0.799998H164.227Z" fill="white"/>
                </svg>
                <h2 className="sidebarLabel">Menu</h2>
                <ul className="sidebarList list-unstyled">
                    <li className="sidebarListItem">
                        <NavLink to={'/cms/dashboard'} className={({isActive}) => isActive ? "sidebarListItemLink active" : "sidebarListItemLink" }>
                            Home
                        </NavLink>
                    </li>
                    <li className="sidebarListItem">
                        <NavLink to={'/cms/add'} className={({isActive}) => isActive ? "sidebarListItemLink active" : "sidebarListItemLink" }>
                            Add Item
                        </NavLink>
                    </li>
                    <li className="sidebarListItem mt-5">
                        <button className="btn btn-danger w-100" onClick={logout}>Logout</button>
                    </li>
                </ul>
            </div>
        </>
    )
}