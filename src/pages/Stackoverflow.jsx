import React, { Component } from 'react';
import axios from 'axios';
import Table from '../components/Table'

const columns = [
    {
        name: 'Title',
        selector: row => row['title'],
        sortable: true,
    },
    {
        name: 'Owner',
        selector: 'owner.display_name',
        sortable: true,
    },
    {
        name: 'Answers',
        selector: row => row['answer_count'],
        sortable: true,
    },
    {
        name: 'Viewers',
        selector: row => row['view_count'],
        sortable: true,
    },
]

class Stackoverflow extends Component{
    state = {
        items: [],
        loadingInfo: false,
    }

    async loadIndex(){
        this.setState({loadingInfo: true})
        const res = await axios.get(window.globals.API.urlStackoverflow);
        this.setState({items: res.data.data, loadingInfo: false})
    }

    async loadPoint1(){
        this.setState({loadingInfo: true})
        const res = await axios.get(window.globals.API.urlStackoverflow.concat('solve-not-solve-answers'))
        this.setState({items: res.data.data, loadingInfo: false})
    }

    async loadPoint2(){
        this.setState({loadingInfo: true})
        const res = await axios.get(window.globals.API.urlStackoverflow.concat('best-answer'))
        this.setState({items: res.data.data, loadingInfo: false})
    }

    async loadPoint3(){
        this.setState({loadingInfo: true})
        const res = await axios.get(window.globals.API.urlStackoverflow.concat('least-seen-answer'))
        this.setState({items: res.data.data, loadingInfo: false})
    }

    async loadPoint4(){
        this.setState({loadingInfo: true})
        const res = await axios.get(window.globals.API.urlStackoverflow.concat('newest-older-questions'))
        this.setState({items: res.data.data, loadingInfo: false})
    }

    async componentDidMount(){
        this.loadIndex()
    }

    render(){
        if(this.state.loadingInfo){
            return (
                <div className="container-fluid">
                    <br />
                    <div className="col-12">
                        <h4>Stackoverflow API</h4>
                    </div>
                    <div className="col-12">
                        <h5>Loading...</h5>
                    </div>
                </div>
            )            
        }
        else{
            return <div className="container-fluid">
            <br />  
            <div className="row">
                <div className="col-12">
                    <h4>Stackoverflow API</h4>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-9">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="index-tab" onClick={() => this.loadIndex()} data-toggle="tab" href="#index" role="tab" aria-controls="home" aria-selected="true">Home</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="point_1-tab" data-toggle="tab" href="#point_1" role="tab" aria-controls="point_1" aria-selected="false">Punto 1</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="point_2-tab" data-toggle="tab" href="#point_2" role="tab" aria-controls="point_2" aria-selected="false">Punto 2</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="index" role="tabpanel" aria-labelledby="index-tab">
                            {console.log(this.state.items)}
                            <Table columns={columns} data={this.state.items}></Table>
                        </div>
                        <div className="tab-pane fade" id="point_1" role="tabpanel" aria-labelledby="point_1-tab">
                            <Table columns={columns} data={this.state.point_1}></Table>
                        </div>
                        <div className="tab-pane fade" id="point_2" role="tabpanel" aria-labelledby="point_2-tab">...</div>
                    </div>
                </div>
            </div>
            
        </div>
        }
        
    }
}

export default Stackoverflow;