import { v4 as uuid } from 'uuid'

export class TeamUser{
    public readonly id?: string
    public readonly user_id: string
    public name: string
    public money: number
    public readonly created_at: string

    constructor(props: Omit<TeamUser, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}