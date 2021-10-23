import { Position } from "../../Entities/Position";
import { IPositionRepository } from "../../Repositories/PositionRepository/IPositionRepository";
import { ICreatePositionDTO } from "./ICreatePositionDTO";

export class CreatePositionUseCase{
    constructor(private positionRepository : IPositionRepository){}

    async execute(position: ICreatePositionDTO) : Promise<Position>{
        const positionEntity = new Position(position)
        const returnedPosition = await this.positionRepository.save(positionEntity)
        return returnedPosition
    }
}