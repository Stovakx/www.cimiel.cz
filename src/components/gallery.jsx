import { useEffect, useState, useRef  } from "react";
import { Container } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
import getGalleryPhotos from "../utilities/getGalleryPhotos";
import ImageModal from "./ImageModal.jsx";
import "../assets/css/gallery.css";

const Gallery = () => {
  const galleryPath = "/gallery";
  const [imagePaths, setImagePaths] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const appElementRef = useRef(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      const paths = await getGalleryPhotos(galleryPath);
      setImagePaths(paths);
    }

    fetchImages();
  }, []);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Container className="galleryContainer " ref={appElementRef}>
      <LazyLoad threshold={0.95}>
        <div className="image-grid">
          {imagePaths.map((imagePath, index) => (
            <img
              key={index}
              src={imagePath}
              alt="Project photo"
              loading="lazy"
              onClick={() => openModal(index)} 
            />
          ))}
        </div>
      </LazyLoad>
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imagePaths={imagePaths}
        selectedImageIndex={selectedImageIndex}
      />
    </Container>
  );
};

export default Gallery;
