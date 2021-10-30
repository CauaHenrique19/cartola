import { PontuationInPlayer } from "../../Entities/PontuationInPlayer";
import { IPontuationInPlayerRepository } from "../../Repositories/PontuationInPlayerRepository/IPontuationInPlayerRepository";
import { ICreatePontuationInPlayerDTO } from "./ICreatePontuationInPlayerDTO";

export class CreatePontuationInPlayerUseCase{
    constructor(private pontuationInPlayerRepository: IPontuationInPlayerRepository){}

    async execute(pontuationInPlayer : ICreatePontuationInPlayerDTO) : Promise<PontuationInPlayer>{

        const pontuationInPlayerEntity = new PontuationInPlayer({ 
            player_id: pontuationInPlayer.player_id, 
            round_id: pontuationInPlayer.round_id,
            pontuation_id: pontuationInPlayer.pontuation_id,
            quantity: pontuationInPlayer.quantity,
            created_at: new Date()
        })

        const pontuationInPlayerDb = await this.pontuationInPlayerRepository.save(pontuationInPlayerEntity)
        return pontuationInPlayerDb
    }
}