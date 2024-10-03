const axios = require('axios');

// отримання всіх постів
const getPosts = async () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

// отримання поста за ID
const getPostById = async (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

// створення нового поста
const createPost = async (data) => {
  return axios.post('https://jsonplaceholder.typicode.com/posts', data);
};

// оновлення поста
const updatePost = async (id, data) => {
  return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
};

// видалення поста
const deletePost = async (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };