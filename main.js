import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Load textures
const textureLoader = new THREE.TextureLoader();
const wallTexture = textureLoader.load('textures/wall_texture.jpg');
const roofTexture = textureLoader.load('textures/roof_texture.jpg', (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 1); 
});
const doorTexture = textureLoader.load('textures/door_texture.jpg');
const dknobTexture = textureLoader.load('textures/door_knob_texture.jpg');
const intdknobTexture = textureLoader.load('textures/interior_door_knob_texture.jpg');
const floorTexture = textureLoader.load('textures/floor_texture.jpg');
const intdoorTexture = textureLoader.load('textures/intdoor_texture.jpg');
const bedFrameTexture = textureLoader.load('textures/bed_frame_texture.jpg');
const bedSheetTexture = textureLoader.load('textures/bed_sheet_texture.jpg');
const pillowTexture = textureLoader.load('textures/pillow_texture.jpg');
const chairTexture = textureLoader.load('textures/chair_texture.jpg');
const tableTexture = textureLoader.load('textures/table_texture.jpg');
const glassTexture = textureLoader.load('textures/glass_texture.jpg'); 
const interiorGlassTexture = textureLoader.load('textures/interior_glass_texture.jpg'); 
const platformTexture = textureLoader.load('textures/platform_texture.jpg');
const rightGlassTexture = textureLoader.load('textures/right_glass_texture.jpg');
const intrightGlassTexture = textureLoader.load('textures/interior_right_glass_texture.jpg'); 
const leftGlassTexture = textureLoader.load('textures/left_glass_texture.jpg');
const intleftGlassTexture = textureLoader.load('textures/interior_left_glass_texture.jpg');
const leftGlassFrameTexture = textureLoader.load('textures/glass_frame.jpg'); 
const rightGlassFrameTexture = textureLoader.load('textures/glass_frame.jpg');
const glassFrameTexture = textureLoader.load('textures/glass_frame.jpg');
const intglassFrameTexture = textureLoader.load('textures/glass_frame.jpg');
const intrightGlassFrameTexture = textureLoader.load('textures/glass_frame.jpg');
const intleftGlassFrameTexture = textureLoader.load('textures/glass_frame.jpg');
const fireplaceTexture = textureLoader.load('textures/fireplace_texture.jpg');
const fireTexture = textureLoader.load('textures/fire_texture.jpg');
const coalTexture = textureLoader.load('textures/coal_texture.jpg)');
const firechairTexture = textureLoader.load('textures/chair_texture.jpg');
const chimneyTexture = textureLoader.load('textures/chimney_texture.jpg');
const interiorWallTexture = textureLoader.load('textures/interior_wall_texture.jpg');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x87CEEB); 
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableRotate = true;
controls.rotateSpeed = 0.5;
controls.mouseButtons = {
    RIGHT: THREE.MOUSE.ROTATE
};

// Create Box
function createBox(width, height, depth, material, position) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const box = new THREE.Mesh(geometry, material);
    box.castShadow = true;
    box.receiveShadow = true;
    box.position.set(position.x, position.y, position.z);
    return box;
}

// House base
const baseMaterial = new THREE.MeshStandardMaterial({ map: wallTexture });
const base = createBox(7.9, 4, 7.9, baseMaterial, { x: 0, y: 2, z: 0 }); 
scene.add(base);

const platformMaterialTop = new THREE.MeshStandardMaterial({ map: platformTexture.clone() });
platformMaterialTop.map.wrapS = THREE.RepeatWrapping;
platformMaterialTop.map.wrapT = THREE.RepeatWrapping;
platformMaterialTop.map.repeat.set(10, 0.1); 

const platformMaterialSide = new THREE.MeshStandardMaterial({ map: platformTexture.clone() });
platformMaterialSide.map.wrapS = THREE.RepeatWrapping;
platformMaterialSide.map.wrapT = THREE.RepeatWrapping;
platformMaterialSide.map.repeat.set(4, 0.1); 

const platformMaterialBottom = new THREE.MeshStandardMaterial({ map: platformTexture.clone() });
platformMaterialBottom.map.wrapS = THREE.RepeatWrapping;
platformMaterialBottom.map.wrapT = THREE.RepeatWrapping;
platformMaterialBottom.map.repeat.set(4, 4); 

const platformGeometry = new THREE.BoxGeometry(8, 0.5, 8);

const platformMaterials = [
    platformMaterialSide,   
    platformMaterialSide,   
    platformMaterialTop,    
    platformMaterialBottom, 
    platformMaterialSide,   
    platformMaterialSide    
];

const platform = new THREE.Mesh(platformGeometry, platformMaterials);

platform.castShadow = true;
platform.receiveShadow = true;
platform.position.set(0, -0.25, 0); 
scene.add(platform);

// Door
const doorMaterial = new THREE.MeshStandardMaterial({ map: doorTexture });
const door = createBox(2, 2.55, 0.1, doorMaterial, { x: 1.5, y: 1.29, z: 3.96 });
scene.add(door);

// Door knob
const dknobMaterial = new THREE.MeshStandardMaterial({ map: dknobTexture });
const dknob = createBox(0.1, 0.1, 0.1, dknobMaterial, { x: 2.3, y: 1.1, z: 4.05 });
scene.add(dknob);

// Interior Door Knob
const intdknobMaterial = new THREE.MeshStandardMaterial({ map: intdknobTexture });
const intdknob = createBox(0.1, 0.1, 0.1, intdknobMaterial, { x: 2.3, y: 1.1, z: 3.55 });
scene.add(intdknob);

// Interior Door
const intdoorMaterial = new THREE.MeshStandardMaterial({ map: intdoorTexture });
const intdoor = createBox(2, 2.55, 0.1, intdoorMaterial, { x: 1.5, y: 1.29, z: 3.64 });
scene.add(intdoor);

// Outside Window
const glassMaterial = new THREE.MeshStandardMaterial({ map: glassTexture, transparent: false, opacity: 100 });
const glass = createBox(1.5, 1.2, 0.1, glassMaterial, { x: -2, y: 2, z: 3.96 });
scene.add(glass);

// Outside Window Frame
const glassFrameMaterial = new THREE.MeshStandardMaterial({ map: glassFrameTexture, transparent: false, opacity: 100 });
const glassFrame = createBox(1.7, 1.4, 0.1, glassFrameMaterial, { x: -2, y: 2, z: 3.95 });
scene.add(glassFrame);

// Interior Window
const intglassMaterial = new THREE.MeshStandardMaterial({ map: interiorGlassTexture, transparent: false, opacity: 100 });
const intglass = createBox(1.5, 1.2, 0.1, intglassMaterial, { x: -2, y: 2, z: 3.64 });
scene.add(intglass);

// Interior Window Frame
const intglassFrameMaterial = new THREE.MeshStandardMaterial({ map: intglassFrameTexture, transparent: false, opacity: 100 });
const intglassFrame = createBox(1.7, 1.4, 0.1, intglassFrameMaterial, { x: -2, y: 2, z: 3.65 });
scene.add(intglassFrame);

// Outside Right Window
const rightGlassMaterial = new THREE.MeshStandardMaterial({ map: rightGlassTexture, transparent: false, opacity: 100 });
const rightGlass = createBox(1.5, 1.2, 0.1, rightGlassMaterial, { x: 4, y: 2, z: 0 });
rightGlass.rotation.y = 1.56;  
scene.add(rightGlass);

// Outside Right Window Frame
const rightGlassFrameMaterial = new THREE.MeshStandardMaterial({ map: rightGlassFrameTexture, transparent: false, opacity: 100 });
const rightGlassFrame = createBox(1.7, 1.4, 0.1, rightGlassFrameMaterial, { x: 3.95, y: 2, z: 0 });
rightGlassFrame.rotation.y = 1.56;  
scene.add(rightGlassFrame);

// Interior Right Window
const intrightGlassMaterial = new THREE.MeshStandardMaterial({ map: intrightGlassTexture, transparent: false, opacity: 100 });
const intrightGlass = createBox(1.5, 1.2, 0.1, intrightGlassMaterial, { x: 3.7, y: 2, z: 0 });
intrightGlass.rotation.y = 1.56;  
scene.add(intrightGlass);

// Interior Right Window Frame
const intrightGlassFrameMaterial = new THREE.MeshStandardMaterial({ map: intrightGlassFrameTexture, transparent: false, opacity: 100 });
const intrightGlassFrame = createBox(1.7, 1.4, 0.1, intrightGlassFrameMaterial, { x: 3.71, y: 2, z: 0 });
intrightGlassFrame.rotation.y = 1.56;  
scene.add(intrightGlassFrame);

// Outside Left Window
const leftGlassMaterial = new THREE.MeshStandardMaterial({ map: leftGlassTexture, transparent: false, opacity: 100 });
const leftGlass = createBox(1.5, 1.2, 0.1, leftGlassMaterial, { x: -4, y: 2, z: 0 });
leftGlass.rotation.y = 1.56;  
scene.add(leftGlass);

//  Outside Left Window Frame
const leftGlassFrameMaterial = new THREE.MeshStandardMaterial({ map: leftGlassFrameTexture, transparent: false, opacity: 100 });
const leftGlassFrame = createBox(1.7, 1.4, 0.1, leftGlassFrameMaterial, { x: -3.95, y: 2, z: 0 });
leftGlassFrame.rotation.y = 1.56;  
scene.add(leftGlassFrame);

// Interior Left Window
const intleftGlassMaterial = new THREE.MeshStandardMaterial({ map: intleftGlassTexture, transparent: false, opacity: 100 });
const intleftGlass = createBox(1.5, 1.2, 0.1, intleftGlassMaterial, { x: -3.7, y: 2, z: 0 });
intleftGlass.rotation.y = 1.56; 
scene.add(intleftGlass);

// Interior Left Window Frame
const intleftGlassFrameMaterial = new THREE.MeshStandardMaterial({ map: intleftGlassFrameTexture, transparent: false, opacity: 100 });
const intleftGlassFrame = createBox(1.7, 1.4, 0.1, intleftGlassFrameMaterial, { x: -3.71, y: 2, z: 0 });
intleftGlassFrame.rotation.y = 1.56;  
scene.add(intleftGlassFrame);

// Roof Size
const roofGeometry = new THREE.ConeGeometry(5.65, 3, 4);
const roofMaterial = new THREE.MeshStandardMaterial({ map: roofTexture });
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.castShadow = true;
roof.receiveShadow = true;
roof.position.set(0, 5.5, 0);
roof.rotation.y = Math.PI / 4;
scene.add(roof);

// Floor
const floorGeometry = new THREE.PlaneGeometry(8, 8);
const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = 0.01;
floor.receiveShadow = true;
scene.add(floor);
const interiorWallMaterial = new THREE.MeshStandardMaterial({ map: interiorWallTexture, side: THREE.DoubleSide });

// Interior Walls
const interiorWall1 = createBox(0.2, 4, 7.6, interiorWallMaterial, { x: -3.8, y: 2, z: 0 }); 
const interiorWall2 = createBox(0.2, 4, 7.6, interiorWallMaterial, { x: 3.8, y: 2, z: 0 }); 
const interiorWall3 = createBox(7.6, 4, 0.2, interiorWallMaterial, { x: 0, y: 2, z: -3.8 }); 
const interiorWall4 = createBox(7.6, 4, 0.2, interiorWallMaterial, { x: 0, y: 2, z: 3.8 }); 
scene.add(interiorWall1);
scene.add(interiorWall2);
scene.add(interiorWall3);
scene.add(interiorWall4);

// Bed Frame
const bedFrameMaterial = new THREE.MeshStandardMaterial({ map: bedFrameTexture });
const bedFrame = createBox(3, 0.3, 1.5, bedFrameMaterial, { x: -2.2, y: 0.185, z: -2.5 });
scene.add(bedFrame);

// Bed Legs
const leg1 = createBox(0.1, 0.8, 0.1, bedFrameMaterial, { x: -3.65, y: 0.4, z: -1.8 });
const leg2 = createBox(0.1, 0.8, 0.1, bedFrameMaterial, { x: -0.75, y: 0.4, z: -3.2 });
const leg3 = createBox(0.1, 0.8, 0.1, bedFrameMaterial, { x: -3.65, y: 0.4, z: -3.2 });
const leg4 = createBox(0.1, 0.8, 0.1, bedFrameMaterial, { x: -0.75, y: 0.4, z: -1.8 });
scene.add(leg1);
scene.add(leg2);
scene.add(leg3);
scene.add(leg4);

// Mattress
const mattressMaterial = new THREE.MeshStandardMaterial({ map: bedSheetTexture });
const mattress = createBox(2.8, 0.3, 1.4, mattressMaterial, { x: -2.2, y: 0.4, z: -2.5 });
scene.add(mattress);

// Pillow
const pillowMaterial = new THREE.MeshStandardMaterial({ map: pillowTexture });
const pillow = createBox(0.5, 0.2, 0.9, pillowMaterial, { x: -3.2, y: 0.5, z: -2.5 });
scene.add(pillow);

// Table
const tableMaterial = new THREE.MeshStandardMaterial({ map: tableTexture });
const tableTop = createBox(0.6, 0.1, 1, tableMaterial, { x: -3, y: 0.55, z: 1.8 });
scene.add(tableTop);

const tableLeg1 = createBox(0.1, 0.5, 0.1, tableMaterial, { x: -2.8, y: 0.25, z: 1.35 });
const tableLeg2 = createBox(0.1, 0.5, 0.1, tableMaterial, { x: -2.8, y: 0.25, z: 2.25 });
const tableLeg3 = createBox(0.1, 0.5, 0.1, tableMaterial, { x: -3.21, y: 0.25, z: 2.25 });
const tableLeg4 = createBox(0.1, 0.5, 0.1, tableMaterial, { x: -3.22, y: 0.25, z: 1.35 });
scene.add(tableLeg1);
scene.add(tableLeg2);
scene.add(tableLeg3);
scene.add(tableLeg4);

// Chair Near Table
const chairMaterial = new THREE.MeshStandardMaterial({ map: chairTexture });

// Chair Seat
const chairSeatGeometry = new THREE.BoxGeometry(0.5, 0.1, 0.5);
const chairSeat = new THREE.Mesh(chairSeatGeometry, chairMaterial);
chairSeat.castShadow = true;
chairSeat.receiveShadow = true;
chairSeat.position.set(-3.05, 0.5, 0.8);
chairSeat.rotation.y = Math.PI / 2; 
scene.add(chairSeat);

// Chair Legs
const chairLegGeometry = new THREE.BoxGeometry(0.1, 0.5, 0.1);

const chairLeg1 = new THREE.Mesh(chairLegGeometry, chairMaterial);
chairLeg1.castShadow = true;
chairLeg1.receiveShadow = true;
chairLeg1.position.set(-2.85, 0.25, 0.6); 
scene.add(chairLeg1);

const chairLeg2 = new THREE.Mesh(chairLegGeometry, chairMaterial);
chairLeg2.castShadow = true;
chairLeg2.receiveShadow = true;
chairLeg2.position.set(-2.85, 0.25, 1); 
scene.add(chairLeg2);

const chairLeg3 = new THREE.Mesh(chairLegGeometry, chairMaterial);
chairLeg3.castShadow = true;
chairLeg3.receiveShadow = true;
chairLeg3.position.set(-3.25, 0.25, 0.6); 
scene.add(chairLeg3);

const chairLeg4 = new THREE.Mesh(chairLegGeometry, chairMaterial);
chairLeg4.castShadow = true;
chairLeg4.receiveShadow = true;
chairLeg4.position.set(-3.25, 0.25, 1); 
scene.add(chairLeg4);

// Chair Backrest
const chairBackGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.1);
const chairBack = new THREE.Mesh(chairBackGeometry, chairMaterial);
chairBack.castShadow = true;
chairBack.receiveShadow = true;
chairBack.position.set(-3.25, 0.8, 0.8);
chairBack.rotation.y = Math.PI / 2; 
scene.add(chairBack);
const fireplacePosition = { x: 2.5, y: 0.3, z: -3.3 };  

// Fireplace Base
const fireplaceBase = createBox(2, 0.7, 0.5, new THREE.MeshStandardMaterial({ map: fireplaceTexture }), fireplacePosition);
scene.add(fireplaceBase);

// Fireplace Back
const fireplaceBack = createBox(2, 1.3, 0.2, new THREE.MeshStandardMaterial({ map: fireplaceTexture }), { x: fireplacePosition.x, y: fireplacePosition.y + 1, z: fireplacePosition.z - 0.25 });
scene.add(fireplaceBack);

// Fireplace Sides
const fireplaceSide1 = createBox(0.2, 1.2, 0.5, new THREE.MeshStandardMaterial({ map: fireplaceTexture }), { x: fireplacePosition.x - 0.9, y: fireplacePosition.y + 0.9, z: fireplacePosition.z });
scene.add(fireplaceSide1);

const fireplaceSide2 = createBox(0.2, 1.2, 0.5, new THREE.MeshStandardMaterial({ map: fireplaceTexture }), { x: fireplacePosition.x + 0.9, y: fireplacePosition.y + 0.9, z: fireplacePosition.z });
scene.add(fireplaceSide2);

// Fireplace Top
const fireplaceTop = createBox(2.2, 0.3, 0.6, new THREE.MeshStandardMaterial({ map: fireplaceTexture }), { x: fireplacePosition.x, y: fireplacePosition.y + 1.5, z: fireplacePosition.z });
scene.add(fireplaceTop);

// Fire Inside Fireplace
const firePosition = { x: fireplacePosition.x, y: fireplacePosition.y + 0.35, z: fireplacePosition.z + 0.1 };

// Particles For Fire
const particleCount = 100; 
const particles = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 0.4; 
    particlePositions[i * 3 + 1] = Math.random() * 0.5; 
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.4; 
}

particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

const particleMaterial = new THREE.PointsMaterial({
    color: 0xffa500, 
    size: 0.1, 
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending, 
    depthWrite: false, 
});

const fireParticles = new THREE.Points(particles, particleMaterial);
fireParticles.position.set(firePosition.x, firePosition.y, firePosition.z); 
scene.add(fireParticles);

// Animation Loop For Fire
function animateParticles() {
    const positions = fireParticles.geometry.attributes.position.array;

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.random() * 0.01; 
        positions[i * 3] += (Math.random() - 0.5) * 0.005; 
        positions[i * 3 + 2] += (Math.random() - 0.5) * 0.005;

        if (positions[i * 3 + 1] > 0.5) {
            positions[i * 3 + 1] = Math.random() * 0.1; 
        }
    }

    fireParticles.geometry.attributes.position.needsUpdate = true;
    requestAnimationFrame(animateParticles);
}
animateParticles();

const coalPositionY = fireplacePosition.y + 0.4;

// Coal
function createCoalPiece(xOffset, zOffset) {
    const coalGeometry = new THREE.SphereGeometry(0.1, 8, 8); 
    const coalMaterial = new THREE.MeshStandardMaterial({ map: coalTexture }); 
    const coal = new THREE.Mesh(coalGeometry, coalMaterial);
    coal.position.set(firePosition.x + xOffset, coalPositionY, firePosition.z + zOffset);
    coal.castShadow = true;
    scene.add(coal);
}

createCoalPiece(-0.15, -0.13);  
createCoalPiece(0.15, -0.15);   
createCoalPiece(-0.1, -0.10);   
createCoalPiece(0.1, -0.1);     
createCoalPiece(0, -0.03);      

// Chair Near Fireplace
const fireplaceChairPosition = { x: fireplacePosition.x - 1.2, y: 0.3, z: fireplacePosition.z + 1.2 };
const fireplaceChairMaterial = new THREE.MeshStandardMaterial({ map: chairTexture });

// Chair Seat
const fireplaceChairSeatGeometry = new THREE.BoxGeometry(0.5, 0.1, 0.5);
const fireplaceChairSeat = new THREE.Mesh(fireplaceChairSeatGeometry, fireplaceChairMaterial);
fireplaceChairSeat.castShadow = true;
fireplaceChairSeat.receiveShadow = true;
fireplaceChairSeat.position.set(fireplaceChairPosition.x + 1, fireplaceChairPosition.y + 0.2, fireplaceChairPosition.z - -0.8);
fireplaceChairSeat.rotation.y = Math.PI; 
scene.add(fireplaceChairSeat);

// Chair Legs
const fireplaceChairLegGeometry = new THREE.BoxGeometry(0.1, 0.5, 0.1);

const fireplaceChairLeg1 = new THREE.Mesh(fireplaceChairLegGeometry, fireplaceChairMaterial);
fireplaceChairLeg1.castShadow = true;
fireplaceChairLeg1.receiveShadow = true;
fireplaceChairLeg1.position.set(fireplaceChairPosition.x + 1.2, fireplaceChairPosition.y + -0.1, fireplaceChairPosition.z - -1);
scene.add(fireplaceChairLeg1);

const fireplaceChairLeg2 = new THREE.Mesh(fireplaceChairLegGeometry, fireplaceChairMaterial);
fireplaceChairLeg2.castShadow = true;
fireplaceChairLeg2.receiveShadow = true;
fireplaceChairLeg2.position.set(fireplaceChairPosition.x + 1.2, fireplaceChairPosition.y + -0.1, fireplaceChairPosition.z - -0.6);
scene.add(fireplaceChairLeg2);

const fireplaceChairLeg3 = new THREE.Mesh(fireplaceChairLegGeometry, fireplaceChairMaterial);
fireplaceChairLeg3.castShadow = true;
fireplaceChairLeg3.receiveShadow = true;
fireplaceChairLeg3.position.set(fireplaceChairPosition.x + 0.8, fireplaceChairPosition.y + -0.1, fireplaceChairPosition.z - -0.6);
scene.add(fireplaceChairLeg3);

const fireplaceChairLeg4 = new THREE.Mesh(fireplaceChairLegGeometry, fireplaceChairMaterial);
fireplaceChairLeg4.castShadow = true;
fireplaceChairLeg4.receiveShadow = true;
fireplaceChairLeg4.position.set(fireplaceChairPosition.x + 0.8, fireplaceChairPosition.y + -0.1, fireplaceChairPosition.z - -1);
scene.add(fireplaceChairLeg4);

// Create chair backrest
const fireplaceChairBackGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.1);
const fireplaceChairBack = new THREE.Mesh(fireplaceChairBackGeometry, fireplaceChairMaterial);
fireplaceChairBack.castShadow = true;
fireplaceChairBack.receiveShadow = true;
fireplaceChairBack.position.set(fireplaceChairPosition.x + 1, fireplaceChairPosition.y + 0.5, fireplaceChairPosition.z - -1);
fireplaceChairBack.rotation.y = Math.PI; 
scene.add(fireplaceChairBack);

// Chimney
const chimneyPosition = { x: -1.5, y: 5.5, z: -1.5 }; 

// Chimney Base
const chimneyBaseGeometry = new THREE.BoxGeometry(1, 2.5, 0.5);
const chimneyMaterial = new THREE.MeshStandardMaterial({ map: chimneyTexture });
const chimneyBase = new THREE.Mesh(chimneyBaseGeometry, chimneyMaterial);
chimneyBase.position.set(chimneyPosition.x + 4, chimneyPosition.y + -0.1, chimneyPosition.z - 2);
chimneyBase.castShadow = true;
chimneyBase.receiveShadow = true;
scene.add(chimneyBase);

// Chimney Top
const chimneyTopGeometry = new THREE.BoxGeometry(1.2, 0.3, 0.6);
const chimneyTop = new THREE.Mesh(chimneyTopGeometry, chimneyMaterial);
chimneyTop.position.set(chimneyPosition.x + 4, chimneyPosition.y + 1.2, chimneyPosition.z - 2);
chimneyTop.castShadow = true;
chimneyTop.receiveShadow = true;
scene.add(chimneyTop);

// Smoke Particles For Chimney
const smokeParticleCount = 400; 
const smokeParticles = new THREE.BufferGeometry();
const smokePositions = new Float32Array(smokeParticleCount * 3);

for (let i = 0; i < smokeParticleCount; i++) {
    smokePositions[i * 3] = (Math.random() - 0.5) * 0.5; 
    smokePositions[i * 3 + 1] = Math.random() * 0.5; 
    smokePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.5; 
}

smokeParticles.setAttribute('position', new THREE.BufferAttribute(smokePositions, 3));

const smokeMaterial = new THREE.PointsMaterial({
    color: 0x3b3533,
    size: 0.12,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
});

const smoke = new THREE.Points(smokeParticles, smokeMaterial);
smoke.position.set(chimneyPosition.x + 4, chimneyPosition.y + 1., chimneyPosition.z - 2);
scene.add(smoke);

// Animation Loop For Smoke
function animateSmoke() {
    const positions = smoke.geometry.attributes.position.array;

    for (let i = 0; i < smokeParticleCount; i++) {
        positions[i * 3 + 1] += 0.01; 

        positions[i * 3] += (Math.random() - 0.5) * 0.002; 
        positions[i * 3 + 2] += (Math.random() - 0.5) * 0.002; 

        if (positions[i * 3 + 1] > 1.3) { 
            positions[i * 3 + 1] = Math.random() * 0.5; 
            positions[i * 3] = (Math.random() - 0.5) * 0.5; 
            positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5; 
        }
    }

    smoke.geometry.attributes.position.needsUpdate = true;
    requestAnimationFrame(animateSmoke);
}
animateSmoke();

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(10, 10, 10);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
scene.add(directionalLight);

const interiorLight = new THREE.PointLight(0xfff0e5, 45, 50, 1.5);
interiorLight.position.set(0, 4, 0);
interiorLight.castShadow = true;
interiorLight.shadow.bias = -0.005;
scene.add(interiorLight);

const interiorLightHelper = new THREE.PointLightHelper(interiorLight, 0.5);
scene.add(interiorLightHelper);

// Camera Position
camera.position.z = 20;
camera.position.y = 10;
camera.lookAt(0, 0, 0);

// WASD Camera Movement (Kind Of Scuffed)
const movementSpeed = 0.2;
const keysPressed = {};

window.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
});

window.addEventListener('keyup', (event) => {
    keysPressed[event.key] = false;
});

function moveCamera() {
    const moveDirection = new THREE.Vector3();

    if (keysPressed['w']) {
        moveDirection.z -= movementSpeed;
    }
    if (keysPressed['s']) {
        moveDirection.z += movementSpeed;
    }
    if (keysPressed['a']) {
        moveDirection.x -= movementSpeed;
    }
    if (keysPressed['d']) {
        moveDirection.x += movementSpeed;
    }

    camera.translateX(moveDirection.x);
    camera.translateZ(moveDirection.z);
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    moveCamera();
    renderer.render(scene, camera);
}

animate();

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});