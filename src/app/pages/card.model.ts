export class Card{
    public id:number;
    public name:string;
    public occupation:string;
    public imageUrl:string;

    constructor(id:number,name:string,occupation:string,imageUrl:string){
        this.id =id;
        this.name = name;
        this.occupation = occupation;
        this.imageUrl = imageUrl; 
    }
}
