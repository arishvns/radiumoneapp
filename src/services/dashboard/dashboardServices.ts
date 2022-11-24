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
    
    public analyticsCard = async () => {
        let object={
            "transaction_analytics":
            {
                "error": "",
                "cardAmountTotal": "10",
                "newCardNumberPercent": "20",
                "returnCardNumberPercent": "23",
                "newCardNumbers": "66",
                "returnCardNumbers": "4"
            },
            "settlement_analytics":
            {
                "error": "",
                "thisMonthSettleAvg": "33",
                "lastMonthSettleAvg": "21",
                "lastSixMonthSettleAvg": "7"
            }
        }
        return object;        
    }
    public topcustomercardlist = async () => {
        let object={
            "topCustomerCountDTOList": [
              {
                "cardNumberMask": "10",
                "count": "11",
                "day": "1"
              },
              {
                "cardNumberMask": "20",
                "count": "12",
                "day": "4"
              },
              {
                "cardNumberMask": "30",
                "count": "13",
                "day": "7"
              }
            ],
            "topCustomerAmtDTOList": [
              {
                "cardNumberMask": "10",
                "amount": "11.33",
                "day": "1"
              },
              {
                "cardNumberMask": "20",
                "amount": "19.33",
                "day": "4"
              }
            ],
            "topCustomerCardTypeDTOList": [
              {
                "cardNumberMask": "23",
                "day": "12"
              },
              {
                "cardNumberMask": "23",
                "day": "12"
              }
            ]
          }
        return object;        
    }

}

export const dashboardService = new DashboardService();