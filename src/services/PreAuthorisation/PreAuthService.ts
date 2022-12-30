import request from 'request';
import { secretUtil } from '../../utils/secretutil';
import { authenticateService } from '../authenticate/authenticateServices';
import fs from 'fs';
import { dir } from 'console';

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

    public preAuthFilterList = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then( (res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.preAuthFilterList_PATH + req.params.page + "?" + new URLSearchParams(req.query);;
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

    public preAuthDebitCardBinUpload = async (req?: any) => {
        try{
            let token =  await authenticateService.authenticateToken().then( (res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let dir = process.cwd() + '\\src\\uploads\\DebitCardBin\\';
            let file = req.files.singleFileInfo;
            let x = await new Promise((resolve, reject) => {
                
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, {
                        recursive: true
                    });
                }
                file.mv(dir + file.name, (err: any) => {
                    if (err) {
                        console.log(err);
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
    
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.preAuthDebitCardBinUpload_PATH ; 
    
            let filePath = (dir  + file.name);
            
            let formData = {
                name: 'singleFileInfo',
                singleFileInfoFile: {
                    value: fs.createReadStream(filePath),
                    options: {
                        filename: file.name,
                        contentType: 'application/octet-stream'
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
                        console.log(err);
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

    public preAuthDebitCardBinActivate = async (req?: any) => {
        try {
            let token =  await authenticateService.authenticateToken().then( (res)=>{
                return res.token;
            }).catch((err)=>{
                return console.log("Error",err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.preAuthDebitCardBinActivate_Path + req.params.id;
            let options = {
                method: 'POST',
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