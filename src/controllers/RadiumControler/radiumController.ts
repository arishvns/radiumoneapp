
import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { ApiPath, SwaggerDefinitionConstant, ApiOperationPost, ApiOperationGet,ApiOperationPut, ApiOperationDelete  } from "swagger-express-ts"
import { radiumOneService } from "../../services/radium/radiumOneServices";
import fs from 'fs'

@ApiPath({
    path: "/api",
    name: "Virtual Machine UniqueId",
    security: { apiKeyHeader: [] },
})

class RadiumControler extends BaseController {

    public async getUniqueID(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await radiumOneService.getData(req.body);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

}

export const radiumControler = new RadiumControler();
