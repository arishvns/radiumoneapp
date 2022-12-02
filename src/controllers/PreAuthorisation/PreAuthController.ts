import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { paymentGatewayService } from '../../services/paymentGateway/paymentGatewayService';
import { payNowService } from '../../services/PayNow/PayNowService';
import { preAuthService } from '../../services/PreAuthorisation/PreAuthService';


class PreAuthController extends BaseController {
 
  
    
    public async preAuthInIt(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await preAuthService.preAuthInIt();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }
    public async preAuthdeviceHealth(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await preAuthService.preAuthdeviceHealth();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }
   


   
}


export const preAuthController = new PreAuthController();