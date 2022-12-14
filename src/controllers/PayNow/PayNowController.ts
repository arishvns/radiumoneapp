import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { payNowService } from '../../services/PayNow/PayNowService';


class PayNowController extends BaseController {
 
    public async payNowTransaction(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await payNowService.payNowTransaction();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async payNowTransactionWithQueryParams(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await payNowService.payNowTransactionWithQueryParams(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async PayNowPaymentAdvice(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await payNowService.PayNowPaymentAdvice(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async payNowGetCreateData(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await payNowService.payNowGetCreateData();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }
    public async payNowbankstatement(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await payNowService.payNowbankstatement();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }
    public async payNowbankstatementWithQueryParams(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await payNowService.payNowbankstatementWithQueryParams(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }
    
    public async payNowgetReportTypes(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await payNowService.payNowgetReportTypes();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async payNowGetReportTypesOnSearch(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await payNowService.payNowGetReportTypesOnSearch(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async payNowGetReportTypesOnSearchFilter(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await payNowService.payNowGetReportTypesOnSearchFilter(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async getDataMasterAccount(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await payNowService.getDataMasterAccount();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }
   
}


export const payNowController = new PayNowController();