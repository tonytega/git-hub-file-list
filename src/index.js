import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {PropTypes} from 'prop-types'
import  Moment  from 'react-moment'

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

const FileList = ({files})=>(
  <table className='filelist'>
    <tbody>
      {
      files.map((file)=>(
          <FileListItem key={file.id} file = {file}/>
            
         
      ))
      }
    </tbody>
  </table>
)
FileList.proptype={
  files : PropTypes.array
};

const FileListItem = ({file}) =>(
      <tr className='filelist-item'>
        <td className='file-icon'> <FileIcon fileIcon = {file.type}/></td>
        <td className='file-name'><FileName fileName={file.name}/></td>
        <td><CommitMessage message={file.latestCommit.message}/></td>
        <td><Time time={file.updated_at}/></td>
      </tr>
  )
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
  };
function FileName({fileName}){
  return <span>{fileName}</span>
}
const FileIcon = function({fileIcon}) {
      let icon = "fa-solid fa-file"
      if (fileIcon === 'folder'){
          icon = "fa-solid fa-folder"     
      }
      return <span ><i class={icon}></i></span>;
}

const CommitMessage = function({message}){
    return <span>{message}</span>
}
const Time = ({ time }) => {
  
    return (
        <Moment fromNow> 
          <span className="time">
            {time}
          </span>
        </Moment>
     );
    };
Time.propTypes = {
time: PropTypes.string.isRequired
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FileList files={testFiles}/>
      
);


