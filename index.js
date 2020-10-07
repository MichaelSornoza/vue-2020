let axios = require('axios');

let data = { name: 'lemontech' };

let config = {
  method: 'patch',
  url: 'http://applications.lemontech.com/api/users/5',
  headers: {
    Authorization:
      'Basic bW9zcG1hbnRhQGdtYWlsLmNvbTpiVzl6Y0cxaGJuUmhRR2R0WVdsc0xtTnZiUT09',
    'Content-Type': 'text/plain',
  },
  data,
};

axios(config)
  .then((res) => console.log(JSON.stringify(res.data)))
  .catch((err) => console.log(err));
