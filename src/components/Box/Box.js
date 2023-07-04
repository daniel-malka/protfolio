import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from 'react-three-fiber';

function Box() {
  const meshRef = useRef(); // Create a reference to the mesh object
  const [scrollPosition, setScrollPosition] = useState(0);

  useFrame(() => {
    // Update the box position based on scrollPosition
    const boxPosition = scrollPosition / 10; // Adjust this value to control the speed and direction
    meshRef.current.position.y = boxPosition;

    // Update the box rotation based on scrollPosition
    const boxRotation = scrollPosition / 100; // Adjust this value to control the speed and direction
    meshRef.current.rotation.y = boxRotation;
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

export default Box;
