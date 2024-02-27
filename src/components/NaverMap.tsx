import { useEffect, useRef } from "react";

interface NaverMapProps {
  center?: LatLng;
  markers?: LatLng[];
}
interface LatLng {
  lat: number;
  lng: number;
}

const NaverMap = ({ center, markers }: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const naverMapInstance = useRef<naver.maps.Map | null>(null);
  const markerInstances = useRef<naver.maps.Marker[]>([]);

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

  useEffect(() => {
    if (naverMapInstance.current && markers) {
      markerInstances.current.forEach((marker) => marker.setMap(null));
      markerInstances.current = [];

      markers.forEach((marker) => {
        const markerIcon = {
          content:
            '<svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#fe875d"/>' +
            "</svg>",
          size: new naver.maps.Size(24, 24),
          anchor: new naver.maps.Point(12, 12),
        };

        const newMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(marker.lat, marker.lng),
          map: naverMapInstance.current ?? undefined,
          icon: markerIcon,
        });
        markerInstances.current.push(newMarker);
      });
    }
  }, [markers]);
  return <div ref={mapRef} className="flex absolute min-h-screen min-w-full" />;
};

export default NaverMap;
