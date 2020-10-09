export class AddressModel {

  public static convertAddress(address: any[]): object {
    if (address[0]) {
      const addressComponents = address[0].address_components;
      const shordData = addressComponents.map((data: any) => {
        return {
          name: data.long_name,
          type: data.types[0],
        };
      });

      const houseNumber = shordData.find((data) => data.type === 'street_number').name;
      const street = shordData.find((data) => data.type === 'route').name;
      const city = shordData.find((data) => data.type === 'locality').name;
      const state = shordData.find((data) => data.type === 'administrative_area_level_1').name;
      const country = shordData.find((data) => data.type === 'country').name;
      const postalCode = shordData.find((data) => data.type === 'postal_code').name;

      const result = {
        houseNumber,
        street,
        city,
        state,
        country,
        postalCode,
      };

      console.log(result);

      return result;
    }
  }

}
