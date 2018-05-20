import React from 'react';


class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products : []
        };
    };

    componentDidMount() {
        let apiEndpoint = 'https://api.gdax.com';
        let request = apiEndpoint + '/products';
        fetch(request).then((res) => {
            return res.json()
        }).then((resJSON) => {
            console.log(resJSON);
            this.setState({ products: resJSON });
        });
        //console.log('mounted');
    };

    render() {
        let prod = this.state.products;
        prod = (prod.length === 0) ? [{id:'loading...'}] : prod;
        console.log(prod);
        return (
            <div className = 'projectfloat noselect'>
            <div className='list-group'>
            <ul>
                {Object.keys(prod).map((key)  => {
                    let product = prod[key];
                    let style = (Math.random() < 0.5) ? 'disabled' : 'active';
                    return (
                        <li key = {key}
                            className = {'list-group-item ' + style}>
                            {product.id}
                        </li>);
                    }
                )}
            </ul>
            </div>
            </div>
        );
    };

};

export default ProductList;