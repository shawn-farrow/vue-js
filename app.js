 new Vue({
   el: '#vue-app',
   data: {
     name: 'Shawn',
     job: 'Developer',
     website: 'http://www.google.com',
     websiteTag: '<a href="http://www.google.com">Google</a>'
   },
   methods: {
     greet: function(time){
       this.name
       return 'Good ' + time + ' ' + this.name;
     }
   }
 });
