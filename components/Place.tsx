import { StarIcon } from "@heroicons/react/solid";

import { IPlace } from "../../types/general";

function Place({ place }: { place: IPlace }) {
  return (
    <div className="flex justify-between py-8 border-b border-grey-500 box-content">
      <div className="lg:max-w-[300px] lg:h-[200px] rounded-xl overflow-hidden w-[inherit] relative">
        <div className="w-[300px] text-[0px]">s</div>
        <img
          src={place.img}
          alt={place.title}
          className="w-[300px] h-[200px] object-cover absolute"
        />
      </div>
      <div
        className="flex flex-col md:justify-between"
        style={{ width: "calc(100% - 316px)" }}
      >
        <div>
          <p>{place.title}</p>
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
