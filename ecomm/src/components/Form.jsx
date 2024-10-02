import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLoading, fetchProduct } from "../store/appSlice";
import { toast } from "react-toastify";

export default function Form({product}){
    const {loading} = useSelector((state) => state.appSlice)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        categoryId: "3",
    });

    const [image, setImage] = useState(null);

    useEffect(() => {
        if (product) {
          setInput({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            categoryId: product.categoryId,
          });
        } else {
          setInput({
            name: "",
            description: "",
            price: "",
            stock: "",
            categoryId: "3",
          });
        }
      }, [product]);

    function handleChangeInput(event) {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    }

    function handleChangeImage(event) {
        const image = event.target.files[0];
        // console.log(image);
    
        setImage(image);
      }
    
    async function handleFormSubmit(event) {
        event.preventDefault();

        // console.log(input, image);
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("price", input.price);
        formData.append("stock", input.stock);
        formData.append("categoryId", input.categoryId);
        formData.append("image", image);
        

        try {
            let config = {
                method: "post",
                url: "https://api.h8-fern.foxhub.space/products",
                data: formData,
                params: {
                    cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
                    api_key: import.meta.env.VITE_CLUDINARY_API_KEY,
                    api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
                },
                headers: {
                  Authorization: `Bearer ${localStorage.token}`,
                  "Content-Type": "multipart/form-data",
                },
            }

            // console.log(config);
            

            if (product) {
                // jika ada product maka lagi edit
                config.method = "put";
                config.url += `/${product.id}`;
            }

            dispatch(fetchLoading(true))
           await axios(config);
            // console.log(response);
            navigate("/cms/dashboard")
            dispatch(fetchProduct())
            
        } catch (error) {
            // console.log(error);
            toast.error(error?.response?.data?.message ?? "error");
        } finally {
            dispatch(fetchLoading(false))
        }
    }

    if (loading) {
        return (
          <>
            <div className="text-center center-flex w-100">
                <div className="clockLoader"></div>
            </div>
          </>
        );
    }

   return(
    <>
        <form onSubmit={handleFormSubmit} className="form">
            <div className="formItem">
                <label htmlFor="name" className="form-label text-capitalize">
                    Name
                </label>
                <input
                    onChange={handleChangeInput}
                    value={input.name}
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="input name"
                />
            </div>
            <div className="formItem mt-3">
                <label htmlFor="description" className="form-label text-capitalize">
                    Description
                </label>
                <input
                    onChange={handleChangeInput}
                    value={input.description}
                    type="text"
                    id="description"
                    name="description"
                    className="form-control"
                    placeholder="input description"
                />
            </div>
            <div className="formItem mt-3">
                <label htmlFor="price" className="form-label text-capitalize">
                    price
                </label>
                <input
                    onChange={handleChangeInput}
                    value={input.price}
                    type="number"
                    id="price"
                    name="price"
                    className="form-control"
                    placeholder="input price"
                />
            </div>
            <div className="formItem mt-3">
                <label htmlFor="stock" className="form-label text-capitalize">
                    stock
                </label>
                <input
                    onChange={handleChangeInput}
                    value={input.stock}
                    type="number"
                    id="stock"
                    name="stock"
                    className="form-control"
                    placeholder="input stock"
                />
            </div>
            <div className="formItem mt-3">
                <label htmlFor="image" className="form-label text-capitalize">
                    image
                </label>
                <input
                    onChange={handleChangeImage}
                    type="file"
                    id="image"
                    name="image"
                    className="form-control"
                    placeholder="input image"
                />
                {image ? (
                    <div className="rounded-lg w-fit-content p-2">
                        <img src={URL.createObjectURL(image)} alt="" className="img-fluid"/>
                    </div>
                ) : (
                    product && (
                        <div className="rounded-lg w-fit-content p-2">
                        <img src={product.imgUrl} alt="" className="img-fluid"/>
                        </div>
                    )
                )}
            </div>
            <button
                type="submit"
                className="formButton btn px-4 py-2 mt-5"
            >
                Submit
            </button>
        </form>
    </>
   )
}