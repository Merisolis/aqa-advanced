const {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
  } = require('./jsonPlaceholderRequests');
  
  describe('JSONPlaceholder API Requests', () => {
    test('GET all posts should return status 200 and an array', async () => {
      const response = await getPosts();
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  
    test('GET post by ID should return status 200 and post data', async () => {
      const response = await getPostById(1);
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id', 1);
    });
  
    test('POST new post should return status 201 and post data', async () => {
      const postData = { title: 'foo', body: 'bar', userId: 1 };
      const response = await createPost(postData);
      expect(response.status).toBe(201);
      expect(response.data).toMatchObject(postData);
    });
  
    test('PUT update post should return status 200 and updated post', async () => {
      const postData = { title: 'foo updated', body: 'bar updated', userId: 1 };
      const response = await updatePost(1, postData);
      expect(response.status).toBe(200);
      expect(response.data).toMatchObject(postData);
    });
  
    test('DELETE post should return status 200', async () => {
      const response = await deletePost(1);
      expect(response.status).toBe(200);
    });
  });  