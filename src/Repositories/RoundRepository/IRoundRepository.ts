import { Round } from "../../Entities/Round";

export interface IRoundRepository{
    save(round: Round) : Promise<Round>
}