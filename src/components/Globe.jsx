// src/routes/html-marker.jsx
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const GlobePage = ({ width, height }) => {
  const globeEl = useRef();

  const myData = [
    {
      city: 'Addis Ababa',
      lat: 9.0192,
      lng: 38.7525,
      color: '#00ff33',
      altitude: 0.1,
      size: 50,
    },
  ];

  const handleClick = (location) => {
    globeEl.current.pointOfView({ lat: location.lat, lng: location.lng, altitude: 1.5 }, 1000);
  };

  return (
    <div className='cursor-move'>
      <Globe
        ref={globeEl}
        height={height}
        width={width}
        backgroundColor="rgba(0, 0, 0, 0)"
        backgroundImageOpacity={0}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        htmlElementsData={myData}
        htmlAltitude='altitude'
        htmlElement={(data) => {
          const { city, color } = data;
          const element = document.createElement('div');
          element.style.color = color;
          element.style.cursor = 'pointer';
          element.onclick = () => handleClick(data);
          element.innerHTML = `
          <div>
            <svg viewBox="0 0 24 24" style="width:24px;margin:0 auto;">
              <path fill="currentColor" fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            <strong style="font-size:10px;text-align:center">${city}</strong>
          </div>`;
          return element;
        }}
        animateIn
      />
    </div>
  );
};

export default GlobePage;
