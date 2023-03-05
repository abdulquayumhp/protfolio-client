import React from "react";

const HomeBannerModal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img
            className="mb-5"
            src="https://i.ibb.co/FzqQVxP/MD-ABDUL-QUAYUM-2v.jpg"
          />

          <div className="text-center">
            <a
              className="bg-black text-white py-2 px-6  "
              href="https://drive.google.com/file/d/1Pqm-1BVEOgvajTYgwDI91ZRP8MyqP5hB/view?usp=share_link"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerModal;
