import React from 'react';

function MonthSelect() {
    return (
        <div>
            <div className="form-group">
                <label for="monthSelect">Please Select the Month you would like to Look Up:</label>
                <input type="text" className="form-control" id="monthSelect" placeholder="" />
            </div>
        </div>
    );
};

export default MonthSelect;