import { v4 as uuid } from 'uuid'

export class Position{
    public readonly id?: string
    public name: string
    public abbreviation: string

    constructor(props: Omit<Position, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}