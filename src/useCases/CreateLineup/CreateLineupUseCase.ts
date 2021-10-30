import { Lineup } from "../../Entities/Lineup";
import { PlayerInLineup } from "../../Entities/PlayerInLineup";
import { ILineupRepository } from "../../Repositories/LineupRepository/ILineupRepository";
import { IPlayerInLineupRepository } from "../../Repositories/PlayerInLineupRepository/IPlayerInLineupRepository";
import { IPlayerRepository } from "../../Repositories/PlayerRepository/IPlayerRepository";
import { ICreateLineupDTO } from "./ICreateLineupDTO";

export class CreateLineupUseCase{
    constructor(
        private lineupRepository: ILineupRepository,
        private playerInLineupRepository: IPlayerInLineupRepository,
        private playerRepository: IPlayerRepository
    ){}

    async execute(lineup: ICreateLineupDTO) : Promise<Lineup>{
        const players = await this.playerRepository.findAllPlayersById(lineup.players)
        const price = players.reduce((accumulator, actual) => accumulator + actual.price, 0)

        const lineupEntity = new Lineup({ 
            team_user_id: lineup.team_user_id, 
            round_id: lineup.round_id,
            price,
            created_at: new Date()
        })

        const lineupDb = await this.lineupRepository.save(lineupEntity)
        const playersInLineupEntities = lineup.players.map(player => new PlayerInLineup({ player_id: player, lineup_id: lineupDb.id }))
        await this.playerInLineupRepository.save(playersInLineupEntities)

        lineupDb.players = players
        return lineupDb
    }
}