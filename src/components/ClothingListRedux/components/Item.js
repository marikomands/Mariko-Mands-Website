import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const ClothesItem = ({ item }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [buy, setBuy] = useState(false);

  useEffect(() => {
    const getImage = async () => {
      try {
        setImageError(false);
        const { data } = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: { query: item.query, per_page: 1 },
            headers: {
              Authorization:
                "Client-ID fmAnr5mkf9QbV8cgJu59tZSYYSH_wyyZwquCAu-7S2M",
            },
          }
        );

        console.log("🚀 ~ itemsImages ~ data", data);
        const imageUrl = data?.results[0]?.urls?.regular;
        console.log("🚀 ~ getImage ~ imageUrl", imageUrl);

        if (imageUrl) {
          setImageSrc(imageUrl);
        }
      } catch (error) {
        console.log("🚀 ~ getImage ~ error", error);
        setImageError(true);
      }
    };

    getImage();
  }, []);

  return (
    <div className="ClothesItem" key={item.product}>
      <h2>Product: {item.product}</h2>
      <h2>Price: {item.price}</h2>
      {imageSrc ? <img className="img" src={imageSrc} /> : <p>No Image</p>}
      {imageError ? <p>Couldn't get Image</p> : null}
      <button
        className={`buyButton ${buy ? "bought" : ""}`}
        onClick={() => setBuy(!buy)}
      >
        Buy
      </button>
    </div>
  );
};

export default ClothesItem;
