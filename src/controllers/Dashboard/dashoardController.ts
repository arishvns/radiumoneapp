
import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { ApiPath, SwaggerDefinitionConstant, ApiOperationPost, ApiOperationGet, ApiOperationPut, ApiOperationDelete } from "swagger-express-ts"
import { radiumOneService } from "../../services/radium/radiumOneServices";
import { dashboardService } from "../../services/dashboard/dashboardServices";
import { secretUtil } from '../../utils/secretutil';

import fs from 'fs'


class DashboardControler extends BaseController {

    public async dashboardCard(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.dashboardCard();
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async topCustomerCount(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.TopCustomerCount_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async reseller(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.Reseller_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async donutCardStats(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.DonutCardStats_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async topCustomerAmt(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.TopCustomerAmt_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async generalStats(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.GeneralStats_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async generalDayAndWeekCountStats(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.GeneralDayAndWeekCountStats_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async generalDayAndWeekVolumeStats(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.GeneralDayAndWeekVolumeStats_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async txnAnalytics(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.TxnAnalytics_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async settleSummary(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.SettleSummary_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async bankCardStats(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.BankCardStats_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    public async topCardtype(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await dashboardService.allDashboardApi(secretUtil.TopCardtype_PATH);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }



}

export const dashboardControler = new DashboardControler();
