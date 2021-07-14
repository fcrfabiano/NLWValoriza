import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password, admin } = request.body;

        const createrUserService = new CreateUserService();

        const user = await createrUserService.execute({
            name,
            email,
            password,
            admin
        });

        return response.json(user);
    }
}

export { CreateUserController };