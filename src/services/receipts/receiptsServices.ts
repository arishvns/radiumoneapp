import crypto from 'crypto';
const key = 'RCClicence';
import request from 'request';
import { secretUtil } from '../../utils/secretutil';
import fs from 'fs';
import { authenticateService } from '../authenticate/authenticateServices';
var request = require("request");


const iv = crypto.randomBytes(16);

class ReceiptsService {

    public transaction = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.TransactionDate_PATH;
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": 'application/json'
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err: any, res: { body: string; }) => {
                if (err) return resolve(null);
                try {
                    resolve(JSON.parse(res.body));
                }
                catch (ex) {
                    return resolve(null);
                }
            });
        });
        return resData

        } catch (err) {
            return err;
        }
    }
    
    public exportTransaction = async (req?: any,res?:any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.exportTransaction_PATH + "?" + new URLSearchParams(req.query);
        let options = {
            method: 'GET',
            url: _url,
           
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": 'arraybuffer',
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err: any, res: { body: unknown; }) => {
                if (err) return resolve(null);
                try {
                    resolve((res.body));
                }
                catch (ex) {
                    return resolve(null);
                }
            });
        });
        return resData

        } catch (err) {
            return err;
        }
    }

    public transactionList = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })

        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.TransactionList_PATH + "?" + new URLSearchParams(req.query);
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": 'application/json'
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err: any, res: { body: string; }) => {
                if (err) return resolve(null);
                try {
                    resolve(JSON.parse(res.body));
                }
                catch (ex) {
                    return resolve(null);
                }
            });
        });
        return resData

        } catch (err) {
            return err; 
        }
    }

    public transactionReceipt = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.TransactionReceipt_PATH  + "?"  + new URLSearchParams(req.query);
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": 'application/json'
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err: any, res: { body: string; }) => {
                if (err) return resolve(null);
                try {
                    resolve(JSON.parse(res.body));
                }
                catch (ex) {
                    return resolve(null);
                }
            });
        });
        return resData

        } catch (err) {
          return err;  
        }
    }

    public transactionReceiptImg = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.ReceiptImgDomain + secretUtil.TransactionReceiptImg_PATH +  "=" + req.params.filename;
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": 'application/json'
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err: any, res: { body: unknown; }) => {
                if (err) return resolve(null);
                try {
                    resolve(res.body);
                }
                catch (ex) {
                    return resolve(null);
                }
            });
        });
        return resData

        } catch (err) {
            return err;
        }
    }

    public getDate = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.GetDate_Path;
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": 'application/json'
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err: any, res: { body: string; }) => {
                if (err) return resolve(null);
                try {
                    resolve(JSON.parse(res.body));
                }
                catch (ex) {
                    return resolve(null);
                }
            });
        });
        return resData

        } catch (err) {
            
        }
    }

    public settlementList = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.settlement_Path + "?" + new URLSearchParams(req.query);
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": 'application/json'
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err: any, res: { body: string; }) => {
                if (err) return resolve(null);
                try {
                    resolve(JSON.parse(res.body));
                }
                catch (ex) {
                    return resolve(null);
                }
            });
        });
        return resData
        } catch (err) {           
        }
    }

    public TransactionUploadInit = async (req?: any,response?:any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.TransactionUploadInit_PATH 
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": 'application/json'
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err: any, res: { body: string; }) => {
                if (err) return resolve(null);
                try {
                    resolve(JSON.parse(res.body));
                }
                catch (ex) {
                    return resolve(null);
                }
            });
        });
        return resData
        } catch (err) {           
        }
    }

    public TransactionUploadReceiptCards = async (req?: any,response?:any) => {
       let TransactionUploadReceiptCardsResult = [
            {
                "cardTypeId": 1,
                "cardProviderName": "MASTERCARD",
                "cardProviderCode": "MC",
                "cardTypeName": "MASTERCARD",
                "cardRegex": "MC,MasterCard,Master Card,Master",
                "cardNumberMask": "16NNNN NN** **** NNNN,19NNNN NN** **** NNNN NNN",
                "description": "16/19"
            },
            {
                "cardTypeId": 2,
                "cardProviderName": "VISA",
                "cardProviderCode": "VI",
                "cardTypeName": "VISA",
                "cardRegex": "Visa Debit,Visa Credit,Visa,VI",
                "cardNumberMask": "16NNNN NN** **** NNNN,19NNNN NN** **** NNNN NNN",
                "description": "16/19"
            },
            {
                "cardTypeId": 3,
                "cardProviderName": "AMEX",
                "cardProviderCode": "AX",
                "cardTypeName": "AMEX",
                "cardRegex": "AMEX",
                "cardNumberMask": "NNNN NN**** *NNNN",
                "description": "15"
            },
            {
                "cardTypeId": 4,
                "cardProviderName": "DINERS CARD",
                "cardProviderCode": "DN",
                "cardTypeName": "DINERS",
                "cardRegex": "DINERS",
                "cardNumberMask": "NNNNN NN** *NNNN,NNNN NN**** *NNNN",
                "description": "14,16"
            },
            {
                "cardTypeId": 5,
                "cardProviderName": "UNION PAY",
                "cardProviderCode": "CU",
                "cardTypeName": "CUP",
                "cardRegex": "CUP,UNIONPAY,UP",
                "cardNumberMask": "NNNN NN** **** NNNN",
                "description": "16"
            },
            {
                "cardTypeId": 6,
                "cardProviderName": "JCB CARD",
                "cardProviderCode": "JC",
                "cardTypeName": "JCB",
                "cardRegex": "JCB",
                "cardNumberMask": "15NNNN NN** **** NNN,16NNNN NN** **** NNNN",
                "description": "15/16"
            },
            {
                "cardTypeId": 7,
                "cardProviderName": "DISCOVER",
                "cardProviderCode": "DS",
                "cardTypeName": "DISCOVER",
                "cardRegex": "DISCOVER",
                "cardNumberMask": "NNNN NN***** *NNNN",
                "description": "16"
            },
            {
                "cardTypeId": 8,
                "cardProviderName": "SMARTPAY",
                "cardProviderCode": "SP",
                "cardTypeName": "SMARTPAY",
                "cardRegex": "SMARTPAY",
                "cardNumberMask": "NNNN NN***** *NNNN",
                "description": "16"
            },
            {
                "cardTypeId": 9,
                "cardProviderName": "BERNICE",
                "cardProviderCode": "BN",
                "cardTypeName": "BERNICE",
                "cardRegex": "Bernice,BER,Chuan,Bernice Chuan",
                "cardNumberMask": "NNNN NN***** *NNNN",
                "description": "16"
            },
            {
                "cardTypeId": 10,
                "cardProviderName": "1",
                "cardProviderCode": "1",
                "cardTypeName": "1",
                "cardRegex": "1",
                "cardNumberMask": "NNNN NN***** *NNNN",
                "description": "16"
            },
            {
                "transTypeId": 1,
                "transType": "zx"
            },
            {
                "transTypeId": 2,
                "transType": "222"
            },
            {
                "transTypeId": 3,
                "transType": "PREAUTH"
            },
            {
                "transTypeId": 8,
                "transType": "SALE"
            },
            {
                "transTypeId": 10,
                "transType": "PRE-AUTH"
            },
            {
                "transTypeId": 11,
                "transType": "PREAUTH VOID"
            },
            {
                "transTypeId": 13,
                "transType": "PREAUTH INCRE"
            },
            {
                "transTypeId": 14,
                "transType": "PREAUTH DECRE"
            },
            {
                "transTypeId": 15,
                "transType": "OFFLINE *"
            },
            {
                "transTypeId": 17,
                "transType": "OFFLINE"
            },
            {
                "transTypeId": 27,
                "transType": "VOID(SALE)"
            },
            {
                "transTypeId": 119,
                "transType": "test11111111111"
            },
            {
                "transTypeId": 121,
                "transType": "PAYNOW"
            },
            {
                "transTypeId": 148,
                "transType": "CONTACTLESS SALE"
            },
            {
                "transTypeId": 247,
                "transType": "SALE COMPLETION"
            },
            {
                "transTypeId": 248,
                "transType": "CARD VERIFY"
            },
            {
                "transTypeId": 360,
                "transType": "PRE-AUTH TOPUP"
            },
            {
                "transTypeId": 395,
                "transType": "VOID SALE"
            },
            {
                "transTypeId": 500,
                "transType": "REFUND PURCHASE"
            },
            {
                "transTypeId": 516,
                "transType": "ADJUST"
            }
        ]
        return TransactionUploadReceiptCardsResult;
    }

    public TransactionUploadProcessReceipt = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let file = req.files.singleFileInfo;
        let x = await new Promise((resolve, reject) => {
            file.mv(process.cwd() + "\\src\\uploads\\" + file.name, (err: any) => {
                if (err) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            })
        });
        if (!x) {
            return { ack: '2', msg: "Unexpected error occured! Please try again" }
        }

        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.TransactionUploadProcessReceipt_PATH ; 

        let filePath = (process.cwd() + "\\src\\uploads\\" + file.name);

        let formData = {
            name: 'singleFileInfo',
            singleFileInfoFile: {
                value: fs.createReadStream(filePath),
                options: {
                    filename: file.name,
                    contentType: 'image/png'
                }
            }
        };

        let options = {
            method: 'POST',
            url: _url,
            formData: formData,
            headers: {
                    'Cache-Control': 'no-cache',
                    authorization: "Bearer " + token,
                    'Content-type':'application/x-www-form-urlencoded'
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            strictSSL: false,
        }
        
        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err: any, res: any) => {
                if (err) {
                    resolve('null')
                }
                resolve(JSON.parse(res.body));
            });
        });  
        return resData
        } catch (err) {
            return err;      
        }
    }

}

export const receiptsService = new ReceiptsService();