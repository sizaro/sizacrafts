import { useState, useEffect } from "react";
import Button from "./Button";

export default function CategoryForm({ onSubmit, onClose, categoryData = null }) {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "",
    category_image: null,
  });

  const [errors, setErrors] = useState({});

  // Prefill on edit
  useEffect(() => {
    if (categoryData) {
      setFormData({
        id: categoryData.id,
        name: categoryData.name || "",
        description: categoryData.description || "",
        category_image: null,
      });
    }
  }, [categoryData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Category name is required";
    if (!formData.description.trim()) newErrors.description = "Category description is required";
    if (!formData.category_image && !categoryData) newErrors.category_image = "Category image is required";

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

    if (categoryData?.id) {
      onSubmit(categoryData.id, data);
    } else {
      onSubmit(data);
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
      <h3 className="text-lg font-semibold">
        {categoryData ? "Edit Category" : "New Category"}
      </h3>

      <input
        type="text"
        placeholder="Category Name"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        className="border p-2 w-full rounded"
      />
      {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

      <textarea
        placeholder="Category Description"
        value={formData.description}
        onChange={(e) => handleChange("description", e.target.value)}
        className="border p-2 w-full rounded"
      />
      {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleChange("category_image", e.target.files[0])}
        className="border p-2 w-full rounded"
      />
      {errors.category_image && <p className="text-red-600 text-sm">{errors.category_image}</p>}

      <div className="flex justify-end gap-2">
        <Button type="button" onClick={onClose}>Cancel</Button>
        <Button type="submit">{categoryData ? "Update" : "Create"}</Button>
      </div>
    </form>
  );
}
