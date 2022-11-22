const fsRead = require('fs/promises');
import fs from 'fs'
import crypto from 'crypto';
import path from "path";
const key = 'RCClicence';
const iv = crypto.randomBytes(16);

class RadiumOneService {

    public getData = async (req?: any) => {
        var resObj = {data:'test'};
       
        return resObj;
    }


}

export const radiumOneService = new RadiumOneService();