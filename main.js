import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import * as THREE from 'three';
import { cameraPosition } from 'three/examples/jsm/nodes/Nodes.js';

//manual imports
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


//preps
const scene = new THREE.Scene();

const cam = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, .01, 1000); //(sixe of angle perspective, aspect ratio, view frustum n, viem frustum m )

const renderer = new THREE.WebGLRenderer(
{canvas: document.querySelector('#canvas'), }
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth*0.6, window.innerHeight*0.6);


//camera
cam.position.setZ(30);
const orbitcont = new OrbitControls(cam, renderer.domElement);




//gemoetries
const cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
const cubePiece = new THREE.BoxGeometry(5,5,5);



//materials
const materialgray = new THREE.MeshBasicMaterial({color: 0x808080 ,wireframe: true });
const materialblue = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: true});

// Define materials for each face
const materialRed = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red
const materialGreen = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green
const materialBlue = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Blue
const materialYellow = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Yellow
const materialWhite = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White
const materialOrange = new THREE.MeshBasicMaterial({ color: 0xffa500 }); // Orange

//objects
const axesHelper = new THREE.AxesHelper(25);
const cubeMesh = new THREE.Mesh(cubeGeometry, materialgray);

const c000 = new THREE.Mesh(cubePiece, materialblue);
const c001 = new THREE.Mesh(cubePiece, materialblue);
const c002 = new THREE.Mesh(cubePiece, materialblue);
const c010 = new THREE.Mesh(cubePiece, materialblue);
const c011 = new THREE.Mesh(cubePiece, materialblue);
const c012 = new THREE.Mesh(cubePiece, materialblue);
const c020 = new THREE.Mesh(cubePiece, materialblue);
const c021 = new THREE.Mesh(cubePiece, materialblue);
const c022 = new THREE.Mesh(cubePiece, materialblue);

const c100 = new THREE.Mesh(cubePiece, materialblue);
const c101 = new THREE.Mesh(cubePiece, materialblue);
const c102 = new THREE.Mesh(cubePiece, materialblue);
const c110 = new THREE.Mesh(cubePiece, materialblue);
const c111 = new THREE.Mesh(cubePiece, materialblue);
const c112 = new THREE.Mesh(cubePiece, materialblue);
const c120 = new THREE.Mesh(cubePiece, materialblue);
const c121 = new THREE.Mesh(cubePiece, materialblue);
const c122 = new THREE.Mesh(cubePiece, materialblue);

const c200 = new THREE.Mesh(cubePiece, materialblue);
const c201 = new THREE.Mesh(cubePiece, materialblue);
const c202 = new THREE.Mesh(cubePiece, materialblue);
const c210 = new THREE.Mesh(cubePiece, materialblue);
const c211 = new THREE.Mesh(cubePiece, materialblue);
const c212 = new THREE.Mesh(cubePiece, materialblue);
const c220 = new THREE.Mesh(cubePiece, materialblue);
const c221 = new THREE.Mesh(cubePiece, materialblue);
const c222 = new THREE.Mesh(cubePiece, materialblue);


//set postions
c000.position.set(5,5,5);
c001.position.set(5,5,0);
c002.position.set(5,5,-5);
c010.position.set(0,5,5);
c011.position.set(0,5,0);
c012.position.set(0,5,-5);
c020.position.set(-5,5,5);
c021.position.set(-5,5,0);
c022.position.set(-5,5,-5);

c100.position.set(5,0,5);
c101.position.set(5,0,0);
c102.position.set(5,0,-5);
c110.position.set(0,0,5);
c111.position.set(0,0,0);
c112.position.set(0,0,-5);
c120.position.set(-5,0,5);
c121.position.set(-5,0,0);
c122.position.set(-5,0,-5);

c200.position.set(5,-5,5);
c201.position.set(5,-5,0);
c202.position.set(5,-5,-5);
c210.position.set(0,-5,5);
c211.position.set(0,-5,0);
c212.position.set(0,-5,-5);
c220.position.set(-5,-5,5);
c221.position.set(-5,-5,0);
c222.position.set(-5,-5,-5);

//adding to scenes
scene.add(axesHelper);
scene.add(cubeMesh);

scene.add(c000);
scene.add(c001);
scene.add(c002);
scene.add(c010);
scene.add(c011);
scene.add(c012);
scene.add(c020);
scene.add(c021);
scene.add(c022);

scene.add(c100);
scene.add(c101);
scene.add(c102);
scene.add(c110);
scene.add(c111);
scene.add(c112);
scene.add(c120);
scene.add(c121);
scene.add(c122);

scene.add(c200);
scene.add(c201);
scene.add(c202);
scene.add(c210);
scene.add(c211);
scene.add(c212);
scene.add(c220);
scene.add(c221);
scene.add(c222);

renderer.render(scene, cam);

//set colors



//gameloop
function animate (){
  requestAnimationFrame( animate );

  
  renderer.render(scene, cam);

  
}

animate();