import { v4 as uuid } from 'uuid'

export class Round{
    public readonly id?: string
    public description: string
    public started_at: Date
    public end_at: Date

    constructor(props: Omit<Round, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}