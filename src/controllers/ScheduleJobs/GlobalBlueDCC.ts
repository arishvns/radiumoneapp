
import { NextFunction, Response } from 'express';
import { BaseController } from "../basecontroller";
import { IFilteredRequest } from "../../interfaces";
import { globalBlueDCCService } from '../../services/ScheduleJobs/GlobalBlueDCCService';

class GlobalBlueDCCController extends BaseController {

    public async digitalScheduleJobsGbcc(req: IFilteredRequest, res: Response, next: NextFunction) {
        try {
            const requestResult = await globalBlueDCCService.digitalScheduleJobsGbcc(req);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }
    
}

export const globalBlueDCCController = new GlobalBlueDCCController();
