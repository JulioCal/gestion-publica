import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import corpozulia from "../../images/corpozulia.png";
import "./Login.css";

export default function Login() {
  const [location, setLocation] = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setLocation("/loader");
  };

  return (
    <>
      <div className="centered-box">
        <Form className="form-color mb-4" onSubmit={handleSubmit(onSubmit)}>
          <img
            src={corpozulia}
            style={{ height: "4rem", margin: "0 10rem 0 0" }}
            alt=""
          />
          <FloatingLabel size="sm" className="m-2 text-left" label="usuario">
            <Form.Control
              size="sm"
              placeholder="usuario"
              {...register("user")}
            />
          </FloatingLabel>
          <FloatingLabel size="sm" className="m-2 text-left" label="Password">
            <Form.Control
              size="sm"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </FloatingLabel>
          <Button
            className="silver-button"
            type="submit"
            variant="outline-dark"
          >
            Entrar
          </Button>
        </Form>
      </div>
    </>
  );
}
