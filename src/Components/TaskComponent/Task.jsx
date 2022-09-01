/* eslint-disable no-unused-vars */
import { Card, Nav, Form, Row, Tab, Col, Offcanvas } from "react-bootstrap";
import { UserOutlined, FullscreenOutlined } from "@ant-design/icons";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import TaskDetails from "../DetailsComponent/TaskDetails";

export default function Task({ id, tarea, estado, PIC }) {
  //make card of task with tabs{ description, who is working on it}, color coded for quick reading. bg and border colors for selection.
  const [select, setOption] = useState("light");
  const [location, pushLocation] = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    switch (estado) {
      case "en curso":
        setOption("info");
        break;
      case "finalizado":
        setOption("success");
        break;
      case "urgente":
        setOption("danger");
        break;
      default:
        setOption("light");
    }
  }, [estado]);

  const handleChange = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  };

  //make function to see expanded version of task.
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header
          style={{ justifyContent: "flex-end" }}
          closeButton
        ></Offcanvas.Header>
        <Offcanvas.Body>
          <TaskDetails id={id} tarea={tarea} estado={estado} PIC={PIC} />
        </Offcanvas.Body>
      </Offcanvas>
      <Card
        bg={select}
        text={select === "light" ? "dark" : "white"}
        style={{ textAlign: "left" }}
      >
        <Tab.Container defaultActiveKey="#first">
          <Card.Header
            style={{
              paddingBottom: "0.5rem",
              justifyContent: "center",
              paddingRight: "0.5rem",
            }}
          >
            <Row style={{ marginLeft: ".1rem" }}>
              <Col>
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link
                      href="#first"
                      style={{ padding: " .65rem 1rem" }}
                      className={
                        select === "light"
                          ? "darkText navTab"
                          : "lightText navTab"
                      }
                    >
                      Tarea
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#link"
                      className={
                        select === "light"
                          ? "darkText navTab"
                          : "lightText navTab"
                      }
                      style={{ padding: ".42rem .8rem" }}
                    >
                      <UserOutlined
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={6}>
                <Form.Select
                  value={select}
                  onChange={handleChange}
                  style={{ fontSize: "smaller" }}
                >
                  <option value="light">Pendiente</option>
                  <option value="info">En curso</option>
                  <option value="danger">Urgente</option>
                  <option value="warning">En espera</option>
                  <option value="success">Finalizado</option>
                </Form.Select>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Tab.Content>
              <Tab.Pane eventKey="#first">
                <h6>Titulo de tarea</h6>
                <Card.Text style={{ fontSize: "smaller" }}>
                  descripcion de tarea.
                </Card.Text>
              </Tab.Pane>
              <Tab.Pane eventKey="#link">
                <h6>Titulo de tarea</h6>
                <Card.Text style={{ fontSize: "smaller" }}>
                  Encargado de la tarea.
                </Card.Text>
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
          <Card.Footer>
            <span className="navButton">
              <FullscreenOutlined
                style={{ display: "block" }}
                onClick={handleShow}
              />
            </span>
          </Card.Footer>
        </Tab.Container>
      </Card>
    </>
  );
}
