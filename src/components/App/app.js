import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmpoyeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Jhon M.', salary: 800, increase: true, rise: false, id: nextId()},
                {name: 'Sam A.', salary: 1000, increase: false, rise: false, id: nextId()},
                {name: 'Marinf S.', salary: 500, increase: false, rise: false, id: nextId()} 
            ],
            term: '',
            button: ''
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))

    }

    createItem = (name, salary)  => {
        const newItem = {
            name: name, 
            salary: salary, 
            increase: false,
            rise: false, 
            id: nextId()
        }
        this.setState(({data}) => {          
            const newData = [...data, newItem]
            return {data: newData}
        })
    }  
    
    onToggleProp = (id, prop) => { 
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item 
            })
        }))
    }

    searchEmp = (items, term) => { 
        if (term.length === 0) return items

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term}) //term: term
    }

    filterEmp = (items, prop) => {
        if (prop === "salary") {
            return items.filter(item => {
                return item[prop] > 1000
            })
        } else if (prop === "increase") {
            return items.filter(item => {
                return item[prop]
            })
        } else {
            return items
        }
    }

    onUpdateFilter = (button) => {
        this.setState({button}) //button: button
    }

    render() {
        const {data, term, button} = this.state;
        const visibleData = this.filterEmp(this.searchEmp(data, term), button);
        return (
            <div className="app">
                <AppInfo data={data}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateFilter={this.onUpdateFilter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmpoyeesAddForm OnSubmitEmployee={this.createItem}/>
            </div>
        );
    }
}

export default App;