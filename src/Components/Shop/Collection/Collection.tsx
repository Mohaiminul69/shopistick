import React from "react";
import { Col } from "react-bootstrap";
import "./collection.css";

interface Iprops {
  item: {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  };
}

const Collection: React.FC<Iprops> = ({ item }) => {
  const { title, image, price } = item;
  return (
    <Col md={4} className="mb-4">
      <div className="producWrapper py-1 px-3 text-center rounded-3">
        <div className="imgWrapper">
          <img className="p-5" src={image} alt="" />
        </div>
        <h6 className="mt-3">{title}</h6>
        <p className="mt-3">${price}</p>
      </div>
    </Col>
  );
};

export default Collection;
