import { PropTypes } from "prop-types";
import Moment from "react-moment";


const Time = ({ time }) => {
  
    return (
        <Moment fromNow> 
          <span className="time">
            {time}
          </span>
        </Moment>
     );
    };
Time.propTypes = {
time: PropTypes.string.isRequired
}

export default Time;