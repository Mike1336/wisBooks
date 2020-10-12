export class Address {

  public formattedAddress = '';

  private _country = '';
  private _state = '';
  private _city = '';
  private _street = '';
  private _houseNumber = '';
  private _postalCode = '';

  public static fromJSON(data: any): Address {
    if (!Object.prototype.hasOwnProperty.call(data, 'address_components')) {
      return;
    }

    const addressObject: IAddress = {
      formattedAddress: data.formatted_address,
      country: '',
      state: '',
      city: '',
      street: '',
      houseNumber: '',
      postalCode: '',
    };
    const addressComponents = data.address_components;
    const shordData = addressComponents.map((component: any) => {
      return {
        name: component.long_name,
        type: component.types[0],
      };
    });

    shordData.forEach((addressComponent) => {
      switch (addressComponent.type) {
        case 'postal_code':
          addressObject.postalCode = addressComponent.name;
          break;
        case 'country':
          addressObject.country = addressComponent.name;
          break;
        case 'administrative_area_level_1':
          addressObject.state = addressComponent.name;
          break;
        case 'locality':
          addressObject.city = addressComponent.name;
          break;
        case 'route':
          addressObject.street = addressComponent.name;
          break;
        case 'street_number':
          addressObject.houseNumber = addressComponent.name;
          break;
      }
    });

    return new Address(addressObject);
  }

  constructor(data: IAddress) {
    this._fromLocalJSON(data);
  }

  public toJSON(): IAddress {
    return {
      country: this._country,
      state: this._state,
      city: this._city,
      street: this._street,
      houseNumber: this._houseNumber,
      postalCode: this._postalCode,
    };
  }

  private _fromLocalJSON(address: IAddress): void {
    this.formattedAddress = address.formattedAddress;
    this._country = address.country;
    this._state = address.state;
    this._city = address.city;
    this._street = address.street;
    this._houseNumber = address.houseNumber;
    this._postalCode = address.postalCode;
  }

}

export interface IAddress {
  formattedAddress?: string;
  country: string;
  state: string;
  city: string;
  street: string;
  houseNumber: string;
  postalCode: string;
}
