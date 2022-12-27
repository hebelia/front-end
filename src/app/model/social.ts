export class Social {
    id?:number;
    url:string;
    icon: string;

    constructor(url:string, icon:string){
        this.url = url;
        this.icon = icon;
    }
}

