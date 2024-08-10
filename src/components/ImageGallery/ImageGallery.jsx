import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map(({ id, urls, alt_description }) => (
        <li key={id} className={styles.item}>
          <ImageCard
            imageUrl={urls.small}
            alt={alt_description}
            onClick={() => onClick(urls.regular, alt_description)}
          />
        </li>
      ))}
    </ul>
  );
}
