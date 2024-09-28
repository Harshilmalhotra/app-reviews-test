import React, { useState } from "react";

const AppLinksForm = ({ onClose }) => {
  const [appStoreLink, setAppStoreLink] = useState("");
  const [playStoreLink, setPlayStoreLink] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({ appStoreLink: "", playStoreLink: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.appStoreLink && !errors.playStoreLink) {
      setShowPopup(true);
    }
  };

  const validateLink = (link) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(link);
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    if (!validateLink(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "Invalid URL format",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
    }
  };

  const handleConfirm = () => {
    setIsSubmitted(true);
    setShowPopup(false);
    onClose(); // Call onClose to close the carousel
  };

  const handleEdit = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full mx-auto mt-10 h-full pt-12 px-28 bg-root-1"> {/* Added margin-top */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="appStoreLink" className="block text-gray-300 font-semibold mb-2">
            App Store:
          </label>
          <input
            type="text"
            id="appStoreLink"
            value={appStoreLink}
            onChange={(e) => setAppStoreLink(e.target.value)}
            onBlur={handleBlur}
            disabled={isSubmitted}
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            placeholder="Enter App Store link"
          />
          {errors.appStoreLink && <span className="text-red-500 text-sm">{errors.appStoreLink}</span>}
        </div>

        <div>
          <label htmlFor="playStoreLink" className="block text-gray-300 font-semibold mb-2">
            Play Store:
          </label>
          <input
            type="text"
            id="playStoreLink"
            value={playStoreLink}
            onChange={(e) => setPlayStoreLink(e.target.value)}
            onBlur={handleBlur}
            disabled={isSubmitted}
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            placeholder="Enter Play Store link"
          />
          {errors.playStoreLink && <span className="text-red-500 text-sm">{errors.playStoreLink}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitted || !appStoreLink || !playStoreLink}
          className={`w-full py-2 bg-blue-600 text-white font-semibold rounded-md transition ${
            isSubmitted || !appStoreLink || !playStoreLink ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          Submit
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-4 rounded-md shadow-md text-gray-300 max-w-xs">
            <h2 className="text-lg font-semibold mb-2">Confirm Links</h2>
            <p className="text-sm mb-2">App Store Link: {appStoreLink}</p>
            <p className="text-sm mb-4">Play Store Link: {playStoreLink}</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleEdit}
                className="py-1 px-3 bg-gray-600 text-gray-300 rounded-md hover:bg-gray-700 text-sm"
              >
                Edit
              </button>
              <button
                onClick={handleConfirm}
                className="py-1 px-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppLinksForm;