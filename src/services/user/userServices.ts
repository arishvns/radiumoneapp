const fsRead = require('fs/promises');
import fs from 'fs'
import crypto from 'crypto';
import path from "path";
const key = 'RCClicence';
import request from 'request';
import { secretUtil } from '../../utils/secretutil';


const iv = crypto.randomBytes(16);

class UserService {

    public addNewUser = async (req?: any) => {
        var resObj = {};
        try {
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.AddNewUser_PATH;
            let options = {
                method: 'POST',
                url: _url,
                headers: {
                    Authorization: "Bearer " + secretUtil.token,
                    "Content-Type": 'application/json'
                },
                strictSSL: false,
                body: JSON.stringify(req.body.addNewUser)
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

export const userService = new UserService();