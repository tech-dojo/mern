
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import createLocation from 'history/lib/createLocation';
var Article = require('./../models/Article.js');

module.exports = function(app){

    const routes = {
        path: '/',
        component: require('./../../app/components/core/Template'),
        indexRoute: {
            component: require('./../../app/components/core/Home')
        },
        childRoutes: [

            {
                path: '/about',
                component: require('./../../app/components/core/About')
            },

            {
                path: '/articles',
                component: require('./../../app/components/articles/ListArticles')
            },
            {
                path: '/articles/:id',
                component: require('./../../app/components/articles/ViewArticle')
            },
            {
                 path: '/signin',
                 component: require('./../../app/components/users/Signin')
             },
             {
                 path: '/signout',
                 component: require('./../../app/components/users/SignOut')
             }]
    };

    app.use((req, res, next) =>{
     const location = createLocation(req.path);

      // Note that req.url here should be the full URL path from
      // the original request, including the query string.
          match({ routes, location}, (error, redirectLocation, renderProps) => {
            if (error) {
              res.status(500).send(error.message)
            } else if (redirectLocation) {
              res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
              // renderWithData(req,res, renderProps);
              console.log("index.ejs loaded");
              var generated = renderToString(<RoutingContext {...renderProps} />);
              res.render('./../app/index.ejs',{reactOutput:generated});

            } else {
                next();
            }
          })
    })
}

// function renderWithData(req,res, renderProps){
//     if(req.url == "/"){  // Need to Refactor Later
//            Product.aggregate(
//             [
//                 { "$group": {
//                     "_id": "$category",
//                     "images": { "$first": "$images" }
//                 }}
//             ],
//             function(err,results) {
//                 if (err) throw err;
//
//                 var data = [results];
//                 renderIsoOutput(data, renderProps, res);
//             })
//
//
//
//        }
//
//        else if(req.url.match(/\/products/)){
//
//        		Product.find(function(error,doc){
//                var data = {doc: doc, length: doc.length};
//                renderIsoOutput(data, renderProps, res);
//
//            });
//        }
//        else if(req.url.match(/\/product\/.*/)){
//
//            var id = req.url.split(/\/product\//)[1];
//            Product.find({_id:id},function(error,doc){
//             var data = doc[0];
//             renderIsoOutput(data, renderProps, res);
//
// 		})
//   }else if(req.url.match(/\/item-added.*/)){
//       res.redirect('/cart');
//       return;
//   }else{
//       renderIsoOutput([], renderProps, res);
//   }
// }

function renderIsoOutput(data, renderProps, res){

}
