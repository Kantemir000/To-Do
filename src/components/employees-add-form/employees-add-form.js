import { Component } from 'react';

import './employees-add-form.css'

class EmpoyeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            error: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    OnSubmitEmployee = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;

        if (name.length > 3 && isNaN(name) && salary !== '') {
            this.props.OnSubmitEmployee(name, salary)
            this.setState({ //Очищаем state
                name: '', 
                salary: '',
                error: false
            })
        } else {
            this.setState({ //Очищаем state
                name: '', 
                salary: '',
                error: true
            })
        }
    }

    render() {
        const {name, salary, error} = this.state;

        let className = "form-control new-post-label";

        if (error) className += " red";

        return (
            <div className="app-add-form">
                <h3>Добавить нового сотрудника</h3>
    
                <form 
                    className="add-form d-flex"
                    onSubmit={this.OnSubmitEmployee}>
                    <input type="text"
                        className={className}
                        placeholder="Как его зовут?"
                        onChange={this.onValueChange}
                        value={name}
                        name="name" />
                    <input type="number"
                        className={className}
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange}
                        value={salary}
                        name="salary"/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmpoyeesAddForm;