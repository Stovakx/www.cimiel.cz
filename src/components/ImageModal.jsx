import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import {AiOutlineClose} from 'react-icons/ai';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageModal = ({ isOpen, onClose, imagePaths, selectedImageIndex })=> {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} shouldCloseOnOverlayClick={true} >
    <AiOutlineClose className="galleryBtn" onClick={onClose}/>
      <Carousel selectedItem={selectedImageIndex}>
        {imagePaths.map((imagePath, index) => (
          <div key={index}>
            <img src={imagePath} alt="Project photo" className="modalImage" />
          </div>
        ))}
      </Carousel>
    </Modal>
  );
}

export default ImageModal;
