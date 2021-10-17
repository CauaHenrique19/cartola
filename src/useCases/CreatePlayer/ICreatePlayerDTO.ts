import { PlayerEnum } from "../../Enums/PlayerEnum";

export interface ICreatePlayerDTO{
    name: string
    team_id: string
    position_id: string
    price: number
    status: PlayerEnum
}