import { v4 as uuid } from 'uuid'

export class PlayerInLineup{
    public readonly id?: string
    public player_id: string
    public lineup_id: string

    constructor(props: Omit<PlayerInLineup, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}