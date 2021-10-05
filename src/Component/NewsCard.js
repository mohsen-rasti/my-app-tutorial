import React, { Component } from 'react';

import { InfoConsumer } from './contex';
import { Link } from 'react-router-dom'

class NewsCard extends Component {
    render() {
        const { id, newstitle, newsText } = this.props.item;
        return (
            <div>
                <InfoConsumer>
                    {value => {
                        <div className="card.container.mt-2.mb-3 p-5">
                            <div className="card-body">
                                <h5 key={id} className="card-title"    >{newstitle} </h5>
                                <p className="card-text">{newsText}</p>
                                <Link className="card-link">Read More</Link>
                            </div>
                        </div>
                    }}
                </InfoConsumer>
            </div>
        )
    }
}


export default NewsCard;