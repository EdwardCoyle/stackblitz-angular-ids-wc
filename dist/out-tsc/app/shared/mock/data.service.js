import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    getJsonData(fileName) {
        return this.http.get(`api/${fileName}.json`, { headers: headers });
    }
};
DataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map