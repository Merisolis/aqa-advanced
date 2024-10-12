const axios = require('axios');

const userCredentials = {
  email: 'mariya.vivchar@gmail.com', 
  password: 'Qwerty12345'
};

let sessionCookie;
let createdCarIds = [];

// Authenticate the user and get session cookie
beforeAll(async () => {
  const authResponse = await axios.post('https://qauto.forstudy.space/api/auth/signin', {
    email: userCredentials.email,
    password: userCredentials.password
  }, {
    withCredentials: true
  });

  const cookies = authResponse.headers['set-cookie'];
  sessionCookie = cookies.find(cookie => cookie.startsWith('sid='));
});

// Clean up created cars after all tests
afterAll(async () => {
  for (let carId of createdCarIds) {
    await axios.delete(`https://qauto.forstudy.space/api/cars/${carId}`, {
      headers: { Cookie: sessionCookie },
      withCredentials: true
    });
  }
});

// Car brand and model data for tests
const carBrands = [
  { brandId: 1, modelId: "Audi", mileage: 15000 },  // Audi
  { brandId: 2, modelId: "BMW", mileage: 12000 },  // BMW
  { brandId: 3, modelId: "Ford", mileage: 13000 },  // Ford
  { brandId: 4, modelId: "Porsche", mileage: 18000 },  // Porsche
  { brandId: 5, modelId: "Fiat", mileage: 10000 }   // Fiat
];

// Test to create a car for all brands and models
test('User can create a car for all brands and models', async () => {
  for (const { brandId, modelId, mileage } of carBrands) {
    const createResponse = await axios.post('https://qauto.forstudy.space/api/cars', {
      brandId,
      modelId,
      mileage
    }, {
      headers: { Cookie: sessionCookie },
      withCredentials: true
    });

    expect(createResponse.status).toBe(200);
    createdCarIds.push(createResponse.data.data.id);
  }
});

// Test to fail creation of car with invalid mileage
test('Fail to create car with invalid mileage', async () => {
  try {
    await axios.post('https://qauto.forstudy.space/api/cars', {
      brandId: 1,
      modelId: 1,
      mileage: 'invalid'
    }, {
      headers: { Cookie: sessionCookie },
      withCredentials: true
    });
  } catch (error) {
    expect(error.response.status).toBe(400); 
  }
});

// Test to fail creation of car for non-existent brand
test('Fail to create car for non-existent brand', async () => {
  try {
    await axios.post('https://qauto.forstudy.space/api/cars', {
      brandId: 999, 
      modelId: 1,
      mileage: 10000
    }, {
      headers: { Cookie: sessionCookie },
      withCredentials: true
    });
  } catch (error) {
    expect(error.response.status).toBe(400); 
  }
});
