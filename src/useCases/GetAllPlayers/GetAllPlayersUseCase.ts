import { Player } from "../../Entities/Player";
import { IPlayerRepository } from "../../Repositories/PlayerRepository/IPlayerRepository";

export class GetAllPlayersUseCase{
    constructor(private playerRepository : IPlayerRepository){}

    async execute() : Promise<Player[]>{
        const players = await this.playerRepository.getAll()
        return players
    }
}