import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = ' http://localhost:8080/';
    public ApiUrl = 'angular4/myChampApi/v1/';
    public URL = this.Server + this.ApiUrl;
}