export class Person {

    id!: number;
    fullname : string;
    title : string;
    pfp : string;
    about : string;
    banner : string;
    license : string;


    constructor(id: number, fullname: string, title: string, pfp:string,about: string,banner:string, license: string) {
        this.fullname = fullname;
        this.title = title;
        this.pfp = pfp;
        this.about = about;
        this.banner = banner;
        this.license = license;
}


}
