export class Job {
    id?:number;
    place: string;
    title:string;
    description:string;
    start: string;
    end: string;
    
    constructor( place:string, title:string, description:string, start:string, end:string){
        this.place = place;
        this.title = title;
        this.description = description;
        this.start = start;
        this.end = end;
    }
}
