import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "./index.css";

const ImageSearch = () => {
  const [results, setResults] = useState([]);
  console.log("🚀 ~ ImageSearch ~ results", results);

  const [searchTerm, setSearchTerm] = useState("");
  // console.log("🚀 ~ ImageSearch ~ searchTerm", searchTerm);

  const [error, setError] = useState(false);
  console.log("🚀 ~ ImageSearch ~ error", error);

  const fetchImages = async () => {
    try {
      setError(false);
      const { data } = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: searchTerm },
          // params: { query: term},
          headers: {
            Authorization:
              "Client-ID lk1sHfESga4bPGg0Xt0EbcMzx1IcuYw0uThfuucVPmg",
          },
        }
      );

      setResults(data.results);
    } catch (error) {
      console.log("🚀 ~ onSearchSubmit ~ error", error);
      setResults(null);
      setError(true);
      console.log("🚀 ~ fetchImages ~ setError", setError);
    }
  };

  // Will run if 'searchTerm' changes
  useEffect(() => {
    if (searchTerm) {
      fetchImages();
    }
  }, [searchTerm]);

  return (
    <div>
      <div>
        <SearchBar onSubmit={setSearchTerm} />
        {/* <SearchBar onSubmit={fetchImages} /> */}
        {error ? <div>Something went wrong!</div> : null}
        <div style={{ marginTop: "50px" }}>
          {results?.length === 0 ? <div>No Results!</div> : null}
        </div>
        {results?.length > 0 ? <div>{results.length} Results!</div> : null}
        <ImageList images={results} />
      </div>
      <div className="imageContainer">
        <Link to="/" style={{ textDecoration: "underline" }}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default ImageSearch;
