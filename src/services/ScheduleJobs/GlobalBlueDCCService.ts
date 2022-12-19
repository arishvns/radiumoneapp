import request from 'request';
import { secretUtil } from '../../utils/secretutil';
import { authenticateService } from '../authenticate/authenticateServices';

class GlobalBlueDCCService {
    
    public digitalScheduleJobsGbcc = async (req?: any) => {
       try{
        let token =  await authenticateService.authenticateToken().then( (res)=>{
            return res.token;
        }).catch((err)=>{
            return console.log("Error",err);
        })
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.gbcc_PATH + req.params.page + "?" + new URLSearchParams(req.query);
        let options = {
            method: 'GET',
            url: _url,
           
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": 'arraybuffer',
            },
            strictSSL: false
        }

        let resData: any = await new Promise((resolve) => {
            request(options, (err, res) => {
                if (err) return resolve(null);
                try {
                    resolve((res.body));
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

export const globalBlueDCCService = new GlobalBlueDCCService();