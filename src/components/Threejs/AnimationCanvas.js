import React, { useRef, useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { ResizeObserver } from "@juggle/resize-observer"

import Terrain from "./Terrain"

const PerspectCamera = () => {
  const myCamera = useRef()

  const { camera } = useThree()

  useEffect(() => {
    camera.rotateX(50)
  }, [camera])

  return (
    <PerspectiveCamera
      ref={myCamera}
      makeDefault
      position={[0, 1, 2.5]}
      fov={45}
    />
  )
}

export default function AnimationCanvas() {
  return (
    <>
      <Canvas
        id="galaxyCanvas"
        resize={{ polyfill: ResizeObserver }}
        className="mainCanvas"
      >
        <PerspectCamera />
        <OrbitControls />
        <Terrain />
      </Canvas>
    </>
  )
}
