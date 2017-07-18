var VideoListEntryView = Backbone.View.extend({

  render: function() {
  	this.$el.html(this.template(this.model.attributes));
  	this.$el.find('.media-body .video-list-entry-title').html(this.model.attributes.snippet.title);
  	this.$el.find('.media-body .video-list-entry-detail').html(this.model.attributes.snippet.description);

    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')
});
