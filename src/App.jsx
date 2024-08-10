import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";

const API_KEY = "iL2IBrKkXie1kCKFexoV46wTUJSu2yRAQTKH9VHLcts";
const BASE_URL = "https://api.unsplash.com/search/photos";

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            query,
            page,
            client_id: API_KEY,
          },
        });
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (largeImageURL, tags) => {
    setModalData({ largeImageURL, tags });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {modalData && (
        <ImageModal
          isOpen={!!modalData}
          onClose={closeModal}
          largeImageURL={modalData.largeImageURL}
          tags={modalData.tags}
        />
      )}
    </div>
  );
}
