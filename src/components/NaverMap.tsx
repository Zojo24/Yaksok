import { useEffect, useRef } from "react";

interface NaverMapProps {
  center?: LatLng;
}
interface LatLng {
  lat: number;
  lng: number;
}

const NaverMap = ({ center }: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const naverMapInstance = useRef<naver.maps.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !naverMapInstance.current) {
      naverMapInstance.current = new naver.maps.Map(mapRef.current, {
        center: center,
        zoom: 16,
      });
    }
  }, []);

  useEffect(() => {
    if (naverMapInstance.current && center) {
      naverMapInstance.current.setCenter(center);
    }
  }, [center]);
  return <div ref={mapRef} className="flex absolute min-h-screen min-w-full" />;
};

export default NaverMap;
