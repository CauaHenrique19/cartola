import { v4 as uuid } from 'uuid'
import { Player } from './Player'

export class Lineup{
    public readonly id: string
    public readonly team_user_id: string
    public readonly round_id: string
    public price: Number
    public created_at: Date
    public players?: Player[]

    constructor(props: Omit<Lineup, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}