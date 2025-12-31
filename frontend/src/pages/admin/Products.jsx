import { useState, useEffect } from "react";
import { useData } from "../../context/DataContext";
import Modal from "../../components/Modal";
import ConfirmModal from "../../components/ConfirmModal";
import ProductForm from "../../components/ProductForm";

export default function Products() {
  const { products, categories, fetchProducts, createProduct, updateProduct, deleteProduct } = useData();
        const staticBaseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5500"
    : "https://salonmanagementsystemv2.onrender.com";

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEditClick = async (id) => {
    const product = products.find((p) => p.id === id);
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleEditSubmit = async (id, updatedProduct) => {
    await updateProduct(id, updatedProduct);
    setShowModal(false);
    setEditingProduct(null);
    fetchProducts()
  };

  const handleDelete = (id) => {
    setProductToDelete(id);
    setConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    if (productToDelete) {
      const product = products.find((p) => p.id === productToDelete);
      await deleteProduct(productToDelete, product.category_id);
      setConfirmModalOpen(false);
      setProductToDelete(null);
    }
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => { setEditingProduct(null); setShowModal(true); }}
      >
        New Product
      </button>

      <div className="overflow-x-auto">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-200 sticky top-0">
              <tr>
                <th className="border px-2 py-1">#</th>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Category</th>
                <th className="border px-2 py-1">Price Range</th>
                <th className="border px-2 py-1">Image</th>
                <th className="border px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="border px-2 py-1">{i + 1}</td>
                  <td className="border px-2 py-1">{p.name}</td>
                  <td className="border px-2 py-1">{p.category_name}</td>
                  <td className="border px-2 py-1">{p.price_range}</td>
                  <td className="border px-2 py-1">
                    <img
                      src={p.image_url ? `${staticBaseUrl}${p.image_url}` : "/fallback-image.png"}
                      alt={p.name}
                      className="h-10 w-10 object-cover rounded"
                    />
                  </td>

                  <td className="border px-2 py-1 whitespace-nowrap">
                    <button
                      onClick={() => handleEditClick(p.id)}
                      className="bg-yellow-400 px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="bg-red-500 px-2 py-1 rounded text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <ProductForm
            productData={editingProduct}
            categories={categories}
            onSubmit={editingProduct ? handleEditSubmit : createProduct}
            onClose={() => setShowModal(false)}
          />
        </Modal>
      )}

      {confirmModalOpen && (
        <ConfirmModal
          isOpen={confirmModalOpen}
          confirmMessage="Yes"
          onConfirm={confirmDelete}
          onClose={() => setConfirmModalOpen(false)}
          message="Are you sure you want to delete this product?"
        />
      )}
    </section>
  );
}
