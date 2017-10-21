import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'


const styles = {
    padding: {
        paddingRight: "5px",
        paddingLeft: "5px"
    }
}

class SearchExampleStandard extends Component {
    constructor(props){
        super(props)
        this.handleResultData = this.handleResultData.bind(this)
    }


    componentWillMount() {
        this.setState({
            isLoading: false,
            results: [],
            value: '',
            data: []
        })
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.name })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()
            const source = this.props.data;
            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.name)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 500)
    }
    handleResultData = function(props) {
        return (
            <Grid.Column width={8}>
                {props.name}
            </Grid.Column>
            // <div><pre>{ JSON.stringify(props, null, 2) }</pre></div>
          )
    }


  render() {

    const { isLoading, value, results } = this.state

    return (
      <Grid style={ styles.padding }>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            resultRenderer={this.handleResultData}
            {...this.props}
          />
        </Grid.Column>

      </Grid>
    )
  }
}

export default SearchExampleStandard;