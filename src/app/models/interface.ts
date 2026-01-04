export interface Home {
  id: number;              
  title: string;           
  location: string;        
  price: number;           
  beds: number;            
  baths: number;           
  area: string;            
  type: string;            
  status: string;          
  description: string;    
  image: string;         
}


export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // YYYY-MM-DD
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Mobile {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  isAvailable: boolean;
  rating: number;
  noOfItems: number;
  features: string[];
}


export interface Itodo{
    todoitem:string;
    todoid:string;
}


export interface Istudent{
    fname:string;
    lname:string;
    email:string;
    contact:number;
    id:string;
}