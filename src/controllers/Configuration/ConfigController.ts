import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { authenticateService } from "../../services/authenticate/authenticateServices";
import { configurationService } from '../../services/Configuration/ConfigurationServices';


class ConfigurationController extends BaseController {

    public async merchant(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.merchant(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async branchCode(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.branchCode(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async getInitData(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.getInitData(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async paymentAccount(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.paymentAccount(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

}

export const configurationController = new ConfigurationController();