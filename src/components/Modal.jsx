import axiosInstance from "../api/axiosInstance"


const Modal = ({ isOpen, onClose ,images }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">
            Uploaded Images
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-black"
          >
            &times;
          </button>
        </div>

        <div>
            {
                images && images.length > 0 ? (
                    <div className="flex gap-3 overflow-x-auto">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={`${axiosInstance.defaults.baseURL}/uploads/${image}`}
                                alt={`Image ${index + 1}`}
                                className="rounded-lg "
                                width={"200px"}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No images available.</p>
                )
            }
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
