import * as api from './api.js';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function getAllCars(){
  return api.get('/data/cars?sortBy=_createdOn%20desc');
}

export async function getMyCars(userId){
  return api.get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getCar(id){
  return api.get('/data/cars/' + id);
}

export async function createCarListing(data){
  return api.post('/data/cars', data);
}

export async function deleteCar(id){
  return api.del('/data/cars/' + id);
}

export async function editCar(id, data){
  return api.put('/data/cars/' + id, data);
}

export async function getSearchResult(query){
  return api.get(`/data/cars?where=year%3D${query}`);
}