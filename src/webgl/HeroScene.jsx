import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars, Sparkles, Float, ContactShadows, Image, Html, useProgress } from '@react-three/drei'
import * as THREE from 'three'

// Simple Error Boundary Component for 3D elements
class SceneErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("3D Scene Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Html center>
                    <div style={{ color: 'red', textAlign: 'center', background: 'rgba(0,0,0,0.8)', padding: '20px', borderRadius: '8px' }}>
                        <p>⚠️ 3D Content Error</p>
                        <button onClick={() => this.setState({ hasError: false })} style={{ padding: '5px 10px', marginTop: '10px' }}>Retry</button>
                    </div>
                </Html>
            );
        }
        return this.props.children;
    }
}

function SceneLoader() {
    const { progress } = useProgress()
    return <Html center><span style={{ color: 'white', fontWeight: 'bold' }}>{progress.toFixed(0)}% loaded</span></Html>
}

function FloatingImage({ position, url, rotation }) {
    return (
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
            <Image
                position={position}
                rotation={rotation}
                url={url}
                scale={[3, 2]}
                transparent
                opacity={0.9}
                side={THREE.DoubleSide}
            />
        </Float>
    )
}

function HouseModel(props) {
    const group = useRef()

    useFrame((state) => {
        if (group.current) {
            const t = state.clock.getElapsedTime()
            group.current.rotation.y = Math.sin(t / 4) * 0.1
        }
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Base */}
                <mesh position={[0, -1, 0]}>
                    <boxGeometry args={[4, 0.2, 4]} />
                    <meshStandardMaterial color="#374151" roughness={0.5} />
                </mesh>

                {/* Main Building */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[2.5, 2, 2.5]} />
                    <meshStandardMaterial color="#cbd5e1" roughness={0.2} />
                </mesh>

                {/* Roof */}
                <mesh position={[0, 1.5, 0]} rotation={[0, Math.PI / 4, 0]}>
                    <coneGeometry args={[2.2, 1.5, 4]} />
                    <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.1} />
                </mesh>

                {/* Door */}
                <mesh position={[0, -0.5, 1.26]}>
                    <planeGeometry args={[0.6, 1.2]} />
                    <meshStandardMaterial color="#1f2937" />
                </mesh>

                {/* Windows (Glowing) */}
                <mesh position={[-0.8, 0.2, 1.26]}>
                    <planeGeometry args={[0.5, 0.5]} />
                    <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={2} toneMapped={false} />
                </mesh>
                <mesh position={[0.8, 0.2, 1.26]}>
                    <planeGeometry args={[0.5, 0.5]} />
                    <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={2} toneMapped={false} />
                </mesh>
            </Float>
        </group>
    )
}

const HeroScene = () => {
    // Unsplash placeholders matching the description
    // Using stable IDs and ixlib params to ensuring availability
    const images = [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Modern House with Pool (Stable)
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Modern White House (Stable)
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Interior (Stable)
    ]

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas>
                <SceneErrorBoundary>
                    <Suspense fallback={<SceneLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
                        <ambientLight intensity={0.2} />
                        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#fbbf24" castShadow />
                        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#3b82f6" />

                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                        <Sparkles count={50} scale={8} size={4} speed={0.4} opacity={0.5} color="#f59e0b" />

                        <HouseModel />

                        {/* Floating Images "Gallery" */}
                        <FloatingImage
                            position={[-4, 1, 0]}
                            rotation={[0, 0.5, 0]}
                            url={images[0]}
                        />

                        <FloatingImage
                            position={[4, 1, 0]}
                            rotation={[0, -0.5, 0]}
                            url={images[1]}
                        />

                        <FloatingImage
                            position={[0, 3.5, -2]}
                            rotation={[0.2, 0, 0]}
                            url={images[2]}
                        />

                        <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#000000" />

                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            minPolarAngle={Math.PI / 3}
                            maxPolarAngle={Math.PI / 2}
                            autoRotate={true}
                            autoRotateSpeed={0.5}
                        />
                    </Suspense>
                </SceneErrorBoundary>
            </Canvas>
        </div>
    )
}

export default HeroScene
