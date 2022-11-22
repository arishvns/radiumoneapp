
import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { userService } from "../../services/user/userServices";


class UserControler extends BaseController {

    public async addNewUser(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await userService.addNewUser(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }


}

export const userControler = new UserControler();
