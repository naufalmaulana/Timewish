import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/styles-auth.css";

export default function Register(){
    const navigate = useNavigate();

    const [activeForm, setActiveForm] = useState('User');

    const [input, setInput] = useState({
        email: "",
        username: "",
        password: "",
    });

    function handleChangeInput(event) {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    }

    async function handleRegisterUser(event) {
        event.preventDefault();
        try {
        const response = await axios({
            method: "post",
            url: "https://api.h8-fern.foxhub.space/register",
            data: input,
        });

        console.log(response + 'user');
        navigate("/auth/login");
        } catch (error) {
        console.log(error);
        }
    }
    async function handleRegisterSeller(event) {
        event.preventDefault();
        try {
        const response = await axios({
            method: "post",
            url: "https://api.h8-fern.foxhub.space/seller/register",
            data: input,
        });

        console.log(response + 'seller');
        navigate("/auth/login");
        } catch (error) {
        console.log(error);
        }
    }

    const handleSwitch = (form) => {
      setActiveForm(form);
    };

    return(
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
                  REGISTER
                </h1>
                <div className="authContainerCardFormSwitch center-flex mb-3">
                  <button id="userSwitch" className={`authContainerCardFormSwitchItem ${activeForm === 'User' ? 'active' : ''}`} onClick={() => handleSwitch('User')}>
                    User
                  </button>
                  <button id="sellerSwitch" className={`authContainerCardFormSwitchItem ${activeForm === 'Seller' ? 'active' : ''}`} onClick={() => handleSwitch('Seller')}>
                    Seller
                  </button>
                </div>
                <form onSubmit={activeForm === 'User' ? handleRegisterUser : handleRegisterSeller}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                        name="username"
                      id="username"
                      aria-describedby="userName"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                        name="email"
                      id="email"
                      aria-describedby="emailHelp"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                        name="password"
                      id="password"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <button type="submit" className="btn px-4">
                    Submit
                  </button>
                  <p className='py-2'>
                        Already have an account?      
                        <Link to={'/auth/login'} className='text-primary' style={{marginLeft: "5px"}}>
                            Sign In
                        </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}