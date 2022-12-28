const fsRead = require('fs/promises');
import fs from 'fs'
import crypto from 'crypto';
import path from "path";
const key = 'RCClicence';
import request from 'request';
import { secretUtil } from '../../utils/secretutil';
import { authenticateService } from '../authenticate/authenticateServices';


const iv = crypto.randomBytes(16);

class ConfigurationService {

    public merchant = async (req?: any) => {
        try {
            let token = await authenticateService.authenticateToken().then((res) => {
                return res.token;
            }).catch((err) => {
                return console.log("Error", err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.ConfigMerchant_Path + req.params.page + "?" + new URLSearchParams(req.query);
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

    public branchCode = async (req?: any) => {
        try {
            let token = await authenticateService.authenticateToken().then((res) => {
                return res.token;
            }).catch((err) => {
                return console.log("Error", err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.ConfigBranchCode_Path + req.params.page + "?" + new URLSearchParams(req.query);
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

    public getInitData = async (req?: any) => {
        try {
            let token = await authenticateService.authenticateToken().then((res) => {
                return res.token;
            }).catch((err) => {
                return console.log("Error", err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.ConfigPaymentAccountGetInItData_Path;
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

    public paymentAccount = async (req?: any) => {
        try {
            let token = await authenticateService.authenticateToken().then((res) => {
                return res.token;
            }).catch((err) => {
                return console.log("Error", err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.ConfigPaymentAccount_Path + req.params.page + "?" + new URLSearchParams(req.query);;
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


    public devices = async (req?: any) => {
        try {
            let token = await authenticateService.authenticateToken().then((res) => {
                return res.token;
            }).catch((err) => {
                return console.log("Error", err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.ConfigDevice_Path + req.params.page + "?" + new URLSearchParams(req.query);;
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
            return resData;
        } catch (err) {
            return err;
        }
    }

    public searchDevicesOnFilter = async (req?: any) => {
        try {
            let token = await authenticateService.authenticateToken().then((res) => {
                return res.token;
            }).catch((err) => {
                return console.log("Error", err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.ConfigDevice_Path + req.params.page + "?" + new URLSearchParams(req.query);;
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
    
    public acquirerGroup = async (req?: any) => {
        try {
            let token = await authenticateService.authenticateToken().then((res) => {
                return res.token;
            }).catch((err) => {
                return console.log("Error", err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.ConfigAcquirerGroup_Path + req.params.page + "?" + new URLSearchParams(req.query);;
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

    public additionals = async (req?: any) => {
        try {
            let token = await authenticateService.authenticateToken().then((res) => {
                return res.token;
            }).catch((err) => {
                return console.log("Error", err);
            })
            let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.ConfigAdditional_Path + req.params.page + "?" + new URLSearchParams(req.query);;
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

export const configurationService = new ConfigurationService();