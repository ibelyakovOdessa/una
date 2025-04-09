import { Expose, Transform, Type } from 'class-transformer';

// Вложенный класс
export class Address {

  city?: string;

  // public constructor(city?: string) {
  //   this.city = city;
  // }

}

export class User1 {
  
  // @Type(() => Number)
  id?: number;

  name?: string;

  @Expose()
  @Type(() => Address)
  // @Transform(() => User1)
  address?: Address;


  public constructor(id?: number, name?: string, address?: Address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
  
}