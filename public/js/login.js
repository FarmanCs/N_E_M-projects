import axios from 'axios'
import { showAlert } from './alert';
export const login = async (email, password) => {
   console.log(email, password);
   try {
      const result = await axios({
         method: 'POST',
         url: 'http://127.0.0.1:7070/api/v1/users/login',
         data: { email, password },
         withCredentials: true // Include cookies in the response
      });

      if (result.data.status === 'success') {
         showAlert('success', 'logged in succesfully')
         window.setTimeout(() => {
            location.assign('/')
         }, 250)
      }
   } catch (err) {
      showAlert('error', err.response.data.message)
   }
};

export const logout = async () => {
   try {
      const res = await axios({
         method: 'GET',
         url: 'http://127.0.0.1:7070/api/v1/users/logout',
      });
      if ((res.data.status === 'success')) location.reload(true)//refress the page from the server
   } catch (error) {
      showAlert('error', 'Error! logging out! try again')
   }
}