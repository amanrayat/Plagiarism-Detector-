class UploadDisplay extends React.Component {

  renderFileUpload = (uploadedFile, i) => {
    const {
      filename,   // s3 filename
      fileUrl,    // full s3 url of the file
      file,       // file descriptor from the upload
    } = uploadedFile

    return (
      <div key={i}>
        <img src={fileUrl} />
        <p>{file.name}</p>
      </div>
    )
  }

  render() {
    const {uploadedFiles, s3Url} = this.props
    return (
      <div>
        <p>Drag and drop files to upload </p>
        {uploadedFiles.map(this.renderFileUpload)}
      </div>
    )
  }
}
