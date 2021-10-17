import { Position } from "../../Entities/Position";
import { PositionRepository } from "../../Repositories/PositionRepository/PositionRepository";
import { ICreatePositionDTO } from "./ICreatePositionDTO";

export class CreatePositionUseCase{
    constructor(private positionRepository : PositionRepository){}

    async execute(position: ICreatePositionDTO) : Promise<Position>{
        const positionEntity = new Position(position)
        const returnedPosition = await this.positionRepository.save(positionEntity)
        return returnedPosition
    }
}