import axios from 'axios';
export async function GetToken(){
    const options = {
        method: 'POST',
        url: 'https://dev-gm2f3obz.us.auth0.com/oauth/token',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: '5CKT7yhQg9brQub922v5AVt2ZbgU13QL',
          client_secret: '0dYaxu_EVlDiuJdLrFCEnZ5UxDVkA_oR97OIZ21kokFsUjLPo-IZdtpWjxo6vlNQ',
          audience: 'http://teammanager/api'
        })
      };
      
      axios.request(options).then(response => {
        console.log(response.data);
        return response.data
      }).catch(error => {
        console.error(error);
      });
}

