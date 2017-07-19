var SearchView = Backbone.View.extend({
 
  events: {
  	'click button': 'fetchCollection'
  },
  fetchCollection: function(){
  	var query = this.$('input').val().trim();
  	if (query) {

  	  this.collection.search(query);	
  	}
  	
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
