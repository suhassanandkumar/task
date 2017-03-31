
//http://localhost:64564/

import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    public static get API_END_POINT(): string { return 'http://localhost:64564/api';}

}