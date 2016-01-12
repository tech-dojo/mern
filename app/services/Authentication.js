let $ = require('jquery');
let {get, post, del, put} = require("./../stores/RestAPI_Helper.js");

module.exports = {
  //var userInfo = {};

  signup(userInfo){
    post('/auth/signup', userInfo)
      .then((data) => {

        //**userInfo.password because backend send ssh key
        this.login(data.email,userInfo.password,(loggedIn) => {
  				if (!loggedIn)
  				return this.setState({ error: "Login Failed" })

  			});

      })
      .catch((err) => {
  				//return this.setState({ error: err.responseText.message})
      });
  },

  login(email, pass, cb) {
      cb = arguments[arguments.length - 1];
      var token = (typeof window !== "undefined") ? localStorage.token : undefined;
      if (token) {
        if (cb) cb(true)
        this.onChange(true)
        return
      }
      post('/auth/signin', {email: email, password: pass})
        .then((data) => {
          localStorage.userId = data._id;
          localStorage.username = data.username;
          localStorage.token = Math.random().toString(36).substring(7);
          if (cb) cb(true)
          this.onChange(true)
        })
        .catch((err) => {
          if (cb) cb(false)
          this.onChange(false)
        });
    },

    getToken() {
      return (typeof window !== "undefined") ? localStorage.token : undefined;
    },

    getUserId(){

      return (typeof window !== "undefined") ? localStorage.userId : undefined;
    },

    getUserName(){
      return (typeof window !== "undefined") ? localStorage.username : undefined;
    },

    logout(cb) {
      get('/auth/signout')
        .then((g) => {
          delete localStorage.token
          delete localStorage.userId
          delete localStorage.username
          if (cb) cb()
          this.onChange(false)
        }).catch((err) => {
        });
    },

    loggedIn() {
      return !!((typeof window !== "undefined") ? localStorage.token : undefined)
    },

    onChange() {}
}
