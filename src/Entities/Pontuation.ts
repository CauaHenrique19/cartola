import { v4 as uuid } from 'uuid'

export class Pontuation{
    public readonly id?: string
    public name: string
    public value: Number

    constructor(props: Omit<Pontuation, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}