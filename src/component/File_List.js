import {PropTypes} from 'prop-types'
import FileListItem from './File_List_Item.js'

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
export default FileList;