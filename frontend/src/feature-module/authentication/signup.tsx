import { Alert, Button, Card, Col, Form, Input, message, Row, Spin, Typography } from "antd";
import React, { Fragment, useState, useId } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../authentication/AuthContext";
import useScreenSize from "../authentication/hooks/useScreenSize";
import { API } from "../authentication/constant";
import { setToken } from "../authentication/helper";
import { all_routes } from "../router/all_routes";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";

const route = all_routes;

const SignUp = () => {
const { isDesktopView } = useScreenSize();
const navigate = useNavigate();
const { setUser } = useAuthContext();
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");
const onFinish = async (values) => {
  setIsLoading(true);
  try {
    const response = await fetch(`${API}/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    if (data?.error) {
      throw data?.error;
    } else {
      // set the token
      setToken(data.jwt);
      // set the username
      setUser(useId);

      message.success(`Welcome na Carsbooking.pl ${data.user.username}!`);

      navigate(`${route.dashboard}`, { replace: true });
    }
  } catch (error) {
    console.error(error);
    setError(error?.message ?? "Something went wrong!");
  } finally {
    setIsLoading(false);
  }
};

  return (
  <>
  <Link to={route.home}>
    <ImageWithBasePath
      className="img-fluid logo-dark signup"
      src="assets/img/CarsBooking.webp"
      alt="Logo"
    />
  </Link>
    <Fragment>
      <Row align="middle">
        <Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
          <Card title="Zarejestruj się">
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
                  Zarejestruj się {isLoading && <Spin size="small" />}
                </Button>
              </Form.Item>
            </Form>
            <Typography.Paragraph className="form_help_text">
              Masz już konto? <Link to={route.login}>Zaloguj się</Link>
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </Fragment>
    </>
  );
};

export default SignUp;