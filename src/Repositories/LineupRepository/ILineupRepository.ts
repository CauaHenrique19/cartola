import { Lineup } from "../../Entities/Lineup";

export interface ILineupRepository{
    save(lineup: Lineup) : Promise<Lineup>
}