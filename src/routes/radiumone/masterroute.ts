import { NextFunction, Request, Response } from "express";
import { BaseRoutes } from "../baseroutes";
import cores from "cors";
import fs from 'fs'
import { radiumControler } from '../../controllers/Radium/radiumController';
import { dashboardControler } from '../../controllers/Dashboard/dashoardController';
import { receiptsControler } from '../../controllers/Receipts/receiptsController';
import { userControler } from '../../controllers/Users/userController';
import { paymentGatewayControler } from "../../controllers/PaymentGateway/paymentGatewayController";
import { payNowController } from "../../controllers/PayNow/PayNowController";
import { preAuthController } from "../../controllers/PreAuthorisation/PreAuthController";
import { leadManagementController } from "../../controllers/Lead-Management/GenerateLeadController";
import { globalBlueDCCController } from "../../controllers/ScheduleJobs/GlobalBlueDCC";
import { adminController } from "../../controllers/Users/adminController";
import { receiptImagerService } from "../../services/Issues/ReceiptImagerService";
import { receiptImagerController } from "../../controllers/Issues/RecieptImagerController";
import { configurationController } from "../../controllers/Configuration/ConfigController";

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
            
        this.router.post('/digitalReceipt/TransactionUploadProcessReceipt/',
            (req: Request, res: Response, next: NextFunction) => {
                receiptsControler.TransactionUploadProcessReceipt(req, res, next);
            })
        
        this.router.get('/digitalReceipt/TransactionUploadReceiptCards/',
        (req: Request, res: Response, next: NextFunction) => {
            receiptsControler.TransactionUploadReceiptCards(req, res, next);
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

        this.router.get('/digitalPaymentGateway/paymentGatewaygetSettlement/'+ ':page',
            (req: Request, res: Response, next: NextFunction) => {
                paymentGatewayControler.getSettlement(req, res, next);
            })

        // Paynow routes 
        
        this.router.get('/digitalPayNow/transaction/',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowTransaction(req, res, next);
        })

        this.router.get('/digitalPayNow/PayNowTransactionWithQueryParams/'+ ':page',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowTransactionWithQueryParams(req, res, next);
        })

        this.router.get('/digitalPayNow/PayNowPaymentAdvice/'+ ':page',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.PayNowPaymentAdvice(req, res, next);
        })

        this.router.get('/digitalPayNow/getCreateData/',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowGetCreateData(req, res, next);
        })
        this.router.get('/digitalPayNow/bankstatement/',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowbankstatement(req, res, next);
        })

        this.router.get('/digitalPayNow/bankstatementWithQueryParams/'+ ':page',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowbankstatementWithQueryParams(req, res, next);
        })

        this.router.get('/digitalPayNow/getReportTypes/',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowgetReportTypes(req, res, next);
        })

        this.router.get('/digitalPayNow/getReportTypesOnSearch/'+ ':page',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowGetReportTypesOnSearch(req, res, next);
        })

        this.router.get('/digitalPayNow/getReportTypesOnSearchFilter/'+ ':page',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.payNowGetReportTypesOnSearchFilter(req, res, next);
        })

        this.router.get('/digitalPayNow/getDataMasterAccount/',
            (req: Request, res: Response, next: NextFunction) => {
                payNowController.getDataMasterAccount(req, res, next);
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

        this.router.get('/digitalPreAuth/serverDeviceHealth/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            preAuthController.serverDeviceHealth(req, res, next);
        })

        this.router.get('/digitalPreAuth/deviceList/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            preAuthController.preAuthDeviceList(req, res, next);
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

        this.router.get('/digitalLeadManagement/followLead/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            leadManagementController.followLead(req, res, next);
        })


        this.router.get('/digitalLeadManagement/registerationReport/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            leadManagementController.registerationReport(req, res, next);
        })

        // ScheduleJobs route
        this.router.get('/digitalScheduleJobs/gbcc/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            globalBlueDCCController.digitalScheduleJobsGbcc(req, res, next);
        })

        // Configuration route
        this.router.get('/digitalConfiguration/merchant/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            configurationController.merchant(req, res, next);
        })

        this.router.get('/digitalConfiguration/branchCode/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            configurationController.branchCode(req, res, next);
        })

        this.router.get('/digitalConfiguration/getInitData/',
        (req: Request, res: Response, next: NextFunction) => {
            configurationController.getInitData(req, res, next);
        })

        this.router.get('/digitalConfiguration/paymentAccount/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            configurationController.paymentAccount(req, res, next);
        })

        this.router.get('/digitalConfiguration/devices/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            configurationController.devices(req, res, next);
        })

        this.router.get('/digitalConfiguration/searchDevicesOnFilter/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            configurationController.searchDevicesOnFilter(req, res, next);
        })

        this.router.get('/digitalConfiguration/acquirerGroup/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            configurationController.acquirerGroup(req, res, next);
        })
        
        this.router.get('/digitalConfiguration/additionals/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            configurationController.additionals(req, res, next);
        })

        this.router.get('/digitalConfiguration/receiptLogo/',
        (req: Request, res: Response, next: NextFunction) => {
            configurationController.receiptLogo(req, res, next);
        })


        this.router.get('/digitalConfiguration/softwareSetup/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            configurationController.softwareSetup(req, res, next);
        })
        
        this.router.get('/digitalConfiguration/authExpirySearch',
        (req: Request, res: Response, next: NextFunction) => {
            configurationController.authExpirySearch(req, res, next);
        })

        // Users endpoints
        
        this.router.get('/adminUser/searchForm',
        (req: Request, res: Response, next: NextFunction) => {
            adminController.adminUserSearchForm(req, res, next);
        })

        this.router.post('/addNewUser',
            (req: Request, res: Response, next: NextFunction) => {
                userControler.addNewUser(req, res, next);
            })

        this.router.get('/adminUser/'+ ':page',
            (req: Request, res: Response, next: NextFunction) => {
                adminController.adminUser(req, res, next);
            })

        // Issues Path
        this.router.get('/receiptImager/'+ ':page',
        (req: Request, res: Response, next: NextFunction) => {
            receiptImagerController.receiptImager(req, res, next);
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
