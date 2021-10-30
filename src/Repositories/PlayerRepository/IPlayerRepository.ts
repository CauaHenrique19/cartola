import { Player } from "../../Entities/Player";

export interface IPlayerRepository{
    save(player: Player) : Promise<Player>
    getAll() : Promise<Player[]>
    findAllPlayersById(ids: string[]) : Promise<Player[]>
}