export class User{

    public id:number;
    public username:string;
    public password:string;
    public email:string;
    public roles:string;

    constructor(id:number,username:string,password:string,email:string,roles:string){
        this.id =id;
        this.username = username;
        this.password = password;
        this.email = email; 
        this.roles = roles;
    }

}

export class Login{
    public email:string;
    public username:string;
    public password:string;

    constructor(email:string,username:string,password:string){

        this.email = email;
        this.username = username;
        this.password = password

    }
    
}