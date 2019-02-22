import uuidv4 from 'uuid';

const Settings = {
  defaultTodoData: [
    { id: 1, title: 'Test Todo', status: 'TODO' },
    { id: 2, title: 'Hi, there!', status: 'DONE' },
    { id: 3, title: 'Try Add & Delete!', status: 'TODO' },
    { id: 4, title: 'And also poke "Fold" button on the top-right!', status: 'TODO' },
  ],
  ID: {
    mappingFn: uuidv4,
  },
  graphqlApiURI: 'http://localhost:4000/graphql',
};

export default Settings;
