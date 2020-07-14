import React from 'react';
import Axios from 'axios';
import { ResumeComponent } from '../components/cv.comp/Resume.component';
import fire from 'firebase';
class Resume extends React.Component {
    cvURL =
        // "assets/mycv.json"
        "https://firebasestorage.googleapis.com/v0/b/myresume-5f587.appspot.com/o/mycv.json?alt=media";
    state = { myCv: {} }
    componentDidMount() {
        // // Create a reference to the file we want to download
        // fire.initializeApp();
        // let starsRef = fire.storage().refFromURL(this.cvURL);
        // // // Get the download URL
        // starsRef.getDownloadURL().then((url)=>{
        //     // Insert url into an <img> tag to "download"
        //     console.log(JSON.stringify(url));
        //     Axios.get(url).then(res => {
        //         console.log(res.data);
        //         this.setState({ myCv: res.data })
        //     })
        // });
        // const myInit = { method: 'HEAD', mode: 'no-cors', };

        // const myRequest = new Request(this.cvURL, myInit);

        // fetch(myRequest).then((res) => { return res.json(); }).then((data) => {
        //     console.log(data);
        // }).catch(function (e) {
        //     console.log(e);
        // });


    }
    render() {
        return (<React.Fragment >
            <ResumeComponent myCv={this.state.myCv}></ResumeComponent>
        </React.Fragment >)
    }

}
export const ResumePage = Resume;