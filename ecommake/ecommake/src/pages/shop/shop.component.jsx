import React from 'react';

import Shop_Data from './shop.data'

import PreviewCollection from '../../components/preview-collection/preview-collection.component'


class ShopPage extends React.Component {
    constructor(props){
        super();

        this.state = {
            collections: Shop_Data
        }
    }

    render() {
        const {collections} = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps}/>
                ))
            }
        </div>)
    }

}

export default ShopPage;