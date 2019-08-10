import React from 'react';
import Header from '../components/header';
import YearSelect from '../components/yearSelect';
import SearchSubmit from '../components/searchSubmit';
import Footer from '../components/footer';

class StoreYear extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <form>
                    <YearSelect />
                    <SearchSubmit />
                </form>
                <Footer />
            </div>
        );
    };
};

export default StoreYear;