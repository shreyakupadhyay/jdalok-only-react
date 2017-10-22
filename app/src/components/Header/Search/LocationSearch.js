import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// import { stateOptions } from '../common'

const styles = {
    input: {
        borderRadius: "30px"
    }
}

const stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }]

const LocationSearch = () => (
  <Dropdown placeholder='State'
   search selection options={stateOptions} 
   style={ styles.input }/>
)

export default LocationSearch;