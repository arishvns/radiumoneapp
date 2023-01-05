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

    public async devices(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.devices(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async searchDevicesOnFilter(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.searchDevicesOnFilter(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async acquirerGroup(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.acquirerGroup(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async additionals(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.additionals(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async softwareSetup(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.softwareSetup(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async receiptLogo(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.receiptLogo(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async authExpirySearch(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.authExpirySearch(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }


    public async blockedDevices(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.blockedDevices(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async tokenAccess(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.tokenAccess(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async paynowDevices(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await configurationService.paynowDevices(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

}

export const configurationController = new ConfigurationController();