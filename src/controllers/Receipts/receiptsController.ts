
import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { ApiPath, SwaggerDefinitionConstant, ApiOperationPost, ApiOperationGet,ApiOperationPut, ApiOperationDelete  } from "swagger-express-ts"
import { radiumOneService } from "../../services/radium/radiumOneServices";
import { dashboardService } from "../../services/dashboard/dashboardServices";
import { receiptsService } from "../../services/receipts/receiptsServices";



import fs from 'fs'


class ReceiptsControler extends BaseController {

    public async transaction(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.transaction();
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

    public async getDate(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await receiptsService.getDate();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

}

export const receiptsControler = new ReceiptsControler();
