import { React, Layoutclient } from "../Helpers/ImportHelper";
import FF2 from "../Components/FinalFantasyInfo/FF2"


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
                    <FF2></FF2>
                </Layoutclient>
            </React.Fragment>
        );
    };
}

export default FinalFantasy1;
