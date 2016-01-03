var dispatcher = require("./../dispatcher.js");

module.exports = {
    list:function(){
		dispatcher.dispatch({
			type:"article:list",
			payload:""
		})
	},
    get:function(articleId){
		dispatcher.dispatch({
			type:"article:get",
			payload:articleId
		})
	},
	add:function(article){
		dispatcher.dispatch({
			type:"article:add",
			payload:article
		})
	},
	update:function(article){
		dispatcher.dispatch({
			type:"article:update",
			payload:article
		})
	},
	delete:function(article){
		dispatcher.dispatch({
			type:"article:delete",
			payload:article
		});
	}

}
