import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { ApiPath, SwaggerDefinitionConstant, ApiOperationPost, ApiOperationGet, ApiOperationPut, ApiOperationDelete } from "swagger-express-ts"
import { secretUtil } from '../../utils/secretutil';
import { authenticateService } from "../../services/authenticate/authenticateServices";

import fs from 'fs'

class AuthenticateControler extends BaseController {

    public async authenticateToken(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await authenticateService.authenticateToken(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }
}