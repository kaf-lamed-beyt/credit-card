import React from 'react'
// import Card from './Card'

class App extends React.Component {
    render() {
        return (
            <main>
                <div className="app__base">
                    <div className="form__card box__shadow">
                        <form>
                            <div className="form__group">
                                <div className="input number">
                                    <label>Card Number</label>
                                </div>
                                <input
                                    type="text"
                                    name="card number"
                                    className="form__control"
                                />
                            </div>
                            <div className="form__group">
                                <div className="input name">
                                    <label>Card Name</label>
                                </div>
                                <input
                                    type="text"
                                    name="card name"
                                    className="form__control"
                                />
                            </div>
                            <div className="form__group">
                                <div className="expr">
                                    <label>Expiration Date</label>
                                </div>
                                <div className="flex">
                                    <div className="flex__item">
                                        <select className="select month">
                                            <option value="month">Month</option>
                                            <option value="January">Jan</option>
                                            <option value="February">
                                                Feb
                                            </option>
                                            <option value="March">Mar</option>
                                            <option value="April">Apr</option>
                                            <option value="May">May</option>
                                            <option value="June">Jun</option>
                                            <option value="July">Jul</option>
                                            <option value="August">Aug</option>
                                            <option value="September">
                                                Sept
                                            </option>
                                            <option value="October">Oct</option>
                                            <option value="November">
                                                Nov
                                            </option>
                                            <option value="December">
                                                Dec
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex__item">
                                        <select className="select year">
                                            <option value="year">Year</option>
                                            <option value="2020">20</option>
                                            <option value="2021">21</option>
                                            <option value="2022">22</option>
                                            <option value="2023">23</option>
                                            <option value="2024">24</option>
                                            <option value="2025">25</option>
                                            <option value="2026">26</option>
                                            <option value="2027">27</option>
                                            <option value="2028">28</option>
                                            <option value="2029">29</option>
                                            <option value="2030">30</option>
                                            <option value="2031">31</option>
                                        </select>
                                    </div>

                                    <div className="flex__items">
                                        <input
                                            type="text"
                                            name="cvv"
                                            className="cvv"
                                            placeholder="CVV"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}

export default App
