import React, { useState } from "react";
import { useData } from "../../context/DataContext";
import Modal from "../../components/Modal.jsx";
import Button from "../../components/Button.jsx";

// Import your new forms
import CategoryForm from "../../components/CategoryForm.jsx";
import ProductForm from "../../components/ProductForm.jsx";
import ProductVariantForm from "../../components/ProductVariantsForm.jsx";

export default function AdminDashboard() {
  const { categories, products, createCategory, createProduct, createVariant } = useData();
  const [modalType, setModalType] = useState(null);

  const closeModal = () => setModalType(null);

  return (
    <div className="space-y-6">
      {/* Existing dashboard content */}

      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Product Management</h2>
        <div className="flex gap-3 flex-wrap">
          <Button onClick={() => setModalType("new_category")}>Add Category</Button>
          <Button onClick={() => setModalType("new_product")}>Add Product</Button>
          <Button onClick={() => setModalType("new_product_variant")}>Add Product Variant</Button>
        </div>
      </div>

      {/* Category Modal */}
      <Modal isOpen={modalType === "new_category"} onClose={closeModal}>
        <CategoryForm
          onSubmit={async (data) => { await createCategory(data); closeModal(); }}
          onClose={closeModal}
        />
      </Modal>

      {/* Product Modal */}
      <Modal isOpen={modalType === "new_product"} onClose={closeModal}>
        <ProductForm
          onSubmit={async (data) => { await createProduct(data); closeModal(); }}
          onClose={closeModal}
          categories={categories}
        />
      </Modal>

      {/* Product Variant Modal */}
      <Modal isOpen={modalType === "new_product_variant"} onClose={closeModal}>
        <ProductVariantForm
          onSubmit={async (data) => { await createVariant(data); closeModal(); }}
          onClose={closeModal}
          products={products}
        />
      </Modal>
    </div>
  );
}
