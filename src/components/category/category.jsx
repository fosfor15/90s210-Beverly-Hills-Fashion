import React from 'react';

import './category.css';
import noImage from '../../assets/images/no-image.png';


function Category(props) {
    const { id, name } = props;

    return (
        <div
            className="category"
            key={id}
        >
            <div className="category-image">
                <img
                    src={noImage}
                    alt={`Image of category ${ name }`}
                />
            </div>
            <div>
                <h3>{ name }</h3>
                <p>Shop now</p>
            </div>
        </div>
    );
}

export default Category;
