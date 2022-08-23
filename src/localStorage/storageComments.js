import {JSON_PLACEHOLDER, KEY_COMMENTS} from '../constants/constants'

export class LocalStorageAPI {
async getInitialState () {
   const response = await fetch(JSON_PLACEHOLDER);
      if (response.ok) {
        const serialisedState = localStorage.getItem(KEY_COMMENTS);
          if(!serialisedState) return  []
          return JSON.parse(serialisedState);
      }
      else {
        console.log('Ошибка:' + response.status);
      }
}
  
 async saveState (getState) {
         const response =  await fetch(JSON_PLACEHOLDER);
          if (response.ok) { 
              localStorage.setItem(KEY_COMMENTS, JSON.stringify(
                  getState
              ));
          }
          else {
            console.log('Ошибка:' + response.status);
          }
      }
  }
 

