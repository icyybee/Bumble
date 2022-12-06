import Single from '../../components/single/single.component';
import { useParams } from 'react-router-dom';

import "./singlep.styles.scss";

import connect from "../../utils/connect";

const SingleProfile = () => {
    const { id } = useParams();
    const jobDesc = connect.filter((item) => item.id === Number(id));
    const profile = jobDesc[0];
    console.log(profile);
    return (
        <div className="sprofile" style={{opacity:"1", transform: "translateX(0vw) translateZ(0px)"}}>
            <Single profile={profile} key={id}/>
        </div>
    )
}

export default SingleProfile;