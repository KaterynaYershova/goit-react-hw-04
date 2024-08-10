import styles from "./ImageCard.module.css";

export default function ImageCard({ imageUrl, alt, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={imageUrl} alt={alt} className={styles.image} />
    </div>
  );
}
