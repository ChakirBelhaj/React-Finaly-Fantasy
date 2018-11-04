import { React, Layoutclient } from "../Helpers/ImportHelper";
import FF1 from "../Components/FinalFantasyInfo/FF1";


class FinalFantasy1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render = () => {
        return (
            <React.Fragment>
                <Layoutclient>
                    <FF1></FF1>
                </Layoutclient>
            </React.Fragment>
        );
    };
}

export default FinalFantasy1;
