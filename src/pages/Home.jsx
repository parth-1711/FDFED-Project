import {MyComponent, Categories, Corousel, Recommendations} from '../components/HomePage_components';
import React from 'react';

const Home = ()=> {
    return (
    <div>
    <MyComponent/>
    <Categories/>
    <Corousel/>
    <Recommendations/>
    </div>
    )
}
export default Home;