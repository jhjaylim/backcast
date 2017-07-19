var VideoPlayerView = Backbone.View.extend({

  initialize: function(){
  	this.listenTo(this.collection, 'select', this.selectVideo);// this passes down the model selcted to function selectVideo
  },
  
  selectVideo: function(selected) {// this is how to select video to play
  	console.log(selected);
  	this.model = selected;
  	this.render();
  	
  },

  render: function() {
  	if (this.model) {
  	  this.$el.html(this.template(this.model.attributes));	
  	} else {
  	  this.$el.html('<div class="loading">Please wait...</div>');
  	}
    
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
