import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial, Float, Sphere, Icosahedron } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleField = () => {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(800), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#B08968" /* Warm Brown */
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const MinimalCore = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        meshRef.current.rotation.x = Math.cos(t / 4) / 4;
        meshRef.current.rotation.y = Math.sin(t / 4) / 4;
        meshRef.current.position.y = Math.sin(t / 2) * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[1, 32, 32]}>
                <MeshDistortMaterial
                    color="#DDB892" /* Sandy Tan */
                    speed={2}
                    distort={0.3}
                    radius={1}
                />
            </Sphere>
            <Icosahedron args={[1.5, 1]} position={[0, 0, 0]}>
                <meshBasicMaterial color="#EDC4B3" wireframe opacity={0.15} transparent />
            </Icosahedron>
        </Float>
    )
}

const Scene = () => {
    return (
        <Canvas camera={{ position: [0, 0, 1.2] }} style={{ pointerEvents: 'none' }} dpr={[1, 1]} gl={{ antialias: false, powerPreference: "high-performance", alpha: true, stencil: false, depth: false }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2.5} color="#FFEDD5" />
            <pointLight position={[-10, -10, -10]} intensity={1.8} color="#E6CCB2" />

            <group position={[0.6, 0, 0]}>
                <MinimalCore />
            </group>
            <ParticleField />
        </Canvas>
    );
};

export default Scene;
