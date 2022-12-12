const fsRead = require('fs/promises');
import fs from 'fs'
import crypto from 'crypto';
import path from "path";
const key = 'RCClicence';
import request from 'request';
import { secretUtil } from '../../utils/secretutil';


const iv = crypto.randomBytes(16);

class AuthenticateService {

    public authenticateToken = async (req: any) => {
        var body = {"username":"nishant@techcompiler.com","password":"A8mo#1%anSce"};
        var resObj = {};
        try {
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.AuthToken_PATH;
            let options = {
                method: 'POST',
                url: _url,
                headers: {
                    "Content-Type": 'application/json'
                },
                strictSSL: false,
                body: JSON.stringify(body)
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

export const authenticateService = new AuthenticateService();