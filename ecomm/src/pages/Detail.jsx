import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { fetchCust, fetchProductDetailCust } from "../store/custSlice";
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  padding: 50px;
  border: 2px solid #e7e7e7;
  border-radius: 15px;
  text-align: center;
  width: fit-content;
  margin: auto;
  background: #070606;
  cursor: crosshair;
  :hover {
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.55), 0 14px 18px rgba(0, 0, 0, 0.55);
  }
`;
const Image = styled.img.attrs((props) => ({
  src: props.source,
}))``;

const Target = styled(Image)`
  position: absolute;
  left: ${(props) => props.offset.left}px;
  top: ${(props) => props.offset.top}px;
  opacity: ${(props) => props.opacity};
  width: 750px;
  height: 915px;
  background: #070606;
`;

export default function Detail() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true);
  const [read, setRead] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    productDetail: item,
    products,
    loading,
  } = useSelector((state) => state.custSlice);
  const dispatch = useDispatch();

  const format = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const handleCart = async () => {
    try {
      const response = await axios({
        method: "post",
        url: `https://api.h8-fern.foxhub.space/carts/${item.id}`,
        data: {
          quantity: count,
        },
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      toast.success("Item Successfuly Added");
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 401) {
        navigate("/auth/login");
      }
    }
  };

  useEffect(() => {
    dispatch(fetchProductDetailCust(id));
    dispatch(fetchCust({ page, search, sort }));
  }, [id, page, search, sort]);

  const sourceRef = useRef(null);
  const targetRef = useRef(null);
  const containerRef = useRef(null);

  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseMove = (e) => {
    const targetRect = targetRef.current.getBoundingClientRect();
    const sourceRect = sourceRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
    const yRatio =
      (targetRect.height - containerRect.height) / sourceRect.height;

    const left = Math.max(
      Math.min(e.pageX - sourceRect.left, sourceRect.width),
      0
    );
    const top = Math.max(
      Math.min(e.pageY - sourceRect.top, sourceRect.height),
      0
    );

    setOffset({
      left: left * -xRatio,
      top: top * -yRatio,
    });
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
      <div className="detail container-lg py-5">
        <div className="row row-cols-1 row-cols-lg-2 justify-content-center align-items-center pb-lg-5 g-4">
          <div className="col">
            <Container
              ref={containerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <Image
                ref={sourceRef}
                alt={item?.name}
                source={item?.imgUrl}
                className="img-fluid"
              />
              <Target
                ref={targetRef}
                alt="target"
                opacity={opacity}
                offset={offset}
                source={item?.imgUrl}
              />
            </Container>
          </div>
          <div className="col">
            <h1 className="detailTitle fw-bold fs-40 m-0">{item?.name}</h1>
            <small className="detailStock mb-3 d-block">
              <b>Stock:</b> {item?.stock}pcs
            </small>
            <h2 className="detailPrice fs-32 fw-semibold">
              {format(item?.price)}
            </h2>
            <div className="detailDescription">
              <div className="detailDescriptionContent mt-3">
                <p className="m-0 fs-16 text-grey">{item?.description}</p>
              </div>
              <button
                onClick={() => {
                  document
                    .querySelector(".detailDescription")
                    .classList.toggle("show");

                  setRead(!read);
                }}
                className="detailDescriptionButton bg-transparent border-0 text-capitalize fs-16 fw-medium text-black-main"
              >
                {read === true ? "Read Less" : "Read More"} <ChevronDown />
              </button>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 mt-1">
              <div className="detailAmount d-flex align-items-center gap-1">
                <button
                  onClick={() => {
                    if (count > 0) {
                      setCount(count - 1);
                    }
                  }}
                  className="detailAmountButton fw-bold fs-16 px-3 py-2 border-black-main"
                >
                  -
                </button>
                <input
                  type="number"
                  placeholder="Input price"
                  value={count}
                  className="detailAmountInput fs-16 py-2 border-black-main text-center"
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="detailAmountButton fw-bold fs-16 px-3 py-2 border-black-main"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleCart}
                disabled={count === 0}
                className="detailCart fs-16 fw-bold text-capitalize px-3 py-2 border-black-main flex-grow-1 w-100"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <h2 className="detailMore pt-5 mb-3 fs-32 fw-bold text-black-main text-center text-capitalize">
          other watches
        </h2>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
          {products &&
            products.slice(-4).map((el) => {
              return <ProductCard key={el.id} product={el} />;
            })}
        </div>
      </div>
    </>
  );
}
