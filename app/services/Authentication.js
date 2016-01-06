let $ = require('jquery');
let {get, post, del, put} = require("./../stores/RestAPI_Helper.js");

module.exports = {
  //var userInfo = {};

  signup(userInfo){
    post('/auth/signup', userInfo)
      .then((data) => {
        console.log('Hello Execite Signin 2');
      })
      .catch((err) => {
        console.log('Print Error: '+err);
      });

  },
  login(email, pass, cb) {
      console.log('Hello Execite Signin');
      cb = arguments[arguments.length - 1];
      var token = (typeof window !== "undefined") ? localStorage.token : undefined;
      if (token) {
        console.log(token);
        if (cb) cb(true)
        this.onChange(true)
        return
      }
        console.log('Hello Execite Signin 1');
      post('/auth/signin', {email: email, password: pass})
        .then((data) => {
          console.log('Hello Execite Signin 2');
          localStorage.token = Math.random().toString(36).substring(7);
          if (cb) cb(true)
          console.log('Hello Execite Signin 3');
          this.onChange(true)
        })
        .catch((err) => {
          console.log('Print Error: '+err);
          if (cb) cb(false)
          this.onChange(false)
        });
    },

    getToken() {
      return (typeof window !== "undefined") ? localStorage.token : undefined;
    },

    logout(cb) {
      get('/auth/signout')
        .then((g) => {
          console.log("Local Storage Delete");
          delete localStorage.token
          if (cb) cb()
          this.onChange(false)
        }).catch((err) => {
          console.log(err);
        });
    },

    loggedIn() {
      return !!((typeof window !== "undefined") ? localStorage.token : undefined)
    },

    onChange() {}
}
