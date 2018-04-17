import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: 0,
      exVat: 0
    }
  }

  handleIncVatChange = (event) => {
    // Input: value from inc vat field
    // Output: remebber the inc vat state,
    // and calc & set ex vat
    const incVatNumber = parseInt(event.target.value)
    this.setState({
      incVat: incVatNumber,
      exVat: incVatToExtVat(this.state.vatRate, incVatNumber)
    })
  }

  handleExVatChange = (event) => {

    const exVatNumber = parseInt(event.target.value)
    this.setState({
      exVat: exVatNumber,
      incVat: exVatToIncVat(this.state.vatRate, exVatNumber)
    })
  }

  handleVatRateChange = (event) => {
    const vatRateNumber = parseInt(event.target.value)
    this.setState({
      vatRate: vatRateNumber,
      incVat: 0,
      exVat: 0
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <label>
          25%
            <input
              onChange={this.handleVatRateChange}
              checked={this.state.vatRate === 25}
              value="25"
              type="radio" />
          </label>

          <label>
            12%
            <input
              onChange={this.handleVatRateChange}
              checked={this.state.vatRate === 12}
              value="12"
              type="radio" />
          </label>

          <label>
            6%
            <input
              onChange={this.handleVatRateChange}
              checked={this.state.vatRate === 6}
              value="6"
              type="radio" />
          </label>
        </div>

        <label>
          Inklusive moms (kr)
          <input
            name="incVat"
            onChange={this.handleIncVatChange}
            value={this.state.incVat}
            type="number" />
        </label>

        <label>
          Exclusive moms (kr)
          <input
            name="exVat"
            onChange={this.handleExVatChange}
            value={this.state.exVat}
            type="number" />
        </label>

        <label>
            Momssumma

          <input
            name="sum"
            value={this.state.incVat - this.state.exVat}
            type="text" />
        </label>
      </div>
    )
  }
}

export default App
