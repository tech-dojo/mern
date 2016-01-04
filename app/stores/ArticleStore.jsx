"use strict";
let dispatcher = require("./../dispatchers/dispatcher.js");
let {get,post,del,put} = require("./RestAPI_Helper.js");

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
        get(`api/article/${id}`)
        .then((data)=>{
            article = data;
               console.log('Fetch Article ' + article);
            triggerListeners();
        });
    };

	function addArticle(article, history){
		post("/api/articles",article)
		.then((g)=>{
			article._id = g._id;
			console.log('Article Added' + article);
			history.pushState(null,'/articles/'+ g._id);
		})
	}

	function editArticle(article,id,history){

   	put(`article/api/article/${id}`,article)
		.then((data)=>{
		            article = data;
		            triggerListeners();
								history.pushState(null,'/articles/'+data._id);
		        })
	}

  function deleteArticle(id, history){

		del(`article/api/article/${id}`)
		.then((g)=>{
			console.log(g);
			articleDeleted = 'true';
			triggerListeners();
		})
  }

	function getArticleList(){
		return articleList;
	};

  function getArticle(){
    	    articleDeleted = 'false';
          console.log ('Hello Get Article Method'+article);
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
