import {HttpParams} from '@angular/common/http'

export const createRequestOption = (req?: any): HttpParams =>{
    let params = new HttpParams(); 
    Object.keys(req).forEach(key => {
        params.append(key, req[key] )
    })
    return params;
}