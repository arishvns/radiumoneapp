
import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { receiptsService } from "../../services/receipts/receiptsServices";


class ReceiptsControler extends BaseController {

    public async transaction(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.transaction();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async exportTransaction(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.exportTransaction(req,res);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async transactionList(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.transactionList(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    } 

    public async transactionReceipt(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.transactionReceipt(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    } 
    public async transactionReceiptImg(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.transactionReceiptImg(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    } 

    public async getDate(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.getDate();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    

    public async settlementList(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.settlementList(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async TransactionUploadInit(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.TransactionUploadInit(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async TransactionUploadReceiptCards(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.TransactionUploadReceiptCards(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async TransactionUploadProcessReceipt(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.TransactionUploadProcessReceipt(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    

}

export const receiptsControler = new ReceiptsControler();
