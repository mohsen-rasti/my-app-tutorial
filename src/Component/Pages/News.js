import React from 'react'
import NewsCard from '../NewsCard';
import { InfoConsumer } from '../contex';


function News() {
    return (
        <div>
            <InfoConsumer>
                {value => {
                    return value.news.map(item => {
                        return <NewsCard key={item.id} item={item} />;
                    })
                }}
            </InfoConsumer>
        </div>
    )
}

export default News;
