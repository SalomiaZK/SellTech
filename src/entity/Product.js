
export class Product{
    constructor(name, details, price, pic){
        this.number = 1
        this.name = name, 
        this.details = details,
        this.price = price
        this.pic = pic
    }

    getPrice(){
        return this.number*this.price
    }

}

