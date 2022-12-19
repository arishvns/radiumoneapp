import request from 'request';
import { secretUtil } from '../../utils/secretutil';
import { authenticateService } from '../authenticate/authenticateServices';


class PreAuthService {

    public preAuthInIt = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then( (res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.preAuthInIt_PATH;
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

    public preAuthdeviceHealth = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then( (res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.preAuthDeviceHealth_PATH + req.params.page + "?" + new URLSearchParams(req.query);
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

    public serverDeviceHealth = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then((res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.preAuthServerHealth_PATH + req.params.page + "?" + new URLSearchParams(req.query);
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

    public preAuthDeviceList = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then( (res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.preAuthLocalServer_PATH + req.params.page + "?" + new URLSearchParams(req.query);
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

    public preAuthDebitCardBin = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then( (res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.preAuthDebitCardBin_PATH + req.params.page + "?" + new URLSearchParams(req.query);
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

export const preAuthService = new PreAuthService();