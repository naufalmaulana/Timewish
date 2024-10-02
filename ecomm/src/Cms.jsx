import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Outlet } from "react-router-dom"
import { fetchDataSuccess, fetchLoading, fetchProduct } from "./store/appSlice";
import Sidebar from "./components/Sidebar"
import NavbarMobile from "./components/NavbarMobile";
import "./assets/css/styles-cms.css";

function Cms() {
  const dispatch = useDispatch();

  async function fetchData() {
    dispatch(fetchProduct())
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavbarMobile/>
      <div className="container-fluid px-0">
        <div className="row justify-content-center mx-0">
          <Sidebar/>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Cms
