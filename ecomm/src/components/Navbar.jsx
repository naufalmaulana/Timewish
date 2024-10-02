import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    toast.success("Account has logged out");
    navigate("/main/home");
  }
  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg px-3 fixed-top unscrolled">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            TIMEWISH
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto gap-2">
              {localStorage.getItem("token") ? (
                <>
                  <li className="nav-item">
                    <Link
                      to={"/main/cart"}
                      className="btn px-4 py-2 center-flex gap-3"
                    >
                      <ShoppingCart /> <div>Cart</div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn px-4 py-2 w-100" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to={"/auth/login"} className="btn px-4 py-2">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/auth/register"} className="btn px-4 py-2">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
