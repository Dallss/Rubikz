for(let i=0; i<3; i++){
    //y-edges init
    piece[0][i][0].angleOnXZPlane = 225
    piece[0][i][0].radius = radiuscorner

    piece[0][i][2].angleOnXZPlane = 315
    piece[0][i][2].radius = radiuscorner

    piece[2][i][0].angleOnXZPlane = 135
    piece[2][i][0].radius = radiuscorner

    piece[2][i][2].angleOnXZPlane = 45
    piece[2][i][2].radius = radiuscorner
    

    //y-sides init
    piece[2][i][1].angleOnXZPlane = 90
    piece[2][i][1].radius = 5

    piece[1][i][0].angleOnXZPlane = 180
    piece[1][i][0].radius = 5

    piece[0][i][1].angleOnXZPlane = 270
    piece[0][i][1].radius = 5

    piece[1][i][2].angleOnXZPlane = 0
    piece[1][i][2].radius = 5
  }

  for(let x=0; x<3; x++){
    //x-edges init
    piece[x][0][0].angleOnYZPlane = 225
    piece[x][0][0].radius = radiuscorner

    piece[x][0][2].angleOnYZPlane = 315
    piece[x][0][2].radius = radiuscorner

    piece[x][2][0].angleOnYZPlane = 135
    piece[x][2][0].radius = radiuscorner

    piece[x][2][2].angleOnYZPlane = 45
    piece[x][2][2].radius = radiuscorner

    //x-sides init
    piece[x][2][1].angleOnYZPlane = 90
    piece[x][2][1].radius = 5

    piece[x][1][0].angleOnYZPlane = 180
    piece[x][1][0].radius = 5

    piece[x][0][1].angleOnYZPlane = 270
    piece[x][0][1].radius = 5

    piece[x][1][2].angleOnYZPlane = 0
    piece[x][1][2].radius = 5
  }

  for(let z=0; z<3; z++){
    //z-edges init
    piece[0][0][z].angleOnXYPlane = 225
    piece[0][0][z].radius = radiuscorner
    

    piece[0][2][z].angleOnXYPlane = 315
    piece[0][2][z].radius = radiuscorner

    piece[2][0][z].angleOnXYPlane = 135
    piece[2][0][z].radius = radiuscorner

    piece[2][2][z].angleOnXYPlane = 45
    piece[2][2][z].radius = radiuscorner
    

    //z-sides init
    piece[2][1][z].angleOnXYPlane = 90
    piece[2][1][z].radius = 5

    piece[1][0][z].angleOnXYPlane = 180
    piece[1][0][z].radius = 5

    piece[0][1][z].angleOnXYPlane = 270
    piece[0][1][z].radius = 5

    piece[1][2][z].angleOnXYPlane = 0
    piece[1][2][z].radius = 5
  }