import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import axios from 'axios';
import Modal from 'react-responsive-modal';

class App extends Component {


    state = {
        pokeUrl: [],
        pokeData: [],
        open: false,
        dataa:[],
        xx: "sdfsdf",
        name: "",
        image: "",
        type: "",
        id: "",
    }

    onOpenModal = (url) => {
        this.setState({ open: true });

        axios.get(url)
            .then(res2 => {
                const pokeData= res2.data;
                this.setState({pokeData: pokeData}, function() {
                    this.setState({
                        name: pokeData.name
                    });
                    this.setState({
                        image: pokeData.sprites.front_default
                    });

                    this.setState({
                        id: pokeData.order
                    });

                });
            })
    };

    onCloseModal = () => {
        this.setState({ open: false });

    };


    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            .then(res => {
                const pokeUrl= res.data.results;
                this.setState({pokeUrl}, function() {
                });
            })
    }

    render() {
        const { open } = this.state;
        const columns = [{
            Header: 'Name',
            accessor: 'name'
        },{
            Header: 'URL',
            accessor: 'url'
        }]

        return (
            <div>

                <Modal open={open} onClose={this.onCloseModal} center>

                    <h2>Pokemon ID</h2>
                    <img src={this.state.image} alt="helo"/>
                    <p>Name:{this.state.name}</p>
                    <p>Id:#{this.state.id}</p>




                </Modal>
                <ReactTable
                    getTrProps={(state, rowInfo, column, instance) => ({
                        onClick: e =>this.onOpenModal(rowInfo.original.url)
                    })}
                    filterable
                    data={this.state.pokeUrl}
                    columns={columns}
                />

            </div>
        )

    }
}

export default App;

