const fsRead = require('fs/promises');
import crypto from 'crypto';
const key = 'RCClicence';
import request from 'request';
import { secretUtil } from '../../utils/secretutil';
import { authenticateService } from '../authenticate/authenticateServices';


const iv = crypto.randomBytes(16);

class UserComponentService {

    public digitalUser = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then((res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.DigitalUsers_PATH + "?" + new URLSearchParams(req.query);
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
            console.log(err);
        }
    }

    public digitalUserSearchForm = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then((res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.DigitalUsersSearchForm_PATH;
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
            console.log(err);
        }
    }

    public digitalUserInit = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then((res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.DigitalUsersInit_PATH;
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
            console.log(err);
        }
    }

    public digitalUserTimeZone = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then((res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.DigitalUsersTimeZone_PATH;
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
            console.log(err);
        }
    }





}

export const userComponentService = new UserComponentService();