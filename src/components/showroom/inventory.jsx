import React, { useState } from "react";
import ShowroomNavbar from "./showroomNavbar";
import Drawer from "./drawer";
import Dialog from "./dialog";
import { Plus, Edit, Trash } from "lucide-react";

function ShowroomInventory() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [vehicleToDelete, setVehicleToDelete] = useState(null);
  const [vehicleToEdit, setVehicleToEdit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
    setIsEditing(false);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setVehicleToEdit(null);
  };

  const handleSave = (formData) => {
    if (isEditing) {
      const updatedVehicles = vehicles.map((vehicle, index) =>
        index === vehicleToEdit ? formData : vehicle
      );
      setVehicles(updatedVehicles);
    } else {
      setVehicles((prevVehicles) => [...prevVehicles, formData]);
    }
    closeDialog();
  };

  const handleEdit = (index) => {
    setVehicleToEdit(index);
    setIsDialogOpen(true);
    setIsEditing(true);
  };

  const openDeleteDialog = (index) => {
    setVehicleToDelete(index);
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setVehicleToDelete(null);
  };

  const confirmDelete = () => {
    const updatedVehicles = vehicles.filter((_, i) => i !== vehicleToDelete);
    setVehicles(updatedVehicles);
    closeDeleteDialog();
  };

  return (
    <div className="bg-[#2C2C2C] min-h-screen relative">
      <ShowroomNavbar onMenuClick={toggleDrawer} />

      <div className="container mx-auto p-6">
        <div className="text-white">
          <table className="min-w-full bg-gray-800 text-white border border-gray-700">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-gray-700">Image</th>
                <th className="px-4 py-2 border-b border-gray-700">Make</th>
                <th className="px-4 py-2 border-b border-gray-700">Model</th>
                <th className="px-4 py-2 border-b border-gray-700">Mileage</th>
                <th className="px-4 py-2 border-b border-gray-700">Engine Displacement</th>
                <th className="px-4 py-2 border-b border-gray-700">Rental Price</th>
                <th className="px-4 py-2 border-b border-gray-700">Color</th>
                <th className="px-4 py-2 border-b border-gray-700">Transmission</th>
                <th className="px-4 py-2 border-b border-gray-700">Body Type</th>
                <th className="px-4 py-2 border-b border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.length > 0 ? (
                vehicles.map((vehicle, index) => (
                  <tr key={index} className="text-center">
                    <td className="px-4 py-2 border-b border-gray-700">
                      <img src={vehicle.image} alt={vehicle.make} className="w-16 h-16 object-cover" />
                    </td>
                    <td className="px-4 py-2 border-b border-gray-700">{vehicle.make}</td>
                    <td className="px-4 py-2 border-b border-gray-700">{vehicle.model}</td>
                    <td className="px-4 py-2 border-b border-gray-700">{vehicle.mileage} km</td>
                    <td className="px-4 py-2 border-b border-gray-700">{vehicle.engineDisplacement}</td>
                    <td className="px-4 py-2 border-b border-gray-700">{vehicle.rentalPrice} RS/day</td>
                    <td className="px-4 py-2 border-b border-gray-700">{vehicle.color}</td>
                    <td className="px-4 py-2 border-b border-gray-700">{vehicle.transmission}</td>
                    <td className="px-4 py-2 border-b border-gray-700">{vehicle.bodyType}</td>
                    <td className="px-4 py-2 border-b border-gray-700 flex justify-center space-x-2">
                      <button
                        title="Edit"
                        className="bg-green-600 mt-7 mb-5 text-white p-2 rounded-full hover:bg-green-700"
                        onClick={() => handleEdit(index)}
                      >
                        <Edit className="w-6 h-6" />
                      </button>
                      <button
                        title="Delete"
                        className="bg-red-600 mt-7 mb-5 text-white p-2 rounded-full hover:bg-red-700"
                        onClick={() => openDeleteDialog(index)}
                      >
                        <Trash className="w-6 h-6" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="px-4 py-2 text-center">
                    No vehicles in inventory.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />

      <button
        onClick={openDialog}
        className="fixed bottom-6 right-6 bg-[#C17D3C] text-white rounded-full p-4 shadow-lg flex items-center justify-center hover:bg-[#A86428] transition-all duration-300 ease-in-out"
      >
        <Plus className="w-6 h-6" />
      </button>

      <Dialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onSave={handleSave}
        vehicle={isEditing ? vehicles[vehicleToEdit] : null}
        isEditing={isEditing}
      />

      {isDeleteDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-xl mb-4">Do you want to delete this car?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={closeDeleteDialog}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={confirmDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowroomInventory;
