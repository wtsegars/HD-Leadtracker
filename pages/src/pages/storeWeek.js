import React from 'react';
import Header from '../components/header';
import WeekSelect from '../components/weekSelect';
import SearchSubmit from '../components/searchSubmit';
import Footer from '../components/footer';

class StoreWeek extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <form>
                    <WeekSelect />
                    <SearchSubmit />
                </form>
                <Footer />
            </div>
        );
    };
};

export default StoreWeek;