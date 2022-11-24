const fsRead = require('fs/promises');
import fs from 'fs'
import crypto from 'crypto';
import path from "path";
const key = 'RCClicence';
import request from 'request';
import { secretUtil } from '../../utils/secretutil';


const iv = crypto.randomBytes(16);

class DashboardService {

    public allDashboardApi = async (path: any) => {
        var resObj = {};
       try{
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + path;
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

    public allDefaultApi = async (path: any) => {
        var resObj = {};
       try{
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + path;
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
                    resolve(res.body);
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
    public dashboardCard = async () => {
    let object={
        "currencyCode": "SGD",
        "transaction_volume":
        {
            "error": "",
            "todayTxnVolume": "5.00",
            "lastWeekAvgToTodayTxnVolumeCompare": "11.00%",
            "thisWeekTxnVolume": "12.00",
            "lastWeekToThisWeekTxnVolumeCompare": "33.00%"
        },
        "transaction_count":
        {
            "error": "",
            "todayTxnCount": "7",
            "lastWeekAvgToTodayTxnCountCompare": "66.00%",
            "thisWeekTxnCount": "32",
            "lastWeekToThisWeekTxnCountCompare": "45.00%"
        },
        "new_customers_and_carbon_footprint":
        {
            "error": "",
            "monthNewCustomers": "17",
            "monthNewCustomersCompare": "23.00%",
            "yearToDateTxn": "44.0"
        }
    }
    return object;        
    }
    

}

export const dashboardService = new DashboardService();