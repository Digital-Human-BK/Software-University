import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//to do all functions for requests

const endpoints = {
  topics: `/data/topics?load=${encodeURIComponent('author=_ownerId:users')}&select=_id,title,_ownerId`,
  topicCount: '/data/topics?count',
  createTopic: '/data/topics',
  topicById: (id) => `/data/topics/${id}?load=${encodeURIComponent('author=_ownerId:users')}`,
  commentsByTopicId: (topicId) => '/data/topicComments?where=' + encodeURIComponent(`topicId="${topicId}"`) + `&load=${encodeURIComponent('author=_ownerId:users')}`
}

export async function getAllTopics() {
  return api.get(endpoints.topics);
}

export async function getTopicById(id) {
  return api.get(endpoints.topicById(id));
}

export async function getTopicCount() {
  return api.get(endpoints.topicCount);
}

export async function createTopic(topic) {
  return api.post(endpoints.createTopic, topic);
}


export async function getCommentsByTipocId(topicId) {
  return api.get(endpoints.commentsByTopicId(topicId));
}
