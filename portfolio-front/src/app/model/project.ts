export class Project {
    id?:number;
    url: string;
    title:string;
    description:string;
    start: string;
    end: string;

    constructor( url:string, title:string, description:string, start:string, end:string){
        this.url = url;
        this.title = title;
        this.description = description;
        this.start = start;
        this.end = end;
    }
}
