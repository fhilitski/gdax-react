import React from 'react';


class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.incrementCount = this.incrementCount.bind(this);
    };

    incrementCount(event) {
            let count = this.state.count + 1;
            this.setState({ count: count });
            console.log(event);
    };
    

    componentDidMount() {
        console.log('mounted');
    };

    render() {
        let count = this.state.count;
        return (
            <div className='controlfloat noselect'
                onClick={(e) => this.incrementCount(e)}>
                <p className='moreemphasis'> {count} </p>
            </div>


        );
    };

};

export default ClickCounter