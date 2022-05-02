export function getUserData(){
  return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data){
  sessionStorage.setItem('userData', JSON.stringify(data));
}

export function removeUserData(){
  sessionStorage.removeItem('userData');
}