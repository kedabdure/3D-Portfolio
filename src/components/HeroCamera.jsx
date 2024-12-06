import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { easing } from "maath"

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef()

  useFrame((state, delta) => {
    easing.damp3(groupRef.current.position, [0, 0, 8], 0.25, delta);

    if (!isMobile) {
      // Clamp the x-rotation to be between -Math.PI/2 and Math.PI/2 (half a circle)
      const clampedX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, -state.pointer.y / 3));

      // Apply the dampE function with the clamped value for rotation
      easing.dampE(groupRef.current.rotation, [clampedX, state.pointer.x / 5, 0]);
    }

  })

  return (
    <group ref={groupRef}>
      {children}
    </group>
  )
}

export default HeroCamera
