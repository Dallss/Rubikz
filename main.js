import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import * as THREE from 'three'
import { cameraPosition, instance, sqrt } from 'three/examples/jsm/nodes/Nodes.js'

//manual imports
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { degToRad, radToDeg } from 'three/src/math/MathUtils.js'


//helper functions
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180)
}


//preps
const scene = new THREE.Scene()
const cam = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, .01, 1000) //(sixe of angle perspective, aspect ratio, view frustum n, viem frustum m )

const renderer = new THREE.WebGLRenderer(
{canvas: document.querySelector('#canvas'), }
)

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth*0.6, window.innerHeight*0.6)

//camera
cam.position.setZ(30)
const orbitcont = new OrbitControls(cam, renderer.domElement)

//gemoetries
const cubePiece = new THREE.BoxGeometry(4.5,4.5,4.5)

//materials
const materialgray = new THREE.MeshBasicMaterial({color: 0x808080 ,wireframe: true })

const color = [
  new THREE.MeshBasicMaterial({ color: 0xFFFFFF }), // white     +x
  new THREE.MeshBasicMaterial({ color: 0xFFD500 }), // yellow    -x
  new THREE.MeshBasicMaterial({ color: 0xB90000 }), // red       +y
  new THREE.MeshBasicMaterial({ color: 0xFF5900 }), // Orange    -y
  new THREE.MeshBasicMaterial({ color: 0x0045AD }), // blue      +z
  new THREE.MeshBasicMaterial({ color: 0x009B48 })  // green     -z
]

//objects
const axesHelper = new THREE.AxesHelper(25)
scene.add(axesHelper)


function init(){
  
  window.piece = [];  // Declare piece as a global array
  for (let i = 0, x = -5; i < 3; i++, x += 5) {
    piece[i] = []
    for (let j = 0, y = -5; j < 3; j++, y += 5) {
      piece[i][j] = []
      for (let k = 0, z = -5; k < 3; k++, z += 5) {
        piece[i][j][k] = new THREE.Mesh(cubePiece, color)
        piece[i][j][k].position.set(x,y,z)
        scene.add(piece[i][j][k])
      }
    }
  }

  //corners init
  piece[0][0][0].angleOnXZPlane = 225
  piece[0][2][0].angleOnXZPlane = 225

  piece[0][0][2].angleOnXZPlane = 315
  piece[0][2][2].angleOnXZPlane = 315

  piece[2][0][0].angleOnXZPlane = 135
  piece[2][2][0].angleOnXZPlane = 135

  piece[2][0][2].angleOnXZPlane = 45
  piece[2][2][2].angleOnXZPlane = 45


  //sides init
  piece[2][0][1].angleOnXZPlane = 90
  piece[2][2][1].angleOnXZPlane = 90

  piece[1][0][0].angleOnXZPlane = 180
  piece[1][2][0].angleOnXZPlane = 180

  piece[0][0][1].angleOnXZPlane = 270
  piece[0][2][1].angleOnXZPlane = 270

  piece[1][0][2].angleOnXZPlane = 0
  piece[1][2][2].angleOnXZPlane = 0
}



//keep track of angle
function rotateOneDegree(piece, radius, angle){

  piece.position.x = radius * Math.sin(degToRad(angle))
  piece.position.z = radius * Math.cos(degToRad(angle))
  piece.rotation.y += degToRad(1)
  piece.angleOnXZPlane += 1
  
}

function turn(clockwise){

  //corners
  let initx = piece[2][2][2].position.x
  let initz = piece[2][2][2].position.z

  let radius = Math.sqrt(Math.pow(initx,2)+Math.pow(initz,2))

  let angle = piece[2][2][2].angleOnXZPlane
  rotateOneDegree(piece[2][2][2], radius, angle)

  angle = piece[0][2][2].angleOnXZPlane
  rotateOneDegree(piece[0][2][2], radius, angle)

  angle = piece[2][2][0].angleOnXZPlane
  rotateOneDegree(piece[2][2][0], radius, angle)

  angle = piece[0][2][0].angleOnXZPlane
  rotateOneDegree(piece[0][2][0], radius, angle)


  //sides
  radius = 5
  angle = piece[2][2][1].angleOnXZPlane
  rotateOneDegree(piece[2][2][1], radius, angle)

  angle = piece[0][2][1].angleOnXZPlane
  rotateOneDegree(piece[0][2][1], radius, angle)

  angle = piece[1][2][0].angleOnXZPlane
  rotateOneDegree(piece[1][2][0], radius, angle)

  angle = piece[1][2][2].angleOnXZPlane
  rotateOneDegree(piece[1][2][2], radius, angle)


  //mid
  piece[1][2][1].rotation.y += degToRad(1)

}


let turning = false

function animate (){
  requestAnimationFrame( animate )
  
  if(turning){
    
    if(turnby == 1){
      turning = false
    }
    turn(true)
    turnby -= 1
  }

  renderer.render(scene, cam)
}

init()
animate()

let turnby = 0
//event listeners
document.addEventListener("DOMContentLoaded", () => {
  const rotateButton = document.querySelector(".rotate")
  rotateButton.addEventListener("click", onpress)

  function onpress() {
    if(!turning){
      console.log("Button clicked!")
      turning = true
      turnby = 90
    }
  }
})