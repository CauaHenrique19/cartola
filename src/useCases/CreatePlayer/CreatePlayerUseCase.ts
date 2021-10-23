import { Player } from "../../Entities/Player";
import { PlayerEnum } from "../../Enums/PlayerEnum";
import { IFile, FileUploader } from "../../Providers/IFileUpload";
import { IPlayerRepository } from "../../Repositories/PlayerRepository/IPlayerRepository";
import { IPositionRepository } from "../../Repositories/PositionRepository/IPositionRepository";
import { ITeamRepository } from "../../Repositories/TeamRepository/ITeamRepository";
import { ICreatePlayerDTO } from "./ICreatePlayerDTO";

export class CreatePlayerUseCase{
    constructor(
        private playerRepository : IPlayerRepository,
        private teamRepository : ITeamRepository,
        private positionRepository: IPositionRepository, 
        private awsUploadProvider : FileUploader
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
        const teamPlayer = await this.teamRepository.getById(returnedPlayer.team_id)
        const positionPlayer = await this.positionRepository.getById(returnedPlayer.position_id)

        returnedPlayer.team = teamPlayer
        returnedPlayer.position = positionPlayer

        return returnedPlayer
    }
}