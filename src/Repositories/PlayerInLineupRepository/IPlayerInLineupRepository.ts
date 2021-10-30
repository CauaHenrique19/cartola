import { PlayerInLineup } from "../../Entities/PlayerInLineup";

export interface IPlayerInLineupRepository{
    save(playerInLineup: PlayerInLineup[]) : Promise<void>
}