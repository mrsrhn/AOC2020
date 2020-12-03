import { mapData } from "./input";

class Toboggan {
  position: { x: number; y: number };

  constructor(x: number, y: number) {
    this.position = { x: x, y: y };
  }

  move(x: number, y: number) {
    this.position = { x: this.position.x + x, y: this.position.y + y };
  }
}

class Map {
  mapData: string[];

  constructor(data: string[]) {
    this.mapData = data;
  }

  expandMap() {
    this.mapData = this.mapData.map((line) => line + line);
  }

  readMap(position: { x: number; y: number }): number {
    if (!this.mapData[position.y]) {
      return 0;
    } else {
      if (!this.mapData[position.y][position.x]) {
        this.expandMap();
      }
      switch (this.mapData[position.y][position.x]) {
        case ".":
          return 1;
        case "#":
          return 2;
        default:
          return 1;
      }
    }
  }
}

const travel = (slopeX:number,slopeY:number): number => {
  let treeCounter: number = 0;
  let destinationReached: boolean = false;
  let myToboggan = new Toboggan(0, 0);
  let myMap = new Map(mapData);

  while (!destinationReached) {
    myToboggan.move(slopeX, slopeY);
    const mapInfo: number = myMap.readMap(myToboggan.position);
    switch (mapInfo) {
      case 0:
        destinationReached = true;
        break;
      case 1:
        break;
      case 2:
        treeCounter += 1;
      default:
        break;
    }
  }
  return treeCounter;
};

const solutionOne = (): number => {
  return travel(3,1);
};

const solutionTwo= ():number => {
    return travel(1,1) * travel(3,1) * travel(5,1) * travel(7,1) * travel(1,2)
}

console.log(`Solution 1: We passed ${solutionOne()} trees`);
console.log(`Solution 2: There were ${solutionTwo()} trees`);
