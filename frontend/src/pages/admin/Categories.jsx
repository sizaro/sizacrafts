import { useState, useEffect } from "react";
import { useData } from "../../context/DataContext";
import Modal from "../../components/Modal";
import ConfirmModal from "../../components/ConfirmModal";
import CategoryForm from "../../components/CategoryForm"; // your form component

export default function Categories() {
  const { categories, fetchCategories, createCategory, updateCategory, deleteCategory } = useData();
  const staticBaseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5500"
    : "https://salonmanagementsystemv2.onrender.com";

  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  // Edit
  const handleEditClick = async (id) => {
    const category = categories.find((c) => c.id === id);
    setEditingCategory(category);
    setShowModal(true);
  };

  const handleEditSubmit = async (id, updatedCategory) => {
    await updateCategory(id, updatedCategory);
    setShowModal(false);
    setEditingCategory(null);
  };

  // Delete
  const handleDelete = (id) => {
    setCategoryToDelete(id);
    setConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    if (categoryToDelete) {
      await deleteCategory(categoryToDelete);
      setConfirmModalOpen(false);
      setCategoryToDelete(null);
    }
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => { setEditingCategory(null); setShowModal(true); }}
      >
        New Category
      </button>

      <div className="overflow-x-auto">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-200 sticky top-0">
              <tr>
                <th className="border px-2 py-1">#</th>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Image</th>
                <th className="border px-2 py-1">Description</th>
                <th className="border px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c, i) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="border px-2 py-1">{i + 1}</td>
                  <td className="border px-2 py-1">{c.name}</td>
                  <td className="border px-2 py-1">
                    <img
                      src={c.image_url ? `${staticBaseUrl}${c.image_url}` : "/fallback-image.png"}
                      alt={c.name}
                      className="h-10 w-10 object-cover rounded"
                    />
                  </td>
                  <td className="border px-2 py-1">{c.description}</td>
                  <td className="border px-2 py-1 whitespace-nowrap">
                    <button
                      onClick={() => handleEditClick(c.id)}
                      className="bg-yellow-400 px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
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
          <CategoryForm
            categoryData={editingCategory}
            onSubmit={editingCategory ? handleEditSubmit : createCategory}
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
          message="Are you sure you want to delete this category?"
        />
      )}
    </section>
  );
}
