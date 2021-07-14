import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_receiver, user_sender, message}: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UserRepositories);

        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if(user_receiver === user_sender) {
            throw new Error("Incorrect User Receiver!");
        }

        if(!userReceiverExists) {
            throw new Error("User receiver does not exists!");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService }