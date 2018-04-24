import React from 'react';

class RateDisaply extends React.Component {
    constructor(props) {
        super(props);
        this.rates = props.rates;
    };

    render() {
        return (
            <ul className='list-group'>
                {Object.keys(this.rates).map((key) => {
                    let rate = this.rates[key];
                    return (
                        <li key = {key}
                            className='list-group-item'>
                            {key}:{rate}
                        </li>);
                    }
                )}
            </ul>
        );
    };
};

export default RateDisaply;