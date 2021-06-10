export class House {
  constructor(data) {
    this.price = data.price
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.id = data._id
    this.levels = data.levels || 1
  }
}
