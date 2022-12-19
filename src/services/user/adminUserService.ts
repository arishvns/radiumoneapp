const fsRead = require('fs/promises');
import fs from 'fs'
import crypto from 'crypto';
import path from "path";
const key = 'RCClicence';
import request from 'request';
import { secretUtil } from '../../utils/secretutil';
import { authenticateService } from '../authenticate/authenticateServices';


const iv = crypto.randomBytes(16);

class AdminUserService {

    public adminUser = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then((res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.AdminUser_PATH + req.params.page + req.params.page + "?" + new URLSearchParams(req.query);
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



    public adminUserSearchForm = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then((res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.SearchForm_PATH;
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

export const adminUserService = new AdminUserService();