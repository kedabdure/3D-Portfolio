import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { easing } from "maath";
import { OrbitControls } from "@react-three/drei";

const HeroCamera = ({ children }) => {
  const groupRef = useRef();
  const controlsRef = useRef();

  // Set the target to the center of the object (0, 0, 0 by default)
  useEffect(() => {
    // if (controlsRef.current) {
    //   controlsRef.current.target.set(0, 0, 0); // Adjust target to object center
    //   controlsRef.current.update(); // Apply changes
    // }
  }, []);

  useFrame((state, delta) => {
    // Smoothly move the camera group to position [0, 0, 8]
    // if (groupRef.current) {
    //   easing.damp3(groupRef.current.position, [0, 0, 8], 0.25, delta);
    // }
  });

  return (
    <group ref={groupRef}>
      {/* <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        target={[0, 0, 0]}
        autoRotate={true}
      /> */}
      {children}
    </group>
  );
};

export default HeroCamera;
