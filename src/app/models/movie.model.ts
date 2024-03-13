export interface Movie{
 title:string;
 backdrop_path:string;
 genres: Gener[];
 id: number;
 poster_path: string;
 vote_average: number;
 type: string;
 overview: string;
 release_date: number;
 runtime:number;
 saved: boolean;
}

export interface Gener{
    id: number;
    name: string;
}