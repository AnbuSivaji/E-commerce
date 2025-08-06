import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  let navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("active-user"));
  const [totatPrice, setTotalPrice] = useState("");
  const [myCartData, setMyCartData] = useState([]);

  useEffect(() => {
    const getMyCart = async () => {
      const myCart = await retrieveMyCart();
      if (myCart) {
        setTotalPrice(myCart.totalCartPrice);
        setMyCartData(myCart.cartData);
      }
    };

    getMyCart();
  }, []);

  const retrieveMyCart = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/mycart?userId=" + user.id
    );
    console.log(response.data);
    return response.data;
  };

  const deleteProductFromCart = (cartId, e) => {
    fetch("http://localhost:8080/api/user/mycart/remove?cartId=" + cartId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //    Authorization: "Bearer " + restaurant_jwtToken,
      },
    })
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          } else if (!res.success) {
            toast.error(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 1000); // Redirect after 3 seconds
      });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script from the DOM when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  const checkout = (e) => {
    fetch("http://localhost:8080/api/user/order/create?userId=" + user.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
            console.log("Success Response");
            var options = res.razorPayRequest;
            console.log(options);

            // Add the handler function to the responseData object
            options.handler = function (response) {
              console.log(response.razorpay_payment_id);
              console.log(response.razorpay_order_id);
              console.log(response.razorpay_signature);
              response.razorpay_order_id = options.orderId;

              fetch("http://localhost:8080/api/user/razorpPay/response", {
                method: "PUT",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(response),
              })
                .then((result) => {
                  result.json().then((res) => {
                    if (res.success) {
                      toast.success(res.responseMessage, {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });

                      setTimeout(() => {
                        navigate("/user/myorder");
                      }, 1000);
                    } else if (!res.success) {
                      toast.error(res.responseMessage, {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });

                      setTimeout(() => {
                        window.location.reload(true);
                      }, 1000); // Redirect after 3 seconds
                    } else {
                      toast.error("It seems server is down", {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });

                      setTimeout(() => {
                        window.location.reload(true);
                      }, 1000); // Redirect after 3 seconds
                    }
                  });
                })
                .catch((error) => {
                  console.error(error);
                  toast.error("It seems server is down", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  setTimeout(() => {
                    window.location.reload(true);
                  }, 1000); // Redirect after 3 seconds
                });
            };
            console.log("final json after adding handler function");
            console.log(options);

            // Check if Razorpay is available in the window object
            if (window.Razorpay) {
              console.log("Rzaorpay is defined");
              const rzp1 = new window.Razorpay(options);
              rzp1.on("payment.failed", function (response) {
                console.log(response.error.code);
                console.log(response.error.description);
                console.log(response.error.source);
                console.log(response.error.step);
                console.log(response.error.reason);
                console.log(response.error.metadata.order_id);
                console.log(response.error.metadata.payment_id);

                response.razorpay_order_id = options.orderId;

                fetch("http://localhost:8080/api/user/razorpPay/response", {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(response),
                })
                  .then((result) => {
                    result.json().then((res) => {
                      if (res.success) {
                        toast.success(res.responseMessage, {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });

                        setTimeout(() => {
                          window.location.reload(true);
                        }, 1000);
                      } else if (!res.success) {
                        toast.error(res.responseMessage, {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });

                        setTimeout(() => {
                          window.location.reload(true);
                        }, 1000); // Redirect after 3 seconds
                      } else {
                        toast.error("It seems server is down", {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });

                        setTimeout(() => {
                          window.location.reload(true);
                        }, 1000); // Redirect after 3 seconds
                      }
                    });
                  })
                  .catch((error) => {
                    console.error(error);
                    toast.error("It seems server is down", {
                      position: "top-center",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                    setTimeout(() => {
                      window.location.reload(true);
                    }, 1000); // Redirect after 3 seconds
                  });
              });
              rzp1.open();
            } else {
              toast.error("Payment Gateway Internal Server Issue", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTimeout(() => {
                window.location.reload(true);
              }, 1000); // Redirect after 3 seconds
            }
          } else if (!res.success) {
            toast.error(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 1000); // Redirect after 3 seconds
      });
    e.preventDefault();
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color"
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header text-center bg-color custom-bg-text">
          <h2>My Cart</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover custom-bg-text text-center">
              <thead className="bg-color table-bordered border-color">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="text-color">
                {myCartData.map((cartData) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={
                            "http://localhost:8080/api/product/" +
                            cartData.productImage
                          }
                          class="img-fluid"
                          alt="product_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        <b>{cartData.productName}</b>
                      </td>
                      <td>
                        <b>{cartData.productDescription}</b>
                      </td>
                      <td>
                        <b>{cartData.quantity}</b>
                      </td>
                      <td>
                        <button
                          className="btn bg-color custom-bg-text btn-sm"
                          onClick={() => deleteProductFromCart(cartData.cartId)}
                        >
                          Delete
                        </button>
                        <ToastContainer />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer custom-bg">
          <div className="float-right">
            {(() => {
              if (myCartData.length > 0) {
                return (
                  <div>
                    <div
                      className="text-color me-2"
                      style={{
                        textAlign: "right",
                      }}
                    >
                      <h5>Total Price: &#8377; {totatPrice}/-</h5>
                    </div>

                    <div className="float-end me-2">
                      <button
                        type="submit"
                        className="btn bg-color custom-bg-text mb-3"
                        onClick={checkout}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                );
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
