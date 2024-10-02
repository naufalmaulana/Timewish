import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleLogin } from '@react-oauth/google';
import "../assets/css/styles-auth.css";

export default function Login() {

    const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  async function handleLoginForm(event) {
    event.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "https://api.h8-fern.foxhub.space/login",
        data: input,
      });

    //   console.log(response);
    localStorage.token = response.data.access_token;
    localStorage.email = response.data.email;
    localStorage.role = response.data.role;
    localStorage.username = response.data.username;
      toast.success("Login success");
      if (response.data.role === "user") {
        navigate("/");
        console.log('user');
        
      } else if (response.data.role === "seller") {
        navigate("/cms/dashboard");
        console.log('seller');
        
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCredentialResponse(response) {
    // console.log("Encoded JWT ID token: " + response.credential);
    // localStorage.setItem("token", response.credential);
    try {
      const res = await axios({
        method: "post",
        url: "https://api.h8-fern.foxhub.space/google-login",
        data: {
          googleToken: response.credential,
          // googleToken: response.access_token,
          googleClientId:
            "877762640236-fin5ahtfbh33jvctfsk813ssqd54pdub.apps.googleusercontent.com",
        },
      });
      localStorage.token = res.data.access_token;
      localStorage.email = res.data.email;
      localStorage.role = res.data.role;
      localStorage.username = res.data.username;
      toast.success("Login success");
      navigate("/cms/dashboard");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  //? CARA PERTAMA
  // window.onload = function () {
  //   google.accounts.id.initialize({
  //     client_id: "877762640236-fin5ahtfbh33jvctfsk813ssqd54pdub.apps.googleusercontent.com",
  //     callback: handleCredentialResponse
  //   });
  //   google.accounts.id.renderButton(
  //     document.getElementById("buttonDiv"),
  //     { theme: "outline", size: "large" }  
  //   );
  //   google.accounts.id.prompt(); 
  // }

  return (
    <>
      <div className="auth">
        <div className="authContainer container-lg vh-100 center-flex">
          <div className="authContainerCard center-flex bg-white">
            <div className="authContainerCardImage">
                <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                    >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1668414310227-67e62a8b4087?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="image" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1691727762360-d5332e9f9dc7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="image" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1696774690902-6e2057307e20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="image" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1657900791906-4b7e8bfcb0d7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="image" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1677445166019-4fa91a090e49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="authContainerCardForm p-5">
              <h1 className="authContainerCardFormTitle mt-0 mb-5 fw-bold">
                LOGIN
              </h1>

              <form onSubmit={handleLoginForm} action="">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    onChange={handleChangeInput}
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={handleChangeInput}
                    name="password"
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <button type="submit" className="btn px-4">
                  Submit
                </button>
                <p className="py-2 m-0 fw-bold">
                  OR
                </p>
                {/* <div id="buttonDiv"></div> */}

                {/* CARA KEDUA */}
                <GoogleLogin
                  onSuccess={handleCredentialResponse}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
                <p className='py-2'>
                    Don't have an account?      
                    <Link to={'/auth/register'} className='text-primary' style={{marginLeft: "5px"}}>
                        Sign Up
                    </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
