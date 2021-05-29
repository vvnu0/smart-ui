import React from 'react'
import axios, { post } from 'axios';

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null,
      uploadStatus:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
      this.setState({uploadStatus:response.data});
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://localhost:8080/resident/proofupload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  retryUpload() {
    this.setState({uploadStatus:null});
  }

  render() {
     if (!this.state.uploadStatus) {
       return (
        <form onSubmit={this.onFormSubmit}>
          <h3>Upload Proof of Residency</h3>
          <input type="file" onChange={this.onChange} />
          <button type="submit">Upload</button>
        </form> 
        );
       } else if (this.state.uploadStatus === 'success')  {
         return (
           <div>
           <h3>Uploaded successfully!</h3>
           <button onClick={() => {this.retryUpload();}}>Upload Another Proof</button>
           </div>
         );
       } else {
         return (
           <div>
            <h3>Failed to upload file :-( {this.state.uploadStatus}</h3>
            <button onClick={() => {this.retryUpload();}}>Retry Upload</button>
           </div>
         );
       }
  }
}

export default FileUpload;