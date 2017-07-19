var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(searchTerm){
  	console.log('1', searchTerm);
  	this.fetch({
  	  data: {
  	  	part: 'snippet',
  	  	key: window.YOUTUBE_API_KEY,
  	  	maxResults: 5,
  	  	q: searchTerm,
  	  	videoEmbeddable: 'true',
  	  	type: 'video'
  	  }
  	});
  },

  parse: function(result){
  	console.log('2', result);
  	return result.items;
  } 


});
