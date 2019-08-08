import React from 'react';

function YearSelect() {
    return (
        <div>
            <div className="form-group">
                <label for="yearSelect">Select the Year you want to Look Up:</label>
                <input type="text" className="form-control" id="yearSelect" />
            </div>
        </div>
    );
};

export default YearSelect;