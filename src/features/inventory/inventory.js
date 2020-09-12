import React from "react";
import { Table, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./inventorySlice";

export default function () {
  //useSelector is what you use to get slices of your state.
  const inventory = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Form onSubmit={(e) => dispatch(addItem(e.target.value))}>
        <Form.Group controlId="name">
          <Form.Label>Name of Product</Form.Label>
          <Form.Control type="name" placeholder="Einstein's Bagels" />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Current Quantity</Form.Label>
          <Form.Control type="quantity" placeholder="Einstein's Bagels" />
        </Form.Group>
        <Form.Group controlId="quantityType">
          <Form.Label>Quantity Type</Form.Label>
          <Form.Control type="quantityType" placeholder="Per dozen" />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="price" placeholder="$20" />
        </Form.Group>

        <Form.Group controlId="Details">
          <Form.Label>Add Details</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Quantity Type</th>
            <th>Price per Quantity Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.quantityType}</td>
              <td>{item.price}</td>
              <td>{item.details}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
}
