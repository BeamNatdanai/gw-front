import fetch from 'isomorphic-unfetch';
import { BaseUrl } from '../config/url';
import { apiKey } from '../config/key';

export const signUp = async ( obj ) => {

    try {

        const response = await fetch(BaseUrl+'users/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'api-key': apiKey
            },
            body: JSON.stringify(obj)
          })
        const json = await response.json()
        if(json.status){
            return await { status:true , data:json }
        }else{
            return await { status:false , data:json }
        }

    } catch(err) {
        // catches errors both in fetch and response.json
        return await { status:false , data:err }
    }
        

}

