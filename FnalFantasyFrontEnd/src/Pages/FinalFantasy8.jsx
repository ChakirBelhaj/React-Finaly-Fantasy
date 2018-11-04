import { React, Layoutclient } from "../Helpers/ImportHelper";
import FF8 from "../Components/FinalFantasyInfo/FF8"


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
                    <FF8></FF8>
                </Layoutclient>
            </React.Fragment>
        );
    };
}

export default FinalFantasy1;
