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
                let filteredEntries = entries.filter(
                    (entry) => {
                        return entry.fields.title.toLowerCase().indexOf(
                            this.state.search.toLowerCase()) !== -1
                    }
                )

                return (

                    <div className="row justify-content-center mb-5">
                        <div className="col-8">
                            <div className="row no-gutters">
                                <div className="col">
                                    <h3 className="text-center"><u>Projects</u></h3>
                                </div>

                                <div className="col hidden">
                                    <span className="input-group mb-3">
                                        <input type="text" className="rounded-0 form-control " placeholder="Search projects" aria-label="Search projects"
                                            value={this.state.search}
                                            onChange={this.updateSearch.bind(this)}
                                        />
                                    </span>
                                </div>
                            </div>
                            
                            <div className="scrollable">
                            <ListEntry entryData={filteredEntries} />
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