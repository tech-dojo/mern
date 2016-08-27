# [MERN (a React framework)](http://mern.tech-dojo.org)      

![logo](app/images/mern.gif?raw=true)

*React Framework for Fullstack JavaScript Web Applications*

#### version 0.0.1

![License MIT](https://go-shields.herokuapp.com/license-MIT-blue.png)

### Usage Instructions

1. Clone the repository on GitHub

2. Make sure MongoDB, Node.js and NPM are installed

3. Run `mongodb` in the background

4. Install global dependencies with `npm install -g gulp react-tools browserify yo`

5. Install dependencies with `npm install`

6. Run app with `gulp serve`

7. Run tests with `gulp test`

### Add new CRUD module with [generator-yomern](https://www.npmjs.com/package/generator-yomern)

To create module, run following command in project folder and follow instructions:
```
$ yo yomern
```
To connect the module to the app:
Add the front-end routes for the module in app.jsx, add the backend-routes in routeHelper.js, require the backend-route file in the express.js file and require the model in server.js file

### Documentation
[View documentation](http://merndoc.tech-dojo.org)

[Improve documentation](https://github.com/tech-dojo/mern-doc)

### License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
