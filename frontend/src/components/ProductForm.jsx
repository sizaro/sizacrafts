import { useState, useEffect } from "react";
import Button from "./Button";

export default function ProductForm({
  onSubmit,
  onClose,
  categories,
  productData = null,
}) {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "",
    price_range: "",
    category_id: "",
    product_image: null,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (productData) {
      setFormData({
        id: productData.id,
        name: productData.name || "",
        description: productData.description || "",
        price_range: productData.price_range || "",
        category_id: productData.category_id || "",
        product_image: null,
      });
    }
  }, [productData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.price_range) newErrors.price_range = "Price Range is required";
    if (!formData.category_id) newErrors.category_id = "Category is required";
    if (!formData.product_image && !productData)
      newErrors.product_image = "Product image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) data.append(key, value);
    });

    if (productData?.id) {
      onSubmit(productData.id, data);
    } else {
      onSubmit(data);
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">
        {productData ? "Edit Product" : "New Product"}
      </h3>

      <input
        type="text"
        placeholder="Product Name"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        className="border p-2 w-full rounded"
      />
      {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => handleChange("description", e.target.value)}
        className="border p-2 w-full rounded"
      />

      <input
        type="text"
        placeholder="Price Range"
        value={formData.price_range}
        onChange={(e) => handleChange("price_range", e.target.value)}
        className="border p-2 w-full rounded"
      />
      {errors.price_range && <p className="text-red-600 text-sm">{errors.price_range}</p>}

      <select
        value={formData.category_id}
        onChange={(e) => handleChange("category_id", e.target.value)}
        className="border p-2 w-full rounded"
      >
        <option value="">Select Category</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      {errors.category_id && (
        <p className="text-red-600 text-sm">{errors.category_id}</p>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleChange("product_image", e.target.files[0])}
        className="border p-2 w-full rounded"
      />
      {errors.product_image && <p className="text-red-600 text-sm">{errors.product_image}</p>}

      <div className="flex justify-end gap-2">
        <Button type="button" onClick={onClose}>Cancel</Button>
        <Button type="submit">{productData ? "Update" : "Create"}</Button>
      </div>
    </form>
  );
}
