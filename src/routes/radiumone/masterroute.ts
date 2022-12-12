import express, { NextFunction, request, Request, Response } from "express";
import { BaseRoutes } from "../baseroutes";
import cores from "cors";
import fs from 'fs'
import { radiumControler } from '../../controllers/Radium/radiumController';
import { dashboardControler } from '../../controllers/Dashboard/dashoardController';
import { receiptsControler } from '../../controllers/Receipts/receiptsController';
import { userControler } from '../../controllers/Users/userController';
import { paymentGatewayControler } from "../../controllers/PaymentGateway/paymentGatewayController";
import { payNowService } from "../../services/PayNow/PayNowService";
import { payNowController } from "../../controllers/PayNow/PayNowController";
import { preAuthController } from "../../controllers/PreAuthorisation/PreAuthController";
import { leadManagementController } from "../../controllers/Lead-Management/GenerateLeadController";


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

        this.router.get('/dashboard/dashboardCard',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.dashboardCard(req, res, next);
            })

        this.router.get('/dashboard/analyticsCard',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.analyticsCard(req, res, next);
            })

        this.router.get('/dashboard/topCustomerCardList',
            (req: Request, res: Response, next: NextFunction) => {
                dashboardControler.topcustomercardlist(req, res, next);
            })

        // Receipts endpoints
        this.router.get('/digitalReceipt/transaction',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.transaction(req, res, next);
            })

        this.router.get('/digitalReceipt/exportTransaction/',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.exportTransaction(req, res, next);
            })          

        this.router.get('/digitalReceipt/transactionList/' + ':page',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.transactionList(req, res, next);
            })

        this.router.get('/digitalReceipt/transactionReceipt/' + ':trans_id',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.transactionReceipt(req, res, next);
            })

        this.router.get('/digitalReceipt/transactionReceiptImg/' + ':filename',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.transactionReceiptImg(req, res, next);
            })

        this.router.get('/digitalReceipt/TransactionUploadInit/',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.TransactionUploadInit(req, res, next);
            })
            
        this.router.get('/digitalReceipt/TransactionUploadProcessReceipt/',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.TransactionUploadProcessReceipt(req, res, next);
            })
      
        this.router.get('/digitalReceipt/settlement',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.getDate(req, res, next);
            })

        this.router.get('/digitalReceipt/settlementList/' + ':page',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.settlementList(req, res, next);
            })

        // payment gateway routes 
        this.router.get('/digitalPaymentGateway/transaction/',
            (req: Request, res: Response, next: NextFunction) => {
                paymentGatewayControler.paymentGatewayTransaction(req, res, next);
            })

        this.router.get('/digitalPaymentGateway/paymentGatewayTransactionWithCustomQueryParams/'+ ':page',
            (req: Request, res: Response, next: NextFunction) => {
                paymentGatewayControler.paymentGatewayTransactionWithCustomQueryParams(req, res, next);
            })

        // Paynow routes 
        
        this.router.get('/digitalPayNow/transaction/',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowTransaction(req, res, next);
        })
        this.router.get('/digitalPayNow/getCreateData/',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowGetCreateData(req, res, next);
        })
        this.router.get('/digitalPayNow/bankstatement/',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowbankstatement(req, res, next);
        })
        this.router.get('/digitalPayNow/getReportTypes/',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowgetReportTypes(req, res, next);
        })

        //PreAuthorisation Route

        this.router.get('/digitalPreAuth/inIt/',
        (req: Request, res: Response, next: NextFunction) => {
            preAuthController.preAuthInIt(req, res, next);
        })

        this.router.get('/digitalPreAuth/deviceHealth/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            preAuthController.preAuthdeviceHealth(req, res, next);
        })

        this.router.get('/digitalPreAuth/debitCardBin/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            preAuthController.preAuthDebitCardBin(req, res, next);
        })

        // LeadManagement Route

        this.router.get('/digitalLeadManagement/generateLead/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            leadManagementController.generateLead(req, res, next);
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
