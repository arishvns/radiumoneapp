
import { json } from 'express';
import request from 'request';
import { URLSearchParams } from 'url';
import { secretUtil } from '../../utils/secretutil';
import { authenticateService } from '../authenticate/authenticateServices';


class LeadManagementService { 

    public generateLead = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.LeadMngGenerateLead_PATH + req.params.page+ "?" + new URLSearchParams(req.query);
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
        console.log(resData);
        return resData
        } catch (err) {
            return err;
        }
    }

    public followLead = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return (err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.LeadMngFollowLead_PATH + req.params.page+ "?" + new URLSearchParams(req.query);
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

    public editFollowLead = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return (err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.LeadMngEditFollowLead_Path + req.params.id;
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

    public updateFollowLead = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return (err);
        })
        if (req?.body == null || "" || undefined){
            return console.error("There is no data in body,kindly send some data");
        }
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.LeadMngFollowLeadUpdate_PATH ;
        let options = {
            method: 'PUT',
            body: (JSON.stringify(req.body)),
            url : _url,
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": 'application/json;'
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve, reject) => {
            request(options, (err: any, res: any,body:any) => {
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
            return err;
        }
    }

    public registerationReport = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.LeadMngRegisterationReport_PATH + req.params.page+ "?" + new URLSearchParams(req.query);
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
        console.log(resData);
        return resData
        } catch (err) {
            return err;
        }
    }


}

export const leadManagementService = new LeadManagementService();