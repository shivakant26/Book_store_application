import { useForm } from "react-hook-form";
import InputField from "./common/InputField";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="login_section">
        <div className="center_wr">
          <div className="login_page">
            <div className="left_sec">
              <img
                src={require("../assets/images/slider-img.png")}
                alt="about_image"
              />
            </div>
            <div className="right_sec">
              <h3>Login</h3>
              <div className="login_form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form_field">
                    <InputField
                      id="email"
                      type="text"
                      placeholder="Email"
                      register={register("email", {
                        required: "Email is required *",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      error={errors.email}
                    />
                  </div>
                  <div className="form_field">
                    <InputField
                      id="password"
                      type="text"
                      placeholder="Password"
                      register={register("password", {
                        required: "Password is required *",
                      })}
                      error={errors.password}
                    />
                  </div>
                  <div className="form_field">
                    <button className="send_btn" type="submit">
                      Login
                    </button>
                  </div>
                </form>
                <p>If you don't have an account, please <Link to="/register" className="rtk_link"> Register</Link> .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
