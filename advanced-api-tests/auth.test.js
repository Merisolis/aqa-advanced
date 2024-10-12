const axios = require('axios');

const userCredentials = {
  email: 'mariya.vivchar@gmail.com',
  password: 'Qwerty12345'
};

test('auth can sign in and get session cookie', async () => {
  const authResponse = await axios.post('https://qauto.forstudy.space/api/auth/signin', {
    "email": userCredentials.email,
    "password": userCredentials.password
  }, {
    // Включаем возможность работы с куками
    withCredentials: true
  });

  expect(authResponse.status).toBe(200);
  

  const cookies = authResponse.headers['set-cookie'];
  const sessionCookie = cookies.find(cookie => cookie.startsWith('sid='));
  
  expect(sessionCookie).toBeDefined();
});

test('auth can get user info using session cookie', async () => {
  
  const authResponse = await axios.post('https://qauto.forstudy.space/api/auth/signin', {
    "email": userCredentials.email,
    "password": userCredentials.password
  }, {
    withCredentials: true
  });

  const cookies = authResponse.headers['set-cookie'];
  const sessionCookie = cookies.find(cookie => cookie.startsWith('sid='));

  
  const userInfoResponse = await axios.get('https://qauto.forstudy.space/api/users/current', {
    headers: {
      Cookie: sessionCookie 
    },
    withCredentials: true
  });

  console.log('BEFORE');
  expect(userInfoResponse.status).toBe(200); 
  expect(userInfoResponse.data).toHaveProperty('status', 'ok'); 
  expect(userInfoResponse.data).toHaveProperty('data'); 

  expect(userInfoResponse.data.data).toHaveProperty('userId'); 
  expect(userInfoResponse.data.data).toHaveProperty('currency', 'usd'); 
  expect(userInfoResponse.data.data).toHaveProperty('distanceUnits', 'km'); 
  expect(userInfoResponse.data.data).toHaveProperty('photoFilename', 'default-user.png');
  console.log('AFTER');
});
