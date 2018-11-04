import { React } from "../../Helpers/ImportHelper";
import Iframe from "react-iframe";
class FF1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => {
        return (
            <React.Fragment>
                <Iframe url="http://finalfantasy.wikia.com/wiki/Final_Fantasy" width="100%" height="800px" id="myId" className="myClassname" display="initial" position="relative" allowFullScreen />
            </React.Fragment>
        );
    };
}

export default FF1;
