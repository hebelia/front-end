export class Course {
    id?: number;
    title : string;
    institution : string;
    start : string;
    end : string;

    constructor(title:string, institution:string, start:string, end:string) {
        this.title = title;
        this.institution = institution;
        this.start = start;
        this.end = end;
    }
}


