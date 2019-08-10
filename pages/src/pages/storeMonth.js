import React from 'react';
import Header from '../components/header';
import MonthSelect from '../components/monthSelect';
import SearchSelect from '../components/searchSubmit';
import Footer from '../components/footer';

class StoreMonth extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <form>
                    <MonthSelect />
                    <SearchSelect />
                </form>
                <Footer />
            </div>
        );
    };
};

export default StoreMonth;