var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    this.render();

    // console.log(this.$el.html());
    
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    //something related to videoListEnty
    this.$('.video-list').append(this.collection.map(function(col) {
      

      var videoEntry = new VideoListEntryView({ model: col });
      return videoEntry.render().$el;
    
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
