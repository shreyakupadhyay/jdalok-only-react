import React, { Component } from 'react';
import _ from 'lodash';
import Pagination from './Pagination';

class PageDiv extends Component {
    constructor(props) {
        super(props);

        var exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
                    <div>
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )}
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
        );
    }
}

export default PageDiv;
