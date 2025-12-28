import React, { useState } from "react";
import Button from "./Button.jsx";

export default function ProductVariantForm({ onSubmit, onClose, products }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productId, setProductId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !productId || !price) return;
    onSubmit({ name, price: parseFloat(price), product_id: productId });
    setName("");
    setPrice("");
    setProductId("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">New Product Variant</h3>

      <input
        type="text"
        placeholder="Variant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <select
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        className="border p-2 w-full rounded"
      >
        <option value="">Select Product</option>
        {products.map((prod) => (
          <option key={prod.id} value={prod.id}>{prod.name}</option>
        ))}
      </select>

      <div className="flex justify-end gap-2">
        <Button type="button" onClick={onClose}>Cancel</Button>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
