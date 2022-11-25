const fsRead = require('fs/promises');
import fs from 'fs'
import crypto from 'crypto';
import path from "path";
const key = 'RCClicence';
import request from 'request';
import { secretUtil } from '../../utils/secretutil';


const iv = crypto.randomBytes(16);

class ReceiptsService {

    public transaction = async (req?: any) => {
        var resObj = {};
       try{
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.Transaction_PATH;
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                Authorization: "Bearer " + secretUtil.token,
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
            
        }
    }

    public transactionList = async (req?: any) => {
        var resObj = {};
       try{
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.TransactionList_PATH + req.params.page+ "?" + new URLSearchParams(req.query);
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                Authorization: "Bearer " + secretUtil.token,
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
            
        }
    }

    public getDate = async (req?: any) => {
        var resObj = {};
       try{
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.GetDatePath;
        let options = {
            method: 'GET',
            url: _url,
            headers: {
                Authorization: "Bearer " + secretUtil.token,
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
            
        }
    }

}

export const receiptsService = new ReceiptsService();