import PropTypes from 'prop-types'
import  FileIcon  from './File_icon.js'
import Time from './Time.js'
import CommitMessage  from './Commit_Message.js'
import FileName  from "./file_name";

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

export default FileListItem