/**
 * Extending Types
 */

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

const houseAddress: AddressWithUnit = {
  street: 'st 1',
  city: 'ny city',
  country: 'usa',
  postalCode: '12345',
  unit: '#123-1'
}
console.log(houseAddress);

// `interface`s can also extend from multiple types.
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: 'blue',
  radius: 11,
};
console.log('ColorfulCircle:', cc);

export { ColorfulCircle };
