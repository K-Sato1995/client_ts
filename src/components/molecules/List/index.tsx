import React from "react";
import Item from "../Item";

interface Props {
  items: {
    id: number;
    title: string;
  }[];
}

const List = ({ items }: Props) => {
  return (
    <ul>
      {items.map(item => (
        <Item id={item.id} title={item.title} />
      ))}
    </ul>
  );
};

export default List;
