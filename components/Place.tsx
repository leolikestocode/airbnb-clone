import { StarIcon } from "@heroicons/react/solid";
import { useContext, useEffect } from "react";

import { Context } from "../context/ContextProvider";
import { IPlace } from "../../types/general";

function Place({ place }: { place: IPlace }) {
  const { selectedLocation } = useContext(Context);
  const isSelectedLocation =
    place.lat === selectedLocation.latitude &&
    place.long === selectedLocation.longitude;

  useEffect(() => {
    const querySelected = document.querySelector(
      '[data-place-selected="true"]'
    );
    window.scrollTo(0, querySelected?.offsetTop - 150);
  }, [selectedLocation]);

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between py-8 border-b border-grey-500 box-content duration-150 ease-out ${
        isSelectedLocation ? "scale-100" : "scale-95"
      }`}
      data-place-selected={isSelectedLocation}
    >
      <div className="w-full h-[200px] lg:max-w-[300px] rounded-xl overflow-hidden lg:w-[inherit] relative">
        <div className="lg:w-[300px] text-[0px]">s</div>
        <img
          src={place.img}
          alt={place.title}
          className="lg:w-[300px] w-full h-[200px] object-cover absolute"
        />
      </div>
      <div className="placeContainer flex flex-col md:justify-between">
        <div>
          <p className={`${isSelectedLocation ? "font-bold" : ""}`}>
            {place.title}
          </p>
          <div className="border-b border-gray-400 w-6 my-4"></div>
          <p className="text-sm text-gray-400">{place.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="flex items-center text-bold text-sm">
              <StarIcon className="text-red-600 w-5 h-5" />{" "}
              <span>{place.star}</span>
            </p>
            <span className="text-gray-400 text-sm ml-2">
              ({place.reviews} reviews)
            </span>
          </div>
          <div>
            <p className="text-xl">
              <span className="font-bold">{place.price}</span>
              <span> / night</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
