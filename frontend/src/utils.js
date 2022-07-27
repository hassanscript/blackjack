import io from "socket.io-client";

const url =
  process.env.NODE_ENV != "production" ? "http://localhost:3003/" : "/";

export const socket = io(url);

export const preloadCards = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("./Assets/Cards/", false, /\.(png|jpe?g|svg)$/)
  );
  function loadImages(imageUrls) {
    images.forEach((q) => {
      const img = new Image();
      img.src = q;
    });
  }
  loadImages();
};
