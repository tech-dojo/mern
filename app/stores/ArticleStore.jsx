"use strict";
let dispatcher = require("./../dispatchers/dispatcher.js");
let {get,post,del,put} = require("./RestAPI_Helper.js");
import auth from './../services/Authentication';


function ArticleStore(){

	let articleList = {},
		changeListeners = [],
        article = {},
        articleDeleted = 'false';

	function triggerListeners(){
		changeListeners.forEach(function(listener){
			listener(articleList);
		})
	};
//console.log('Hello Article Store');
function fetchArticleList(){
  get("/api/articles")
        .then((data)=>{
            articleList = data;
            //console.log(articleList);
            triggerListeners();
        });
  }
    function fetchArticle(id){
			console.log('hello ' + id);
        get(`api/articles/${id}`)
        .then((data)=>{
            article = data;
						console.log("Inside fetch");
              console.log(article);
            triggerListeners();
        });
    };

	function addArticle(article, history){
		console.log(article);
		post("/api/articles",article)
		.then((g)=>{
			article._id = g._id;
			console.log('Article Added' + article);
			history.pushState(null,'/articles/'+ g._id);
		})
		.catch((err)=>{
			if(err.status == 401){
				authCheck(history);
			}
			//productList.splice(i,1);
		})
	}

	function editArticle(article,id,history){

   	put(`api/articles/${id}`,article)
		.then((data)=>{
		            article = data;
		            triggerListeners();
								history.pushState(null,'/articles/'+data._id);
		        })
	}

  function deleteArticle(id, history){

		del(`api/articles/${id}`)
		.then((g)=>{
			console.log(g);
			articleDeleted = 'true';
			triggerListeners();
			history.pushState(null,'/articles');
		})
  }

	function getArticleList(){
		return articleList;
	};

  function getArticle(){
    	    articleDeleted = 'false';
					console.log("Hello Get Article Method");
          console.log (article);
    		  return article;
	};

  function articleDeletionStatus(){
		return articleDeleted;
	};

	function onChange(listener){
		changeListeners.push(listener);
	}

  function removeChangeListener(listener){
        var index = changeListeners.findIndex(i => i === listener);
		changeListeners.splice(index, 1);
	}
	function authCheck(history){
	auth.logout();
	history.pushState(null, '/signin', {session:false});
}

	return {
		onChange:onChange,
    removeChangeListener: removeChangeListener,
    fetchArticle: fetchArticle,
    addArticle: addArticle,
    editArticle: editArticle,
    getArticleList: getArticleList,
    getArticle: getArticle,
    deleteArticle: deleteArticle,
    fetchArticleList: fetchArticleList,
    articleDeletionStatus: articleDeletionStatus
	}
}

module.exports = new ArticleStore();
