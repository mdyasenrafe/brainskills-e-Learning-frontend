import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGVlem9sIiwiYSI6ImNrejdjczdodDBrZjIyb245a2JxbnIycTYifQ.JKEKh4Egu78s711OPSAAlA";

const Location = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-118.131943, 34.156113],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);
  return <div id="map"></div>;
};

export default Location;
