import { Player } from "../../Entities/Player";
import { PlayerEnum } from "../../Enums/PlayerEnum";
import { IFile } from "../../Providers/IFileUpload";
import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { PlayerRepository } from "../../Repositories/PlayerRepository/PlayerRepository";
import { ICreatePlayerDTO } from "./ICreatePlayerDTO";

export class CreatePlayerUseCase{
    constructor(
        private playerRepository : PlayerRepository, 
        private awsUploadProvider : AWSUploadProvider
    ){}

    async execute(player: ICreatePlayerDTO, file: IFile) : Promise<Player>{
        const { Key, Location } = await this.awsUploadProvider.upload(file)

        const playerEntity = new Player({ 
            name: player.name, 
            team_id: player.team_id, 
            position_id: player.position_id, 
            key_image: Key,
            url_image: Location,
            price: player.price,
            status: PlayerEnum.Provavel
        })

        const returnedPlayer = await this.playerRepository.save(playerEntity)
        return returnedPlayer
    }
}