function formatString(input: string, toUpper?: boolean): string {
      
    if(toUpper === false){
      const lowercase= input.toLowerCase();
      return lowercase;
    }
    else{
      const uppercase= input.toUpperCase();
      return uppercase;
    }
}

const p1= formatString("Hello", false); ;     
console.log(p1);

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const filterItems= items.filter(item=> item.rating >= 4);
    return filterItems;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

const p2= filterByRating(books);
console.log(p2);

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const newArray: T[]= [];
    for(const array of arrays){
        for(const element of array){
            newArray.push(element);
        }
    }
    return newArray;

}

const p3= concatenateArrays([1, 2], [3, 4], [5]);
console.log(p3);

class Vehicle{
    private _make: string;
    private _year: number

    constructor(make:string, year:number){
        this._make= make;
        this._year= year              
    }

    getInfo(){
        console.log(`Make: ${this._make}, Year: ${this._year}`)
    }
}

class Car extends Vehicle{
    private _model: string;

    constructor(make: string, year: number, model: string){
        
        
        super(make, year);
        this._model= model;
                  
    }

    getModel(){
        console.log(`Model: ${this._model}`)
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   
myCar.getModel();


function processValue(value: string | number): number {
    return typeof value === "string"? value.length : value * 2;
    
}
const p5= processValue(10);
console.log(p5);

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length === 0){
      return null;
    }
    let highestPriceProduct= products[0];
    for (const product of products){
      if( product.price > highestPriceProduct.price ) {
        highestPriceProduct=product
  
    }
    }
    return highestPriceProduct;
  }
  
  
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  const p6= getMostExpensiveProduct(products); 
  console.log(p6)

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    return day === Day.Sunday ? "Weekend" : "Weekday";

  }
 
  
  const p7= getDayType(Day.Sunday);  
  console.log(p7);

  async function squareAsync(n: number): Promise<number> {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(n < 0) {
                reject(new Error("Negative number not allowed"));
            }else{
                resolve(n*n);
            }

        },1000);
    })

}

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
  