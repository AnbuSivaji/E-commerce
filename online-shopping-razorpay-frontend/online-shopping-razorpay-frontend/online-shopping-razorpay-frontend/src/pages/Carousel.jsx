import carousel1 from "../images/carousel_1.png";
//import carousel2 from "../images/carousel_2.png";
// import carousel3 from "../images/carousel_3.png"; 

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="false"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={carousel1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={carousel1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={carousel1} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>

      </button>

      <section className="service-section"><div className="service-card">
                {/* <img src="../images/e_logo.png" alt="Eco Friendly" /> */}
                <i class="fa-regular fa-face-smile"></i>
                <div className="service-details">
                    <h3 className="service-title">Eco-Friendly Shipping</h3>
                    <p className="service-description">Our eco-friendly shipping ensures your orders arrive safely while minimizing harm to the environment. We use recyclable materials and energy-efficient processes to promote a greener future.</p>
                </div>
            </div>
                <div className="service-card">
                    {/* <img src="./assets/images/mini-bar.png" alt="Mini Bar" /> */}
                    <div className="service-details">
                        <h3 className="service-title">Exclusive Deals</h3>
                        <p className="service-description">Unlock exclusive deals and surprise discounts with every order. From limited-time offers to bundled savings, we keep your cart filled with value and delight.</p>
                    </div>
                </div>
                <div className="service-card">
                    {/* <img src="./assets/images/parking.png" alt="Parking" /> */}
                    <div className="service-details">
                        <h3 className="service-title">Fast & Secure Delivery</h3>
                        <p className="service-description">Enjoy fast, secure, and reliable delivery right to your doorstep. With real-time tracking and multiple delivery options, we make receiving your order seamless and stress-free.</p>
                    </div>
                </div>
                <div className="service-card">
                    {/* <img src="./assets/images/wifi.png" alt="WiFi" /> */}
                    <div className="service-details">
                        <h3 className="service-title">24/7 Customer Support</h3>
                        <p className="service-description">Our 24/7 customer support team is always online to help you with order updates, product info, and anything you need-anytime, anywhere.</p>
                    </div>
                </div>


            </section>
    </div>
  );
};

export default Carousel;
