import React, { useState } from 'react';
import { FC } from "react";
import { IInfoTrash } from '../interfaces/IInfoTrash';
import './InfoTrash.css';

const InfoTrash: FC<IInfoTrash> = ({ imageUrl, title, items }) => {
  const [showItems, setShowItems] = useState(false);

  return (
    <div className="image-with-title" onMouseEnter={() => setShowItems(true)} onMouseLeave={() => setShowItems(false)}>
      <img src={imageUrl} alt={title} className="image" />
      <h2 className="title">{title}</h2>
      {showItems && (
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfoTrash;