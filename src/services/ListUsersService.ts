import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

class ListUsersService {
    async execute() {
        const usersRepository = getCustomRepository(UserRepositories);

        const users = await usersRepository.find();

        return classToPlain(users);
    }
}

export { ListUsersService }