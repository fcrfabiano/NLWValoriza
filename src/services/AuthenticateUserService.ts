import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories";

import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UserRepositories);

        const user = await usersRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/Password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect!");
        }

        const token = sign({
            email: user.email
        }, "f9e7797f456fd4acc03f01aea83fd4df", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService }