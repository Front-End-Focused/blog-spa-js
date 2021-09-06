import config from './config';
import request from './request';

const API = {
  posts: {
    getAll: (
      start = config.posts.defaultStart,
      limit = config.posts.defaultLimit
    ) => request(`posts?_start=${start}&_limit=${limit}`),
    getById: (id) => request(`posts/${id}`),
    getByUserId: (id) => request(`posts?userId=${id}`),
  },
  comments: {
    getByPostId: (id) => request(`posts/${id}/comments`),
  },
  users: {
    getById: (id) => request(`users/${id}`),
  },
};

export default API;
