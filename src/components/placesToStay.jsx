import React from "react";
import Place from "./Places";
import LocationNavbar from "./locationsNav";
import fullImagesUrls from "../../mockData.json";

const Places = () => {
  return (
    <div className="places-main-container mt-[5rem] md:mt-[7rem]">
      <LocationNavbar />
      <div className="place-container pb-8 pt-[3rem] md:pb-[5rem]">
        <Place data={fullImagesUrls} />
      </div>
    </div>
  );
};

export default Places;
