import React from 'react'
// import Card from './Card'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            cardNumber: '',
            cardName: '',
            cvv: '',
            yearOption: 'YY',
            monthOption: 'MM',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.addGaps = this.addGaps.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSelect(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    addGaps(str, gapNo) {
        let newStr = " ";
        let len = str.length;
        for (let i = 0; i<len; i++) {
            newStr = newStr + str[i];
            while(newStr.length % (gapNo+1) === 0) {
                newStr = newStr + " ";
            } 
        }
        return newStr.trim(" ");
    }

    render() {
        const {
            cardNumber,
            cardName,
            cvv,
            yearOption,
            monthOption,
        } = this.state

        return (
            <main>
                <div className="app__base">
                    <div className="credit__card box__shadow">
                        <div className="card__brand">
                            <p className="card__type">debit</p>
                            <div className="bank__brand">
                                <div className="square__inner"></div>
                                <h3 className="bank__name">GTBank</h3>
                            </div>
                        </div>
                        <div className="card__chip"></div>
                        <div className="credit__card__details">
                            <form className="credit-card">
                                <input
                                    type="text"
                                    className="card__form__control"
                                    value={cardNumber}
                                    placeholder="0000 0000 0000 0000"
                                />
                                <div className="name_expiry">
                                    <input
                                        type="text"
                                        className="card__form__control name"
                                        value={cardName}
                                        placeholder="Jane Doe"
                                    />
                                    <input
                                        type="text"
                                        className="card__form__control expiry"
                                        value={`${monthOption} / ${yearOption}`}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="form__card box__shadow">
                        <form>
                            <div className="form__group">
                                <div className="input number">
                                    <label>Card Number</label>
                                </div>
                                <input
                                    type="text"
                                    value={this.addGaps(cardNumber, 4)}
                                    name="cardNumber"
                                    className="form__control"
                                    placeholder="0000 0000 0000 0000"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form__group">
                                <div className="input name">
                                    <label>Card Name</label>
                                </div>
                                <input
                                    type="text"
                                    value={cardName}
                                    name="cardName"
                                    className="form__control"
                                    placeholder="Jane Doe"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form__group">
                                <div className="expr">
                                    <label>Expiration Date</label>
                                </div>
                                <div className="flex">
                                    <div className="flex__item">
                                        <select
                                            className="select month"
                                            defaultValue={monthOption}
                                            name="monthOption"
                                            onChange={this.handleSelect}
                                        >
                                            <option value="month">
                                                {monthOption}
                                            </option>
                                            <option value="01">Jan</option>
                                            <option value="02">Feb</option>
                                            <option value="03">Mar</option>
                                            <option value="04">Apr</option>
                                            <option value="05">May</option>
                                            <option value="06">Jun</option>
                                            <option value="07">Jul</option>
                                            <option value="08">Aug</option>
                                            <option value="09">Sept</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                        </select>
                                    </div>
                                    <div className="flex__item">
                                        <select
                                            className="select year"
                                            defaultValue={yearOption}
                                            name="yearOption"
                                            onChange={this.handleSelect}
                                        >
                                            <option value="year">
                                                {yearOption}
                                            </option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                    </div>
                                    <div className="flex__items">
                                        <input
                                            type="text"
                                            name="cvv"
                                            value={cvv}
                                            className="cvv"
                                            placeholder="CVV"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}

export default App
