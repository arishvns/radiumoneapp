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
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.Transaction_PATH;
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
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.TransactionList_PATH + req.params.page+ "?" + new URLSearchParams(req.query);
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

    public transactionReceipt = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.TransactionReceipt_PATH + req.params.trans_id;
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

    public transactionReceiptImg = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.ReceiptImgDomain + secretUtil.TransactionReceiptImg_PATH +  "=" + req.params.filename + "?" + new URLSearchParams(req.query);
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
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.settlement_Path + req.params.page+ "?" + new URLSearchParams(req.query);
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

    public TransactionUploadProcessReceipt = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let file = req.files.singleFileInfo;
        let x = await new Promise((resolve, reject) => {
            file.mv(process.cwd() + "/src/uploads/" + file.name, (err: any) => {
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

        var formData = {
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