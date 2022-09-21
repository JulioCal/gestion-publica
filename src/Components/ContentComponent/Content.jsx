import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col } from "react-bootstrap";
import Task from "../TaskComponent/Task";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./Content.css";

export default function ContentData() {
  const [columns, setColumns] = useState([
    {
      id: uuidv4(),
      nombre: "Tasks",
      estado: "pendiente",
      items: [{ id: 1, tarea: "Task" }],
    },
    { id: uuidv4(), nombre: "OnGoing", estado: "en curso", items: [] },
    { id: uuidv4(), nombre: "Completed", estado: "finalizado", items: [] },
    { id: uuidv4(), nombre: "Pending Approval", estado: "urgente", items: [] },
  ]);

  function onDragEnd(result) {
    if (!result.destination) return;
    const { source, destination } = result;
    //array of columns.
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns.find(
        (column) => column.id === source.droppableId
      );
      const destinyColumn = columns.find(
        (column) => column.id === destination.droppableId
      );
      const [removedItem] = sourceColumn.items.splice(source.index, 1);
      destinyColumn.items.splice(destination.index, 0, removedItem);
      let updatedItems = columns.map((column) =>
        sourceColumn.id === column.id ? sourceColumn : column
      );
      updatedItems = columns.map((column) =>
        destinyColumn.id === column.id ? destinyColumn : column
      );
      setColumns(updatedItems);
    } else {
      const OneColumn = columns.find((column) => column.id === destination.id);
      const [reorderedItem] = OneColumn.items.splice(source.index, 1);
      OneColumn.items.splice(destination.index, 0, reorderedItem);
      let updatedItems = columns.map((column) =>
        OneColumn.id === column.id ? OneColumn : column
      );
      setColumns(updatedItems);
    }
  }

  function sms(text, limit) {
    let messages = [];
    let max = Math.ceil(text.length / limit);
    for (let i = 0; i <= max; i++) {
      let indicator = "(" + (i + 1) + "/" + (max + 1) + ")";
      let breakPoint = limit - indicator.length;
      if (i === 0) {
        messages.push(text.slice(0, breakPoint) + indicator);
      } else {
        messages.push(
          text.slice(breakPoint * i, breakPoint * (i + 1)) + indicator
        );
      }
    }
    console.log(text.split(" "));
    console.log(messages);
  }

  sms("hello, world!", 10);
  sms(
    "lorem ipsum dolor sit amet, dolomet taket sumiren asuarpa. this is a very very long text omg so happy, what to do now",
    10
  );

  return (
    <>
      <Row className="m-0 border-container">
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
          <Row className="m-0 inner-border-container">
            {columns.map(({ items, nombre, id, estado }) => {
              return (
                <Col>
                  <div className="dropeable-list">
                    <h4 style={{ textAlign: "center" }}>{nombre}</h4>
                    <Droppable droppableId={id}>
                      {(provided) => (
                        <ul
                          style={{ padding: "0" }}
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {items.map(({ id, tarea, PIC }, index) => {
                            return (
                              <Draggable
                                key={id.toString()}
                                draggableId={tarea}
                                index={index}
                              >
                                {(provided) => (
                                  <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <Task
                                      id={id}
                                      tarea={tarea}
                                      estado={estado}
                                      PIC={PIC}
                                    />
                                  </li>
                                )}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </ul>
                      )}
                    </Droppable>
                  </div>
                </Col>
              );
            })}
          </Row>
        </DragDropContext>
      </Row>
    </>
  );
}
