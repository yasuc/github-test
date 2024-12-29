import React from 'react';

const items = [
  { id: 1, name: '商品1', price: 1000 },
  { id: 2, name: '商品2', price: 2000 },
  { id: 3, name: '商品3', price: 3000 },
];

export default function ItemList() {
  return (
    <div>
      <h1>商品一覧</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ¥{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
