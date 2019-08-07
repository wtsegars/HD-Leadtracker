import React from 'react';

class WeekSelect extends Component {
    render() {
        return (
            <div>
               <div className="form-group">
                    <label for="weekSelect">Select the Week you want to Look Up:</label>
                    <input type="text" className="form-control" id="weekSelect" placeholder="" required />
                </div> 
            </div>
        );
    };
};

export default WeekSelect;