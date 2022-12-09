import request from 'request';
import { secretUtil } from '../../utils/secretutil';


class LeadManagementService { 

    public generateLead = async (req?: any) => {
       try{
        let _url = secretUtil.ssl + "://" + secretUtil.Domain + secretUtil.generateLead_PATH + req.params.page+ "?" + new URLSearchParams(req.query);
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
        console.log(resData);
        return resData
        } catch (err) {
            return err;
        }
    }

}

export const leadManagementService = new LeadManagementService();