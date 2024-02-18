import { useEffect, useRef } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

const NaverMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new window.naver.maps.Map(mapRef.current, {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    });
    // 지도 위의 UI 요소 숨기기
    map.setOptions("scaleControl", false);
    map.setOptions("logoControl", false);
    map.setOptions("mapDataControl", false);
    map.setOptions("zoomControl", false);
    map.setOptions("mapTypeControl", false);
  }, []);

  return <div ref={mapRef} className="flex absolute min-h-screen min-w-full" />;
};

export default NaverMap;
