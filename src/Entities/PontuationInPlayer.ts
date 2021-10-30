import { v4 as uuid } from 'uuid'

export class PontuationInPlayer{
    public readonly id?: string
    public player_id: string
    public pontuation_id: string
    public round_id: string 
    public quantity: Number
    public created_at: Date

    constructor(props: Omit<PontuationInPlayer, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}