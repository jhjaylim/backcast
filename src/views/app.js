var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.render();
    this.videos = new Videos(window.exampleVideoData); // collection
    this.videoListView = new VideoListView({collection: this.videos});
    this.videoListView.render();
    this.searchView = new SearchView();
    this.searchView.render();
    this.videoPlayerView = new VideoPlayerView();
    this.videoPlayerView.render();
    console.log(this.videos);
    

  },


  render: function() {
    
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
