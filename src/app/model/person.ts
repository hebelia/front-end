export class Person {
  id?: number;
  fullname: string;
  title: string;
  pfp: string;
  about: string;
  banner: string;
  license: string;
  email: string;
  password: string;

  constructor(
    fullname: string,
    title: string,
    pfp: string,
    about: string,
    banner: string,
    license: string,
    email: string,
    password: string
  ) {
    this.fullname = fullname;
    this.title = title;
    this.pfp = pfp;
    this.about = about;
    this.banner = banner;
    this.license = license;
    this.email = email;
    this.password = password;
  }
}
