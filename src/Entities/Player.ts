import { v4 as uuid } from 'uuid'
import { PlayerEnum } from '../Enums/PlayerEnum'
import { Position } from './Position'
import { Team } from './Team'

export class Player{
    public readonly id?: string
    public name: string
    public team_id: string
    public team?: Team
    public position_id: string
    public position?: Position
    public readonly key_image: string
    public readonly url_image: string
    public price: number
    public status: PlayerEnum

    constructor(props: Omit<Player, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}