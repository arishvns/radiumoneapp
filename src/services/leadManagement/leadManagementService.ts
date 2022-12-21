import request from 'request';
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
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.generateLead_PATH + req.params.page+ "?" + new URLSearchParams(req.query);
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
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.preAuthFollowLead_PATH + req.params.page+ "?" + new URLSearchParams(req.query);
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

    public registerationReport = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.preAuthRegisterationReport_PATH + req.params.page+ "?" + new URLSearchParams(req.query);
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