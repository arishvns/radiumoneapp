
import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { ApiPath, SwaggerDefinitionConstant, ApiOperationPost, ApiOperationGet,ApiOperationPut, ApiOperationDelete  } from "swagger-express-ts"
import { radiumOneService } from "../../services/radium/radiumOneServices";
import { dashboardService } from "../../services/dashboard/dashboardServices";
import { secretUtil } from '../../utils/secretutil';
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

    public async config(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDefaultApi(secretUtil.Config_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async getUrlPath(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.GetUrlPath_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async footerVersion(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.FooterVersion_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }


    //allDashboardApi

}

export const radiumControler = new RadiumControler();
