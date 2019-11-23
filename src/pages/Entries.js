import React, { Component } from 'react'
import { EntryContext } from '../contexts/EntryContext'
import ListEntry from '../components/EntryList'

class Entries extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    updateSearch(event) {
        this.setState({ search: event.target.value })
    }

    render() {
        return (
            <EntryContext.Consumer>{(context) => {
                const { entries } = context
                

                return (

                    <div className="row justify-content-center mb-5">
                    <div className="col-8">
                        <div className="row no-gutters">
                            <div className="col">
                                <h3 className="text-center"><u>Projects</u></h3>
                            </div>
                        </div>

                        <div className="scrollable">
                            <ListEntry entryData={entries} />
                        </div>
                    </div>
                </div>
                )

            }}

            </EntryContext.Consumer>
        )
    }
}

export default Entries