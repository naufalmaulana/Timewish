import axios from "axios";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { fetchCart, fetchProductCart } from "../store/custSlice";
import { useNavigate } from "react-router-dom";

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const format = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const deleteCart = async (id) => {
    try {
      const response = axios({
        method: "delete",
        url: `https://api.h8-fern.foxhub.space/carts/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      dispatch(fetchProductCart([]));
      // location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cartCard d-flex align-items-center gap-4 w-100 border-black-main rounded-2 mb-3 position-relative">
      <div className="cartCardImage bg-black-main">
        <img
          src={item?.Product?.imgUrl}
          alt={item?.Product?.name}
          className="img-fluid"
        />
      </div>
      <div className="cartCardContent d-flex flex-column justify-content-between">
        <div className="cartCardContentBody mb-4">
          <h2 className="cartContentBodyName fs-18 fs-lg-24 text-black-main fw-semibold text-capitalize mt-0 mb-2">
            {item?.Product?.name}
          </h2>
          <p className="cartContentBodyPrice fs-16 fs-lg-20 fw-bold text-grey m-0">
            {format(item?.Product?.price)}
          </p>
        </div>
        <div className="cartCardContentFooter">
          <p className="cartCardContentFooterAmount fs-14 fs-lg-16 text-black-main m-0">
            Total Amount: <span className="fw-bold">{item.quantity}</span>
          </p>
        </div>
        <button
          onClick={() => {
            deleteCart(item?.id);
          }}
          className="cartCardDelete bg-transparent border-0"
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
