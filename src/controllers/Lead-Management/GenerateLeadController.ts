import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { paymentGatewayService } from '../../services/paymentGateway/paymentGatewayService';
import { payNowService } from '../../services/PayNow/PayNowService';
import { preAuthService } from '../../services/PreAuthorisation/PreAuthService';
import { leadManagementService } from '../../services/leadManagement/leadManagementService';


class LeadManagementController extends BaseController {
    

    public async generateLead(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await leadManagementService.generateLead(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async followLead(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await leadManagementService.followLead(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async editFollowLead(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await leadManagementService.editFollowLead(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async registerationReport(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await leadManagementService.registerationReport(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }


   
}


export const leadManagementController = new LeadManagementController();