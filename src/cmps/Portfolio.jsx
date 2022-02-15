import React, { useState, useEffect } from "react";
import { images } from "../js/imgs-data";
// import {  Route, Link } from "react-router-dom";

// import { Fantasy } from "./galleries/Fantasy.jsx";
// import { Canvas } from "./galleries/Canvas.jsx";
// import { Backstage } from "./galleries/Backstage.jsx";
// import { Family } from "./galleries/Family.jsx";

export default function Portfolio () {
  const [ tag, setTag ] = useState("all");
  const [ filteredImages, setFilteredImages ] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((img) => img.tag === tag));
  }, [ tag ]);

  return (
    <div className="portfolio">
      <h2>Galleries</h2>
      <TagButton
        name="all"
        handleSetTag={ setTag }
        tagActive={ tag === "all" ? true : false }
      />
      <TagButton
        name="fantasy"
        handleSetTag={ setTag }
        tagActive={ tag === "fantasy" ? true : false }
      />
      <TagButton
        name="canvas"
        handleSetTag={ setTag }
        tagActive={ tag === "canvas" ? true : false }
      />
      <TagButton
        name="fashion"
        handleSetTag={ setTag }
        tagActive={ tag === "fashion" ? true : false }
      />
      <TagButton
        name="family"
        handleSetTag={ setTag }
        tagActive={ tag === "family" ? true : false }
      />
      <TagButton
        name="erotic"
        handleSetTag={ setTag }
        tagActive={ tag === "erotic" ? true : false }
      />
      <div className="container">
        { filteredImages.map((img, index) => (
          <div key={ index }>
            <a href={ `imgs/allPhotos/${ img.name }` }>
              <img src={ `imgs/allPhotos/${ img.name }` } alt={ img.tag } />
            </a>
          </div>
        )) }
      </div>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={ `tag ${ tagActive ? "active" : null }` }
      onClick={ () => handleSetTag(name) }
    >
      { name.toUpperCase() }
    </button>
  );
};
