export type ProductObject = {
   id:number;
   name:string;
   price:number;
   about:string;
   category:string;
   brand:string;
   rating:number;
   avatar:string;
   info?:string;
}

export type UserObject ={
name:string;
email:string;

password:string;
id?:number;
addToCart:ProductObject[];
orderPlaced:ProductObject[];
}





export {}