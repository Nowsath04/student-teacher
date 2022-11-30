import { useFormik } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "./Login_Context";

function Login() {
  const {useremail,setUserEmail} = useContext(LoginContext)

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setUserEmail({email:values.email})
      navigate("/portal/welcome");
    },
  });
  return (
    <div className="bg-dark">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-6">
                  <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header">
                      <h3 class="text-center font-weight-light my-3">Login</h3>
                    </div>
                    <div class="card-body">
                      <form onSubmit={formik.handleSubmit}>
                        <div class="form-floating mb-3">
                          <input
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            class="form-control"
                            id="inputEmail"
                            type="email"
                            placeholder="name@example.com"
                          />
                          <label for="inputEmail">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            class="form-control"
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                          />
                          <label for="inputPassword">Password</label>
                        </div>
                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            id="inputRememberPassword"
                            type="checkbox"
                            value=""
                          />
                          <label
                            class="form-check-label"
                            for="inputRememberPassword"
                          >
                            Remember Password
                          </label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a class="small" href="password.html">
                            Forgot Password?
                          </a>
                          <button class="btn btn-primary" type="submit">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer text-center py-3">
                      <div class="small">
                        <a href="register.html">Need an account? Sign up!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;