import { faker } from '@faker-js/faker';

const horoscopeSigns = [
  'Aquarius',
  'Pisces',
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn'
];

const People = () => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  age: faker.datatype.number({ min: 18, max: 80 }),
  sign: horoscopeSigns[Math.floor(Math.random() * horoscopeSigns.length)],
  image: `https://source.unsplash.com/100x100/?${faker.image.avatar()}`,
  bio: faker.lorem.paragraph(),
});

const people = Array.from({ length: 500 }, () => People());

export default people;