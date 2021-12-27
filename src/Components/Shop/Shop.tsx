import React, { useEffect, useState } from "react";
import Collection from "./Collection/Collection";
import { Col, Container, Row } from "react-bootstrap";

const Shop = () => {
  const [items, setItems] = useState<IState["items"]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  interface IState {
    items: {
      id: number;
      title: string;
      price: number;
      category: string;
      description: string;
      image: string;
    }[];
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={3}></Col>
        <Col md={9}>
          <Row>
            {items.map((item) => (
              <Collection key={item.id} item={item} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
