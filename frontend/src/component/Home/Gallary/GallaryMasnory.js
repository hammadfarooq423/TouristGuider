import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { GallaryData } from "./GallaryData";
const GallaryMasnory = () => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1rem">
          {GallaryData.map((img, index) => {
            return (
              <>
                <img
                className="masnory__img"
                  key={index}
                  src={img}
                  alt="gallary"
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "10px",
                  }}
                />
              </>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default GallaryMasnory;
