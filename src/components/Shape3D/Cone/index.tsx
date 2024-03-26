import React, { useRef, useState } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber/native'
import { MathUtils } from 'three'


interface ConeProps extends MeshProps{
  color: string;
  rotation: number;
}


export function Cone({color,rotation,...props}: ConeProps) {
    const mesh = useRef(null)
    
    useFrame((state, delta) => {
        mesh.current.rotation.x+=delta
    })
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={0.5}
        rotation={[MathUtils.degToRad(0), MathUtils.degToRad(0),MathUtils.degToRad(rotation)]}
        >
        <coneGeometry args={[1, 2, 64 ]} />
        <meshStandardMaterial color={color} />
      </mesh>
    )
  }