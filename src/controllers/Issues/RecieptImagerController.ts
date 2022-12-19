
import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { receiptImagerService } from '../../services/Issues/ReceiptImagerService';

class ReceiptImagerController extends BaseController {

    public async receiptImager(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptImagerService.receiptImager(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

}

export const receiptImagerController = new ReceiptImagerController();
