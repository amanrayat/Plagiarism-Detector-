import DropzoneS3Uploader from 'react-dropzone-s3-uploader'
import React from 'react';


export default class S3Uploader extends React.Component {

  handleFinishedUpload = info => {
    console.log('File uploaded with filename', info.filename)
    console.log('Access it on s3 at', info.fileUrl)
  }

  render() {
    const uploadOptions = {
      server: 'http://localhost:4000',
      signingUrlQueryParams: {uploadType: 'avatar'},
    }
    const s3Url = 'https://my-bucket.s3.amazonaws.com'

    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        upload={uploadOptions}
      > 
        <UploadDisplay />
      </DropzoneS3Uploader>
    )
  }
}

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
        {uploadedFiles.map(this.renderFileUpload)}
      </div>
    )
  }
}
