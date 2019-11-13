import Controller from '@ember/controller';

export default Controller.extend({
  title: 'my comment',
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
