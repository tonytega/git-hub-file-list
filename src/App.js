import FileList from './component/File_List'

const testFiles = [
  {
      id: 1,
      name: 'src',
      type: 'folder',
      updated_at: "2016-07-11 21:24:00",
      latestCommit: {
          message: 'Initial commit'
      }
  },
  {
  id: 2,
  name: 'tests',
  type: 'folder',
  updated_at: "2016-07-11 21:24:00",
  latestCommit: {
  message: 'Initial commit'
  }
  },
  {
  id: 3,
  name: 'README',
  type: 'file',
  updated_at: "2016-07-18 21:24:00",
  latestCommit: {
  message: 'Added a readme'
  }
  },
];

function App() {
  return <FileList files={testFiles}/>
}

export default App;
