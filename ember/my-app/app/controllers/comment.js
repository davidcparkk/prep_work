import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    sayHello: () => alert('Say hello'),
    toggleBody: function(){
      this.toggleProperty('isShowingBody')
    },
    handleSubmit: function(){
      alert(this.get('name'));
      alert(this.get('content'));
    }
  },
  title: 'my comment',
  created: new Date(),
  body: 'this is the body of my comments',
  authors: ['john', 'david', 'norma'],
  comments: [
    {
      name: 'John',
      content: 'great content'
    },
    {
      name: 'Mary',
      content: 'great stuff'
    },
    {
      name: 'Jeffrey',
      content: 'you suck'
    }
  ]
});
