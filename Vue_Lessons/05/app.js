Vue.component('hello', {
  template: '<h1>Hello!</h1>'
})

var vm1 = new Vue({
  el: "#app1",
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
      this.$refs.myButton.innerText = 'Don`t click!'
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});



var vm2 = new Vue({
  el: "#app2",
   data: {
    title: 'The Second Instance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed!';
    }
  }
});

var vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

 vm3.$mount();
 document.getElementById('app3').appendChild(vm3.$el)
