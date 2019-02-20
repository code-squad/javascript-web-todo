import uuidv4 from 'uuid';

const Settings = {
  defaultTodoData: [
    { id: 1, title: 'Test Todo', status: 'todo' },
    { id: 2, title: 'Hi, there!', status: 'todo' },
    { id: 3, title: 'Try Add & Delete!', status: 'todo' },
    { id: 4, title: 'And also poke "Fold" button on the top-right!', status: 'todo' },
  ],
  ID: {
    mappingFn: uuidv4,
  },
  graphqlApiURI: 'http://localhost:4000/graphql',
};

export default Settings;
