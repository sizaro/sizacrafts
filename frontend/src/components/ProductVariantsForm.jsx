import { useState, useEffect } from "react";
import Button from "./Button";

export default function ProductVariantForm({
  onSubmit,
  onClose,
  products,
  variantData = null,
}) {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "", 
    price: "",
    product_id: "",
    variant_image: null,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (variantData) {
      setFormData({
        id: variantData.id,
        name: variantData.variant_name || "",
        description: variantData.description || "",  // <-- set description if editing
        price: variantData.price || "",
        product_id: variantData.product_id || "",
        variant_image: null,
      });
    }
  }, [variantData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Variant name is required";
    if (!formData.description.trim()) newErrors.description = "Description is required"; // <-- validate description
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.product_id) newErrors.product_id = "Product is required";
    if (!formData.variant_image && !variantData)
      newErrors.variant_image = "Variant image is required";

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

    if (variantData?.id) {
      onSubmit(variantData.id, data);
    } else {
      onSubmit(data);
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">
        {variantData ? "Edit Variant" : "New Product Variant"}
      </h3>

      <input
        type="text"
        placeholder="Variant Name"
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
      {errors.description && (
        <p className="text-red-600 text-sm">{errors.description}</p>
      )}

      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => handleChange("price", e.target.value)}
        className="border p-2 w-full rounded"
      />
      {errors.price && <p className="text-red-600 text-sm">{errors.price}</p>}

      <select
        value={formData.product_id}
        onChange={(e) => handleChange("product_id", e.target.value)}
        className="border p-2 w-full rounded"
      >
        <option value="">Select Product</option>
        {products.map((p) => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
      {errors.product_id && (
        <p className="text-red-600 text-sm">{errors.product_id}</p>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleChange("variant_image", e.target.files[0])}
        className="border p-2 w-full rounded"
      />
      {errors.variant_image && <p className="text-red-600 text-sm">{errors.variant_image}</p>}

      <div className="flex justify-end gap-2">
        <Button type="button" onClick={onClose}>Cancel</Button>
        <Button type="submit">{variantData ? "Update" : "Create"}</Button>
      </div>
    </form>
  );
}
