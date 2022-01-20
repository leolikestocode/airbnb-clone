import { getCenter } from "geolib";
import { useState, useContext } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import { Context } from "../context/ContextProvider";
import { defaultCoordinates } from "../lib/helpers";
import { IPlace, ICoordinates, IViewport } from "../../types/general";

function Map({ places }: { places: IPlace[] }) {
  const { selectedLocation, setSelectedLocation } = useContext(Context);
  const coordinates: ICoordinates[] = places.map((p) => ({
    latitude: p.lat,
    longitude: p.long,
  }));

  const center: ICoordinates = getCenter(coordinates) || defaultCoordinates;

  const [viewport, setViewport] = useState<IViewport>({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 9,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/leolikestocode/ckymyncu200pi14k8r1zxoiw6"
      mapboxApiAccessToken={process.env.mapbox_key}
      width="100%"
      height="100%"
      onViewportChange={(viewport: IViewport) => setViewport(viewport)}
    >
      {coordinates.map((c: ICoordinates) => (
        <Marker
          key={c.latitude}
          longitude={c.longitude}
          latitude={c.latitude}
          offsetLeft={-20}
          offsetTop={-20}
          onClick={() => setSelectedLocation(c)}
        >
          <p className="cursor-pointer text-2xl text-white animate-bounce">
            📌
          </p>
        </Marker>
      ))}
      {selectedLocation.longitude && (
        <Marker
          longitude={selectedLocation.longitude}
          latitude={selectedLocation.latitude}
          offsetLeft={-40}
          offsetTop={-40}
        >
          <p className="text-sm cursor-pointer text-white bg-gray-900 p-1">
            {
              places.find(
                (p) =>
                  p.lat === selectedLocation.latitude &&
                  p.long === selectedLocation.longitude
              )?.title
            }
          </p>
        </Marker>
      )}
    </ReactMapGL>
  );
}

export default Map;
