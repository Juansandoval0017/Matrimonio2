export interface Snake {
    [key: number] : {
        x: number;
        y: number;
    }
}

export interface Food {
    x: number;
    y: number;
}
export interface Item {
    x: number;
    y: number;
}
export interface GameData{
    "snake" : Item[],
    "food" : Item,
    "score" : number,
    "direction" : "up" | "down" | "left" | "right" | "",
    "seconds" : number,
     "gameOver" : boolean,
 
}


export interface Size {
    numOfCols: number,
    numOfRows: number,
}