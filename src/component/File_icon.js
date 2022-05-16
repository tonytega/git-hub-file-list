

const FileIcon = function({fileIcon}) {
    let icon = "fa-solid fa-file"
    if (fileIcon === 'folder'){
        icon = "fa-solid fa-folder"     
    }
    return <span ><i class={icon}></i></span>;
}

export default FileIcon;