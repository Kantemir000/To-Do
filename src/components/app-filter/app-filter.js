import { Component } from 'react';
import './app-filter.css'

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonActive: {
                buttonAllEmp: 'btn-light',
                buttonIncreaseEmp: 'btn-outline-light',
                buttonSalaryEmp: 'btn-outline-light'
            }
        }
    }

    onUpdateFilter = (e) => {
        e.preventDefault();
        const event = e.target;

        if (event && event.closest("button")) {
            if (event.classList.contains('all')) {
                this.props.onUpdateFilter('')
                this.setState({buttonActive: {
                    buttonAllEmp: 'btn-light',
                    buttonIncreaseEmp: 'btn-outline-light',
                    buttonSalaryEmp: 'btn-outline-light'
                }})
            } else if (event.classList.contains('increase')) {
                this.props.onUpdateFilter('increase')
                this.setState({buttonActive: {
                    buttonAllEmp: 'btn-outline-light',
                    buttonIncreaseEmp: 'btn-light',
                    buttonSalaryEmp: 'btn-outline-light'
                }})
            } else if (event.classList.contains('salary')) {
                this.props.onUpdateFilter('salary')
                this.setState({buttonActive: {
                    buttonAllEmp: 'btn-outline-light',
                    buttonIncreaseEmp: 'btn-outline-light',
                    buttonSalaryEmp: 'btn-light'
                }})
            }
        }
    }
    
    render() {
        const {buttonAllEmp, buttonIncreaseEmp, buttonSalaryEmp} = this.state.buttonActive;

        return (
            <div className="btn-group"
                onClick={this.onUpdateFilter}>
                <button className={`btn ${buttonAllEmp} all`}>
                        Все сотрудники
                </button>
                <button className={`btn ${buttonIncreaseEmp} increase`}>
                        На повышении
                </button>
                <button className={`btn ${buttonSalaryEmp} salary`}>
                        ЗП больше  1000$
                </button>
                 
            </div>
        )
    }
}

export default AppFilter;