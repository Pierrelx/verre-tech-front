export class Store{
  Id: number
  Name: string
  Address: string
  PostalCode: string
  County: string
  City: string
  Type: string
  Latitude: number
  Longitude: number
  CreatedOn: number
  UpdatedOn: number
  Error: string

  constructor(){
    this.Id = 0
    this.Name = ""
    this.Address = ""
    this.PostalCode = ""
    this.County = ""
    this.City = ""
    this.Type = ""
    this.Latitude = 0
    this.Longitude = 0
    this.CreatedOn = 0
    this.UpdatedOn = 0
    this.Error = ""
  }

}
