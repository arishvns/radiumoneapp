
import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { userService } from "../../services/user/userServices";
import { adminUserService } from '../../services/user/adminUserService';


class AdminController extends BaseController {

    public async adminUser(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await adminUserService.adminUser(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }
    public async adminUserSearchForm(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await adminUserService.adminUserSearchForm(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }




}

export const adminController = new AdminController();
