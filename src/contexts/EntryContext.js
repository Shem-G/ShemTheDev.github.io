import React, { Component } from 'react'
import axios from 'axios'

export const EntryContext = React.createContext()

class EntryContextProvider extends Component{
    state = {
        entries: []
    }

    componentDidMount() {
        const fetchData = () => {
            axios
            .get('https://api.airtable.com/v0/appeDXIgWSt9xRB6n/Portfolio%20Entries?api_key=keyxdvk2igijIb9Q0')
            .then(({ data }) => {
                this.setState({
                    entries: data.records
                })
            })
            .catch(console.log)
        }
        fetchData();
    }

    render(){
        return (
            <EntryContext.Provider value={{...this.state}}>
                {this.props.children}
            </EntryContext.Provider>
        )
    }
}

export default EntryContextProvider