import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, largeImageURL, tags }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button type="button" className={styles.close} onClick={onClose}>
        Close
      </button>
      <img src={largeImageURL} alt={tags} className={styles.image} />
    </Modal>
  );
}
