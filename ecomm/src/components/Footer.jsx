import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer w-100 py-3 bg-black">
        <ul className="footerTop list-unstyled center-flex p-0 gap-3 py-4">
          <li className="footerTopContent">
            <Link to={"/main/about"} className="text-white fs-16 fw-semibold text-capitalize">
              about
            </Link>
          </li>
          <li className="footerTopContent">
            <Link to={"https://wa.me/6281288487450"} target="_blank" className="text-white fs-16 fw-semibold text-capitalize">
              contact us
            </Link>
          </li>
          <li className="footerTopContent">
            <Link to={"/"} className="text-white fs-16 fw-semibold text-capitalize">
              privacy policy
            </Link>
          </li>
        </ul>
        <p className="text-white fs-16 text-center text-capitalize m-0">
           &copy; {(new Date().getFullYear())} TIMEWISH
        </p>
    </footer>
  )
}
