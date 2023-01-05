
import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { userService } from "../../services/user/userServices";
import { adminUserService } from '../../services/user/adminUserService';
import { userComponentService } from '../../services/UserComponent/UserComponentService';


class UserComponentController extends BaseController {

    public async adminUser(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await adminUserService.adminUser(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async digitalUser(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await userComponentService.digitalUser(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async digitalUserInit(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await userComponentService.digitalUserInit(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async digitalUserTimeZone(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await userComponentService.digitalUserTimeZone(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async digitalUserSearchForm(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await userComponentService.digitalUserSearchForm(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }


}

export const userComponentController = new UserComponentController();
