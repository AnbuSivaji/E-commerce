import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ForgetPassOtpVerification = () => {
  const location = useLocation();
  const userResponse = location.state;

  const navigate = useNavigate();

  const [user, setUser] = useState(userResponse);
  const [otp, setOtp] = useState("");

  const otpVerify = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/user/verify/forget", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        otp: otp,
      }),
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
              navigate("/user/login");
            }, 2000); // Redirect after 3 seconds
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
            }, 2000); // Redirect after 3 seconds
          } else {
            toast.error("It Seems Server is down!!!", {
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
            }, 2000); // Redirect after 3 seconds
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

  return (
    <div>
      <div class="mt-2 d-flex aligns-items-center justify-content-center">
        <div class="card form-card border-color" style={{ width: "25rem" }}>
          <div className="card-header bg-color custom-bg-text">
            <h5 class="card-title text-center">
              Forget Password - OTP Verfication
            </h5>
          </div>
          <div class="card-body text-color custom-bg">
            <form onSubmit={otpVerify}>
              <div class="mb-3">
                <label for="name" class="form-label">
                  <b>OTP</b>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="otp"
                  name="otp"
                  onChange={(e) => setOtp(e.target.value)}
                  value={otp}
                  required
                />
              </div>

              <input
                type="submit"
                class="btn custom-bg-text bg-color"
                value="Verify"
              />

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassOtpVerification;
