// export class Product {
//   id: string;
//   title: string;
//   description: string;
//   price: number;

//   constructor(id: string, title: string, description: stirng, price: number) {
//     this.id = id;
//     this.description = description;
//     this.price = price;
//     this.title = title;
//   }
// }

//Same as following

export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
    public buyers?: number,
    public review?: string
  ) {}
}
