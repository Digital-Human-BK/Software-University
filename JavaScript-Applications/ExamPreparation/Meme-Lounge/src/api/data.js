import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll(){
  return api.get('/data/memes?sortBy=_createdOn%20desc');
}

export async function getMeme(id){
  return api.getById('/data/memes/' + id);
}

export async function getMyMemes(userId){
  return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createMeme(data){
  return api.post('/data/memes', data)
}

export async function editMeme(id, data){
  return api.put('/data/memes/' + id, data);
}

export async function deleteMeme(id){
  return api.del('/data/memes/' + id);
}