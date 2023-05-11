import React from "react";
import { gallery } from "../json/Gallery";
import { useState } from "react";
const GalleryDisplay = () => {
  // gallery[0] defines the first object of gallery
  // thumbnail[0] defines the first img of thumbnail
  const [selectedImage, setSelectedImage] = useState(gallery[0].thumbnail[0]);

  const handleClick = (src) => {
    setSelectedImage(src);
  };

  function Thumbnail(props) {
    return (
      <button type="button" onClick={props.onClick}>
        <img src={props.src} alt="img" height={100} width={150} />
      </button>
    );
  }

  function Image(props) {
    return <img src={props.src} alt="img" height={200} width={350} />;
  }
  return (
    <>
    <div className="container mt-5">
    <h2 >click the the small images and see result</h2>
      {/*big div display  */}
      <div className="container mt-5">
        <div>{selectedImage && <Image src={selectedImage} />}</div>

        {/* smaller images */}
        <div className="mt-5">
          {gallery.map((item) =>
            item.thumbnail.map((thumbnail, index) => (
              <Thumbnail
                key={index}
                src={thumbnail}
                onClick={() => handleClick(thumbnail)}
              />
            ))
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default GalleryDisplay;
