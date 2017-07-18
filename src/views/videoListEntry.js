var VideoListEntryView = Backbone.View.extend({

  // el: '.video-list',

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    //console.log(this.$el.html());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')
});
