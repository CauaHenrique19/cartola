import { Player } from "../../Entities/Player";

export interface IPlayerRepository{
    save(player: Player) : Promise<Player>
}