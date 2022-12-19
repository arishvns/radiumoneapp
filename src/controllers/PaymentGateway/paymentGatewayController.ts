import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { paymentGatewayService } from '../../services/paymentGateway/paymentGatewayService';


class PaymentGatewayControler extends BaseController {

    public async paymentGatewayTransaction(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await paymentGatewayService.paymentGatewayTransaction();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }
   
    public async paymentGatewayTransactionWithCustomQueryParams(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await paymentGatewayService.paymentGatewayTransactionWithCustomQueryParams(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async getSettlement(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await paymentGatewayService.getSettlement(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }


}


export const paymentGatewayControler = new PaymentGatewayControler();