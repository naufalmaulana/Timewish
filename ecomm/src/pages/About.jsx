import { PackageCheck, ShieldCheck, Truck, UserRound } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar").classList.remove("unscrolled");
    } else {
      document.getElementById("navbar").classList.add("unscrolled");
    }
  });

  function removeSpacerPadding() {
    document.getElementById("spacer").classList.remove("pt-5");
  }

  useEffect(() => {
    removeSpacerPadding();
  }, []);

  return (
    <>
      <style>
        {`
            .unscrolled{
              background: transparent ;    
            }
          `}
      </style>
      <div className="about">
        <div className="aboutHero position-relative">
          <video autoPlay loop muted>
            <source
              src="https://cdn.shopify.com/videos/c/o/v/0f63950bcdea4bc3856db433bab1a855.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="aboutHeroContent p-5">
            <p className="fs-16 text-light-grey text-uppercase mt-0 mb-2">
              timewish
            </p>
            <h1 className="aboutHeroContentTitle fs-40 text-light-grey fw-bold text-capitalize mt-0 mb-4">
              Connecting You With Your Next Watch
            </h1>
            <Link
              to={"/"}
              className="aboutHeroContentButton fs-16 fw-bold text-capitalize text-center px-3 py-2 d-block border-light-grey text-light-grey w-fit-content"
            >
              shop watches
            </Link>
          </div>
        </div>
        <div className="aboutBenefits container-fluid p-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center g-4">
            <div className="aboutBenefitsItem col">
              <ShieldCheck />
              <h3 className="aboutBenefitsItemTitle fs-20 text-black-main fw-semibold text-capitalize my-3">
                Authorized Retailer
              </h3>
              <p className="aboutBenefitsItemDesc fs-16 text-grey fw-medium m-0">
                Official Authorized Dealer of over 40+ leading luxury brands.
              </p>
            </div>
            <div className="aboutBenefitsItem col">
              <UserRound />
              <h3 className="aboutBenefitsItemTitle fs-20 text-black-main fw-semibold text-capitalize my-3">
                Customer Support
              </h3>
              <p className="aboutBenefitsItemDesc fs-16 text-grey fw-medium m-0">
                Dedicated customer service staff ready to resolve any purchase
                or product issues.
              </p>
            </div>
            <div className="aboutBenefitsItem col">
              <Truck />
              <h3 className="aboutBenefitsItemTitle fs-20 text-black-main fw-semibold text-capitalize my-3">
                Shipping + Returns
              </h3>
              <p className="aboutBenefitsItemDesc fs-16 text-grey fw-medium m-0">
                Swift delivery and flexible return window of seven days.
              </p>
            </div>
            <div className="aboutBenefitsItem col">
              <PackageCheck />
              <h3 className="aboutBenefitsItemTitle fs-20 text-black-main fw-semibold text-capitalize my-3">
                Curated Collection
              </h3>
              <p className="aboutBenefitsItemDesc fs-16 text-grey fw-medium m-0">
                We work with leading luxury brands to provide the best selection
                for discerning collectors.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutInfo bg-black-main d-flex flex-column-reverse flex-lg-row">
          <div className="aboutInfoItem left center-flex">
            <div className="wrap">
              <h2 className="aboutInfoItemText fs-32 fs-lg-40 text-center text-white p-3 p-lg-5 mt-0 mb-3">
                Your destination to learn watches, connect with enthusiasts, and
                buy your next watch.
              </h2>
              <ul className="aboutInfoItemPoint list-unstyled p-0 center-flex gap-4">
                <li>
                  <h3 className="fs-22 text-white fw-bold text-center mt-0 mb-2">
                    1.5M+
                  </h3>
                  <p className="fs-12 fw-medium text-center m-0">
                    Social Media Followers
                  </p>
                </li>
                <li>
                  <h3 className="fs-22 text-white fw-bold text-center mt-0 mb-2">
                    40+
                  </h3>
                  <p className="fs-12 fw-medium text-center m-0">
                    Authorized Brands
                  </p>
                </li>
                <li>
                  <h3 className="fs-22 text-white fw-bold text-center mt-0 mb-2">
                    35,000+
                  </h3>
                  <p className="fs-12 fw-medium text-center m-0">
                    Customers Served Globally
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="aboutInfoItem right center-flex">
            <div className="aboutInfoItemLogo fs-24 fw-bold text-uppercase text-white">
              timewish
            </div>
          </div>
        </div>
        <div className="aboutPromo py-5 bg-white">
          <div className="container-lg">
            <div className="row row-cols-1 row-cols-lg-3 align-items-center justify-content-center g-4">
              <div className="col">
                <Link
                  to={"/"}
                  className="aboutPromoItem d-block position-relative"
                >
                  <img
                    src="https://teddybaldassarre.com/cdn/shop/files/Untitled-8_52cfc972-e3bb-4aa8-a337-3810b1572234_800x.jpg?v=1700836303"
                    alt="img"
                  />
                  <div className="aboutPromoItemMasking"></div>
                  <div className="aboutPromoItemContent d-flex flex-column justify-content-end">
                    <p className="aboutPromoItemContentLabel fs-16 text-center text-uppercase text-white mt-0 mb-1">
                      just landed
                    </p>
                    <p className="aboutPromoItemContentProduct text-white fs-20 text-center mt-0 mb-2">
                      NOMOS Glashütte
                    </p>
                    <p className="aboutPromoItemContentLink text-white fs-14 text-center text-decoration-underline text-uppercase m-0">
                      shop now
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link
                  to={"/"}
                  className="aboutPromoItem d-block position-relative"
                >
                  <img
                    src="https://teddybaldassarre.com/cdn/shop/files/2_db5721ae-092b-4dd4-8d34-4f49c59d8bc4_800x.png?v=1681400063"
                    alt="img"
                  />
                  <div className="aboutPromoItemMasking"></div>
                  <div className="aboutPromoItemContent d-flex flex-column justify-content-end">
                    <p className="aboutPromoItemContentLabel fs-16 text-center text-uppercase text-white mt-0 mb-1">
                      new stock available
                    </p>
                    <p className="aboutPromoItemContentProduct text-white fs-20 text-center mt-0 mb-2">
                      Marathon
                    </p>
                    <p className="aboutPromoItemContentLink text-white fs-14 text-center text-decoration-underline text-uppercase m-0">
                      shop now
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link
                  to={"/"}
                  className="aboutPromoItem d-block position-relative"
                >
                  <img
                    src="https://teddybaldassarre.com/cdn/shop/files/Untitled-2_4f1016f7-33c0-4cec-b7fa-1f4d839cc757_800x.jpg?v=1687916423"
                    alt="img"
                  />
                  <div className="aboutPromoItemMasking"></div>
                  <div className="aboutPromoItemContent d-flex flex-column justify-content-end">
                    <p className="aboutPromoItemContentLabel fs-16 text-center text-uppercase text-white mt-0 mb-1">
                      store spotlight
                    </p>
                    <p className="aboutPromoItemContentProduct text-white fs-20 text-center mt-0 mb-2">
                      Oris
                    </p>
                    <p className="aboutPromoItemContentLink text-white fs-14 text-center text-decoration-underline text-uppercase m-0">
                      shop now
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
