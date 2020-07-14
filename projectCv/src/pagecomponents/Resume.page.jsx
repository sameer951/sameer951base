import React from 'react';
import Axios from 'axios';
import { ResumeComponent } from '../components/cv.comp/Resume.component';
import fire from 'firebase';
class Resume extends React.Component {
    cvURL =
    //  "assets"
    "https://files.techknocker.xyz/basefiles"
    // "https://sameer951.github.io/sameer951base/basefiles/mycv.json";
    // "assets/mycv.json"
    // "https://firebasestorage.googleapis.com/v0/b/myresume-5f587.appspot.com/o/mycv.json?alt=media";
    state = { myCv: {} }
    componentDidMount() {
        Axios.get(this.cvURL+'/mycv.json').then(res => {
            console.log(res.data);
            this.setState({ myCv: res.data })
        })

    }
    render() {
        return (<React.Fragment >
            <ResumeComponent myCv={this.state.myCv}></ResumeComponent>
        </React.Fragment >)
    }

}
export const ResumePage = Resume;