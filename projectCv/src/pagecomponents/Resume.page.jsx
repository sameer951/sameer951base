import React from 'react';
import Axios from 'axios';
import { ResumeComponent } from '../components/cv.comp/Resume.component';
class Resume extends React.Component {
    cvURL="https://firebasestorage.googleapis.com/v0/b/myresume-5f587.appspot.com/o/mycv.json?alt=media";
    state = { myCv: {} }
    componentDidMount() {
        Axios.get(this.cvURL).then(res => {
            console.log(JSON.stringify(res.data));
            this.setState({ myCv: res.data })
        })

    }
    render() {
        return (<React.Fragment>
            <ResumeComponent myCv={this.state.myCv}></ResumeComponent>
        </React.Fragment>)
    }

}
export const ResumePage = Resume;