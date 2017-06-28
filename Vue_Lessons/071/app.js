
cmp = {
    data: function () {
      return {
        status: 'Critical' 
    }
  },
  template: '<p>Server status: {{ status }}</p>'
};

var vm = new Vue({
  el: "#app",
  components: {
    'my-cmp': cmp
  } 
});


