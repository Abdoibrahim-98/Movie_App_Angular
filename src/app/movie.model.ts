export class Movie{
    public name:string;
    public image:string;
    public rating:number;
    public type:string;
    public year:number;
    public duration:number;

    constructor(name:string, image:string, rating:number, type:string, year:number, duration:number){
        this.name = name;
        this.image = image;
        this.rating = rating; 
        this.type = type;
        this.year = year;
        this.duration = duration;
    }
}