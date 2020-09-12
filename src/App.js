import React from "react";
import { useState } from "react";
import { Counter } from "./features/counter/Counter";
import { Tabs, Tab } from "react-bootstrap";
import Orders from "./features/orders/order";
import "./App.css";
import Inventory from "./features/inventory/inventory";
import Home from "./features/home/home";

function App() {
  const [key, setKey] = useState("inventory");
  return (
    <header className="container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Home">
          <Home />
        </Tab>
        <Tab eventKey="inventory" title="Inventory">
          <Inventory />
        </Tab>
        <Tab eventKey="orders" title="Orders">
          <Orders />
        </Tab>
        <Tab eventKey="counter" title="Counter">
          <Counter />
        </Tab>
      </Tabs>
    </header>
  );
}

export default App;
