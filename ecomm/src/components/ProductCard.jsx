import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.custSlice);

  const format = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  if (loading) {
    return (
      <>
        <div className="main text-center center-flex vh-100 vw-100">
          <div className="clockLoader"></div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="col px-0">
        <div
          className="homeListCard p-3 m-auto c-pointer"
          onClick={() => {
            navigate(`/main/detail/${product.id}`);
          }}
        >
          <div className="homeListCardTop">
            <div className="homeListCardTopImage">
              <img
                src={product?.imgUrl}
                alt={product?.name}
                className="img-fluid"
              />
            </div>
            <p className="homeListCardTopTitle fs-18 text-center text-black-main fw-semibold m-0">
              {product?.name}
            </p>
            <p className="homeListCardTopPrice text-center text-grey fs-16 fw-medium m-0">
              {/* {product?.price} */}
              {format(product?.price)}
            </p>
          </div>
          <div className="homeListCardBottom">
            <button
              className="homeListCardBottomButton text-capitalize p-2 w-100"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              see details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
