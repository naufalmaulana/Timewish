import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { useEffect } from "react";
import { fetchCart } from "../store/custSlice";

export default function Cart() {
  const { cart, loading } = useSelector((state) => state.custSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  if (loading) {
    return (
      <>
        <div className="main text-center center-flex vh-100 vw-100">
          <div className="clockLoader"></div>
        </div>
      </>
    );
  }

  // console.log(cart.length);
  
  if (cart && cart.length === 0) {
    return (
      <>
        <div className="main text-center center-flex vh-100 vw-100">
          <h1 className="text-black-main fs-24 fw-bold text-uppercase">
            No Item
          </h1>
        </div>
      </>
    );
  }

  const totalPrice = cart.reduce((sum, item) => {
    return sum + (item?.Product?.price*item?.quantity || 0);
  }, 0);


  // const totalAmount = totalPrice * totalQty;
  // console.log(totalPrice);
  

  return (
    <>
      <div className="cart container-lg py-5">
        <h1 className="cartTitle fs-32 fw-bold text-black-main text-capitalize text-center mt-0 mb-3">
          shopping cart
        </h1>
        <div className="row justify-content-center flex-column-reverse flex-lg-row g-4">
          <div className="col-lg-6">
            {cart &&
              cart.map((el, i) => {
                return <CartCard key={i} item={el} />;
              })}
          </div>
          <div className="col-lg-4">
            <div className="cartSummary bg-black-main p-3">
              <p className="cartSummaryTitle fs-16 fw-bold text-capitalize text-white mt-0 mb-3">
                summary
              </p>
              <hr />
              <div className="cartSummaryTotal d-flex justify-content-between align-items-center g-2">
                <p className="cartSummaryTotalLabel text-white fs-14 m-0">
                  Total
                </p>
                <p className="cartSummaryTotalPrice text-white fs-16 m-0 fw-semibold">
                  Rp  {totalPrice.toLocaleString()}
                </p>
              </div>
              <hr />
              <a href="https://prideandpinion.com/" target="_blank" className="cartSummaryCheckout fs-16 fw-bold text-capitalize text-center px-3 py-2 d-block border-light-grey w-100">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
