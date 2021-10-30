import { Pontuation } from "../../Entities/Pontuation";

export interface IPontuationRepository{
    save(pontuation: Pontuation) : Promise<Pontuation>
}