import express, { NextFunction, request, Request, Response } from "express";
import { BaseRoutes } from "../baseroutes";
import cores from "cors";
import path from "path";
import fs from 'fs'
import { radiumControler } from '../../controllers/Radium/radiumController';
import { dashboardControler } from '../../controllers/Dashboard/dashoardController';
import { receiptsControler } from '../../controllers/Receipts/receiptsController';
import { userControler } from '../../controllers/Users/userController';


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../swagger.json');
const customCss = fs.readFileSync((process.cwd() + "/swagger.css"), 'utf8');

class MasterRouteV1 extends BaseRoutes {
    public path = "/";
    constructor() {
        super();
        this._configure();
    }
    /**
     * @description Connect routes to their matching controller endpoints.
     */
    private _configure() {

        this.router.use(cores());
        this.router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { customCss }));

        // Dashboard endpoints
        
        this.router.get('/dashboardcard',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.dashboardCard(req, res, next);
            })
            
        this.router.get('/analyticscard',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.analyticsCard(req, res, next);
            })

        this.router.get('/topcustomercardlist',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.topcustomercardlist(req, res, next);
            })
        


        this.router.get('/topCustomerCount',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.topCustomerCount(req, res, next);
            })

        this.router.get('/reseller',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.reseller(req, res, next);
            })

        this.router.get('/donutCardStats',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.donutCardStats(req, res, next);
            })

        this.router.get('/topCustomerAmt',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.topCustomerAmt(req, res, next);
            })

        this.router.get('/generalStats',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.generalStats(req, res, next);
            })

        this.router.get('/generalDayAndWeekCountStats',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.generalDayAndWeekCountStats(req, res, next);
            })

        this.router.get('/generalDayAndWeekVolumeStats',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.generalDayAndWeekVolumeStats(req, res, next);
            })

        this.router.get('/txnAnalytics',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.txnAnalytics(req, res, next);
            })

        this.router.get('/settleSummary',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.settleSummary(req, res, next);
            })

        this.router.get('/bankCardStats',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.bankCardStats(req, res, next);
            })

        this.router.get('/topCardtype',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.topCardtype(req, res, next);
            })

        // Receipts endpoints
        this.router.get('/transaction',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.transaction(req, res, next);
            })

        this.router.get('/transactionList/'+ ':page',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.transactionList(req, res, next);
            }) 

        // Users endpoints
        this.router.post('/addNewUser',
            (req: Request, res: Response, next: NextFunction) => {
                userControler.addNewUser(req, res, next);
            })
        
         // default url
         this.router.get('/config',
            (req: Request, res: Response, next: NextFunction) => {
                radiumControler.config(req, res, next);
            })

        this.router.get('/getUrlPath',
            (req: Request, res: Response, next: NextFunction) => {
                radiumControler.getUrlPath(req, res, next);
            })

        this.router.get('/footer/version',
            (req: Request, res: Response, next: NextFunction) => {
                radiumControler.footerVersion(req, res, next);
            })

    }
}

export const masterRouteV1 = new MasterRouteV1();
