import { Position } from "../../Entities/Position";

export interface IPositionRepository{
    save(position: Position) : Promise<Position>
}