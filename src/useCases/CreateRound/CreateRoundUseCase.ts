import { Round } from "../../Entities/Round";
import { IRoundRepository } from "../../Repositories/RoundRepository/IRoundRepository";
import { ICreateRoundDTO } from "./ICreateRoundDTO";

export class CreateRoundUseCase{
    constructor(private roundRepository : IRoundRepository){}

    async execute(round: ICreateRoundDTO) : Promise<Round>{
        const roundEntity = new Round({ 
            description: round.description, 
            startedAt: new Date(), 
            endAt: new Date() 
        })

        const returnedRound = this.roundRepository.save(roundEntity)
        return returnedRound
    }
}