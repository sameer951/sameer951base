import React from 'react';
import Axios from 'axios';
import { ResumeComponent } from '../components/cv.comp/Resume.component';
class Resume extends React.Component {
    cvURL = "assets";
    // "https://files.techknocker.xyz/basefiles"
    state = { myCv: {} }
    componentDidMount() {
        Axios.get(this.cvURL + '/mycv.json').then(res => {
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