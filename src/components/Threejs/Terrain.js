import React, { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import fragmentShader from "./shaders/fragment.glsl"
import vertexShader from "./shaders/vertex.glsl"

const Terrain = () => {
  // const [count, setCount] = useState(0)
  const shaderRef = useRef()
  const meshRef = useRef()
  const geometryRef = useRef()
  const [count, positions, colors, randoms, scales] = useMemo(() => {
    for (let i = 0; i < count; i++) {
      randoms[i] = Math.random()
    }
    return [count, positions, colors, randoms, scales]
  }, [])

  // useEffect(() => {
  //   setCount(geometryRef.current.attributes.position.count)
  // }, [])

  const renderer = useThree(state => state.gl)
  const clock = useThree(state => state.clock)

  useFrame(() => {
    meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime()
  })
  const shaderData = useMemo(
    () => ({
      uniforms: {
        uSize: { value: 20 * renderer.getPixelRatio() },
        uFrequency: { value: new THREE.Vector2(10, 5) },
        uBigWaveElevation: { value: 0.15 },
        uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
        uBigWavesSpeed: { value: 0.75 },
        uTime: { value: 0 },
        uDepthColor: { value: new THREE.Color("#021527") },
        uSurfaceColor: { value: new THREE.Color("#fd9d5c") },
      },
      fragmentShader,
      vertexShader,
    }),
    [renderer]
  )
  return (
    <mesh ref={meshRef} rotation-x={-Math.PI * 0.5}>
      {/* <bufferGeometry attach="geometry">
        (
         <bufferAttribute
          attachObject={["attributes", "position"]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        /> 
        )
      </bufferGeometry> */}
      <planeBufferGeometry ref={geometryRef} args={[4, 4, 256, 256]} />
      <shaderMaterial
        ref={shaderRef}
        {...shaderData}
        transparent={true}
        wireframe={true}
      />
    </mesh>
  )
}

export default Terrain
