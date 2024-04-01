import React, { useState } from 'react';
import { View } from 'react-native';
import MainPageView from './components/view/MainPageView';
import StatsPageView from './components/view/StatsPageView';

const App = () => {
    const [currentPage, setCurrentPage] = useState('main');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'main':
                return <MainPageView onPageChange={handlePageChange} />;
            case 'stats':
                return <StatsPageView onPageChange={handlePageChange} />;
            default:
                return <MainPageView onPageChange={handlePageChange} />;
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {renderPage()}
        </View>
    );
};

export default App;
