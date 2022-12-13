const fsRead = require('fs/promises');
import fs from 'fs'
import crypto from 'crypto';
import path from "path";
const key = 'RCClicence';
import request from 'request';
import { secretUtil } from '../../utils/secretutil';
import { response } from 'express';
import { authenticateService } from '../authenticate/authenticateServices';


class PaymentGatewayService {

    public paymentGatewayTransaction = async (req?: any) => {  
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.PaymentGatewayTransaction_PATH;
        console.log("Token:", token);
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
            request(options, (err, res) => {
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

    public paymentGatewayTransactionWithCustomQueryParams = async (req?: any) => {    
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.PaymentGatewayTransaction_PATH + req.params.page+ "?" + new URLSearchParams(req.query); 
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
            request(options, (err, res) => {
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

    public getSettlement = async (req?: any) => {    
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.PayNowPaymentAdvice_PATH + req.params.page+ "?" + new URLSearchParams(req.query); 
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
            request(options, (err, res) => {
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

}

export const paymentGatewayService = new PaymentGatewayService();