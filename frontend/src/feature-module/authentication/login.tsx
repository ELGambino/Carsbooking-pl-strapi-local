import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Card, Col, Form, Input, message, Row, Spin, Typography, } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
import useScreenSize from "./hooks/useScreenSize";
import { API } from "./constant";
import { setToken } from "./helper";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { all_routes } from "../router/all_routes";

const route = all_routes;

const Login = () => {

const [isToggle, setIsToggle] = useState(false);
const { isDesktopView } = useScreenSize();
const navigate = useNavigate();
const { setUser } = useAuthContext();
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");
const onFinish = async (values) => {
  setIsLoading(true);
  try {
    const value = {
      identifier: values.email,
      password: values.password,
    };
    const response = await fetch(`${API}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    const data = await response.json();
    if (data?.error) {
      throw data?.error;
    } else {
      // set the token
      setToken(data.jwt);

      // set the user
      setUser(data.user);

      message.success(`Welcome back ${data.user.username}!`);

      navigate(`${route.dashboard}`, { replace: true });
    }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <div className="main-wrapper login-body">
      <Link to={route.home}>
        <ImageWithBasePath
          className="img-fluid logo-dark"
          src="assets/img/CarsBooking.webp"
          alt="Logo"
        />
      </Link>
      <Fragment>
          <Row align="middle">
            <Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
              <Card title="Zaloguj się">
                {error ? (
                  <Alert
                    className="alert_error"
                    message={error}
                    type="error"
                    closable
                    afterClose={() => setError("")}
                  />
                ) : null}
                <Form
                  name="basic"
                  layout="vertical"
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <label className="form-label">
                      Adres e-mail <span className="text-danger">*</span>
                  </label>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                      },
                    ]}
                  >
                    <Input placeholder="Wprowadź adres e-mail..." />
                  </Form.Item>

                  <label className="form-label">
                      Hasło <span className="text-danger">*</span>
                  </label>
                  <Form.Item
                    name="password"
                    rules={[{ required: true }]}
                  >
                    <Input.Password placeholder="Wprowadź hasło..." />
                  </Form.Item>
    
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login_submit_btn"
                    >
                      Zaloguj się {isLoading && <Spin size="small" />}
                    </Button>
                  </Form.Item>
                </Form>
                <Link className="login-register" to={route.signup}>Zarejestruj się</Link>
              </Card>
            </Col>
          </Row>
        </Fragment>
      {/* Footer */}
      <footer className="log-footer">
        <div className="container-fluid">
          {/* Copyright */}
          <div className="copyright">
            <div className="copyright-text">
              <p>©2024 Carsbooking.pl. Wszystkie prawa zastrzeżone.</p>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </footer>
      {/* /Footer */}
    </div>
  );
};
export default Login;
