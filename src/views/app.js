var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(); // collection
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.currentVideo = this.videos.at(0);
    this.videos.search('javascript tutorial');
    console.log('kasjhdkasjdhkasjhdkasjhd', this.currentVideo);
    this.render();
  },

  selectFirst: function(video){
    if (this.videos.length > 0) {
      this.videos.at(0).select();
      
    }
     // this is for when we re-render and get new data;
   
  },
  render: function() {
    
    this.$el.html(this.template());

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      model: this.currentVideo,
      collection: this.videos,
      el: this.$('.player')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
