import { useEffect, useRef } from "react";

interface NaverMapProps {
  center?: naver.maps.LatLng;
  markerPosition?: naver.maps.LatLng;
}

const NaverMap = ({
  center = new naver.maps.LatLng(37.5666805, 126.9784147),
  markerPosition = new naver.maps.LatLng(37.5666805, 126.9784147),
}: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new naver.maps.Map(mapRef.current, {
        center,
        zoom: 16,
      });

      const markerOptions = {
        position: markerPosition,
        map: map,
        icon: "..logo.png",
      };

      new naver.maps.Marker(markerOptions);
      return () => map.destroy();
    }
  }, [center, markerPosition]);
  return <div ref={mapRef} className="flex absolute min-h-screen min-w-full" />;
};

export default NaverMap;
