import { Injectable } from '@angular/core';

@Injectable()
export class AppParamConfig {
    Application: any;
    Session: any;
    urlHistoryMap: Map<string, string>;
    paramMap: Map<string, any[]>;
    SYS_MENU_INFO: string;
    subSystemName: string;
    pageTitle: string;
    pageTitleStack: Map<string, string>;
    userId: string;
    isSignIn: boolean;

    constructor() { }
}
