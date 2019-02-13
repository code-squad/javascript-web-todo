const Settings = {
  apiURI: 'http://crong.codesquad.kr:8080/todo',
  defaultTodoData: [
    { localId: 1, title: 'Test Todo', type: 'todo' },
    { localId: 2, title: 'Hi, there!', type: 'todo' },
    { localId: 3, title: 'Try Add & Delete!', type: 'todo' },
    { localId: 4, title: 'And also poke "Fold" button on the top-right!', type: 'todo' },
  ],
  ID: {
    variation: 999,
    mappingFn() {
      return `${Math.floor(Math.random() * this.variation + 1)}${new Date().valueOf()}`;
    },
  },
};

export default Settings;
