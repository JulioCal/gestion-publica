import { Form, Input, Button } from "antd";
import { Row, Col } from "react-bootstrap";

export default function Details({ id, tarea, estado, PIC }) {
  const [form] = Form.useForm();
  return (
    <>
      <Row style={{ justifyContent: "space-between" }}>
        <h5 style={{ width: "fit-content" }}>Title</h5>
        <span style={{ width: "fit-content" }}>estado</span>
      </Row>
      <span>
        <p>description Text</p>
      </span>
      <span>
        <h6>person in charge</h6>
        <img src="" alt="" />
      </span>
      <span>
        <h6>Log</h6>
        <span>logdata</span>
      </span>
    </>
  );
}
