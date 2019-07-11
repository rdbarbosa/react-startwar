import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './searchInput.css'

export class SearchInput extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    constructor(props) {
        super(props);
        this.state = {title: "", result: []};
    }

    handleChange(event) {
        this.setState({title: event.target.value})
        // console.log(this.state.title)
        console.log(event.target.value)
    }

    search = async event => {
        this.setState({title: event.target.value})
        const res = await fetch(`https://swapi.co/api/planets/?search=${event.target.value}`)
        const { results = [] } = await res.json()
        
        results.map(p => ({
          ...p,
          // For some reason API doesnt return id
          id: p.url.slice(0, -1).split('/planets/')[1],
        }))
        this.setState({result: results})
        console.log(results)
    }


    render() {
        return (
            <div>
                <input
                    type="text"
                    className="search-control"
                    name="title"
                    onInput={this.search.bind(this)}
                    value={this.state.title}
                    placeholder="Pesquise os planetas" />
                    <ul>
                        {this.state.result.map(p => 
                            <li>{p.name}</li>
                        )}
                    </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
