import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { fetchCust } from "../store/custSlice";
import { ArrowDown10, ArrowUp01 } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.custSlice);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true);

  useEffect(() => {
    dispatch(fetchCust({ page, search, sort }));
  }, [page, search, sort]);

  return (
    <>
      <div className="home">
        <div className="homeHero py-5 px-3 px-lg-0">
          <div className="homeHeroItem">
            <div className="homeHeroItemContainer">
              <div className="homeHeroItemContainerImage">
                <img
                  src="https://prideandpinion.com/cdn/shop/files/Audemars_Piguet_Royal_Oak_Music_Edition_1_1.png"
                  alt="image"
                  className="rounded img-fluid object-cover object-center w-100"
                  width={"850"}
                  height={"45"}
                />
              </div>
            </div>
          </div>
          <div className="homeHeroItem">
            <div className="homeHeroItemContainer">
              <div className="homeHeroItemContainerImage">
                <img
                  src="https://prideandpinion.com/cdn/shop/files/Patek_Philippe_Complications_5.png"
                  alt="image"
                  className="rounded img-fluid object-cover object-center w-100"
                  width={"850"}
                  height={"45"}
                />
              </div>
            </div>
          </div>
          <div className="homeHeroItem">
            <div className="homeHeroItemContainer">
              <div className="homeHeroItemContainerImage">
                <img
                  src="https://prideandpinion.com/cdn/shop/files/Rolex_Daytona_3.png"
                  alt="image"
                  className="rounded img-fluid object-cover object-center w-100"
                  width={"850"}
                  height={"45"}
                />
              </div>
            </div>
          </div>
          <div className="homeHeroItem">
            <div className="homeHeroItemContainer">
              <div className="homeHeroItemContainerImage">
                <img
                  src="https://prideandpinion.com/cdn/shop/files/Richard_Mille_2.png"
                  alt="image"
                  className="rounded img-fluid object-cover object-center w-100"
                  width={"850"}
                  height={"45"}
                />
              </div>
            </div>
          </div>
          <div className="homeHeroItem">
            <div className="homeHeroItemContainer">
              <div className="homeHeroItemContainerImage">
                <img
                  src="https://teddybaldassarre.com/cdn/shop/files/Untitled-10_14_2000x.jpg"
                  alt="image"
                  className="rounded img-fluid object-cover object-center w-100"
                  width={"850"}
                  height={"45"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="homeList container-lg">
          <h1 className="homeListTitle fs-32 fw-bold text-black-main text-center mt-0 mb-0">
            Shop Watches
          </h1>
          <p className="homeListSubtitle fs-16 text-grey text-center mt-0 mb-3">
            Best watches on the market
          </p>
          <div className="homeListControl d-flex justify-content-center justify-content-lg-end align-items-center flex-wrap gap-4">
            <div className="homeListControlFilter">
              <select
                name="Search"
                id="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                defaultValue={""}
              >
                <option value="">All Brand</option>
                <option value="A. Lange & Söhne">A. Lange & Söhne</option>
                <option value="Audemars Piguet">Audemars Piguet</option>
                <option value="Blancpain">Blancpain</option>
                <option value="Cartier">Cartier</option>
                <option value="IWC">IWC</option>
                <option value="Jaeger-LeCoultre">Jaeger-LeCoultre</option>
                <option value="Omega">Omega</option>
                <option value="Panerai">Panerai</option>
                <option value="Patek Philippe">Patek Philippe</option>
                <option value="Rolex">Rolex</option>
                <option value="Seiko">Seiko</option>
                <option value="Sinn">Sinn</option>
                <option value="TAG Heuer">TAG Heuer</option>
                <option value="Tudor">Tudor</option>
                <option value="Zenith">Zenith</option>
              </select>
            </div>
            <button
              className="homeListControlSort"
              name="sort"
              id="sort"
              onClick={() => {
                setSort(!sort);
              }}
            >
              {sort && <ArrowDown10 />}
              {!sort && <ArrowUp01 />}
            </button>
            <div className="homeListControlPagination center-flex gap-2">
              <button
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
                className="homeListControlPaginationBtn left fs-18"
              >
                &lt;
              </button>
              <p className="homeListControlPaginationLabel text-uppercase fw-medium text-grey fs-18 m-0">
                page: {page}
              </p>
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
                className="homeListControlPaginationBtn right fs-18"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 py-4 g-4">
            {products.length === 0 && (
              <div className="m-auto py-3 text-center">
                <img
                  src="/img-nowatch.svg"
                  alt="nowatch"
                  className="img-fluid nowatch"
                />
              </div>
            )}
            {products &&
              products.map((el) => {
                return <ProductCard key={el.id} product={el} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
