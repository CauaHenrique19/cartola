import { PontuationInPlayer } from "../../Entities/PontuationInPlayer";

export interface IPontuationInPlayerRepository{
    save(pontuationInPlayer: PontuationInPlayer) : Promise<PontuationInPlayer>
}