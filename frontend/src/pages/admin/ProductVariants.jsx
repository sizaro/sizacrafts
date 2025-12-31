import { useState, useEffect } from "react";
import { useData } from "../../context/DataContext";
import Modal from "../../components/Modal";
import ConfirmModal from "../../components/ConfirmModal";
import ProductVariantForm from "../../components/ProductVariantsForm";

export default function ProductVariantsPage() {
  const { productVariants, products, fetchVariantById, createVariant, updateVariant, deleteVariant , fetchAllVariants, fetchProducts} = useData();
   const staticBaseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5500"
    : "https://salonmanagementsystemv2.onrender.com";

  const [showModal, setShowModal] = useState(false);
  const [editingVariant, setEditingVariant] = useState(null);

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [variantToDelete, setVariantToDelete] = useState(null);

  useEffect(() => {
  fetchAllVariants();
  fetchProducts();
}, []);


  const handleEditClick = async (id) => {
  try {
    const res = await fetchVariantById(id);
    console.log("fetched data to be edited", res.data)
    setEditingVariant(res.data); 
    setShowModal(true);
  } catch (err) {
    console.error("Failed to fetch variant:", err);
  }
};


  const handleEditSubmit = async (id, updatedVariant) => {
    await updateVariant(id, updatedVariant);
    setShowModal(false);
    setEditingVariant(null);
    fetchAllVariants();
  };

  const handleDelete = (id) => {
    setVariantToDelete(id);
    setConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    if (variantToDelete) {
      const variant = productVariants.find((v) => v.id === variantToDelete);
      await deleteVariant(variantToDelete, variant.product_id);
      setConfirmModalOpen(false);
      setVariantToDelete(null);
      fetchAllVariants();
    }
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4">Product Variants</h2>
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => { setEditingVariant(null); setShowModal(true); }}
      >
        New Variant
      </button>

      <div className="overflow-x-auto">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-200 sticky top-0">
              <tr>
                <th className="border px-2 py-1">#</th>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Image</th>
                <th className="border px-2 py-1">Price</th>
                <th className="border px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productVariants.map((v, i) => (
                <tr key={v.id} className="hover:bg-gray-50">
                  <td className="border px-2 py-1">{i + 1}</td>
                  <td className="border px-2 py-1">{v.variant_name}</td>
                  <td className="border px-2 py-1">
                    <img
                      src={v.image_url ? `${staticBaseUrl}${v.image_url}` : "/fallback-image.png"}
                      alt={v.variant_name}
                      className="h-10 w-10 object-cover rounded"
                    />
                  </td>
                  <td className="border px-2 py-1">{v.price}</td>
                  <td className="border px-2 py-1 whitespace-nowrap">
                    <button
                      onClick={() => handleEditClick(v.id)}
                      className="bg-yellow-400 px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(v.id)}
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
          <ProductVariantForm
            variantData={editingVariant}
            products={products}
            onSubmit={editingVariant ? handleEditSubmit : createVariant}
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
          message="Are you sure you want to delete this variant?"
        />
      )}
    </section>
  );
}
