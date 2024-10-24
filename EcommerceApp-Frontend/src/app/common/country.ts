export class Country {

  id: number;
  code: string;
  name: string;

  constructor(country: Country) {
    this.id = country.id;
    this.code = country.code;
    this.name = country.name;
  }
}


