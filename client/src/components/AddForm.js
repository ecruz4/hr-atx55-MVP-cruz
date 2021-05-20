import React from 'react'

class AddForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      plant_name: '',
      date_planted: '',
      water: "1,8,15,22",
      fertilize: "1",
      prune: "1",
      photo: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit(e) {
    this.props.handleAdd(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <div className="bg-brown rounded-3xl">
        <h1 className="ml-10 mt-10 text-textContrast font-poppins text-bold text-4xl">Add Plant:</h1>
        <form className="mt-6 grid ml-10" onSubmit={this.handleSubmit}>
          <label className="mb-5 font-poppins">
            Plant Name:
            <input className="ml-2 rounded-lg h-8 mt-2" type="text" name="plant_name" onChange={(e) => {this.handleChange(e)}} value={this.state.plant_name} />
          </label>
          <label className="mb-5 font-poppins">
            Date Planted:
            <input className="ml-2 rounded-lg h-8 mt-2" type="date" name="date_planted" onChange={(e) => {this.handleChange(e)}} value={this.state.date_planted} />
          </label>
          <label className="mb-5 font-poppins">
            Watering (per week):
            <select className="ml-2 rounded-lg h-8 mt-2" name="water" value={this.state.water} onChange={(e) => {this.handleChange(e)}}>
              <option value={[1, 8, 15, 22]}>Once a Week</option>
              <option value={[1, 4, 8, 11, 15, 18, 22, 25]}>Twice a Week</option>
              <option value={[true]}>Daily</option>
            </select>
          </label>
          <label className="mb-5 font-poppins">
            Fertilizing (per month):
            <select className="ml-2 rounded-lg h-8 mt-2" name="fertilize" value={this.state.fertilize} onChange={(e) => {this.handleChange(e)}}>
              <option value={[1]}>Once a Month</option>
              <option value={[1, 15]}>Twice a Month</option>
              <option value={[1, 8, 15, 22]}>Weekly</option>
            </select>
          </label>
          <label className="mb-5 font-poppins">
            Pruning (per month):
            <select className="ml-2 rounded-lg h-8 mt-2" name="prune" value={this.state.prune} onChange={(e) => {this.handleChange(e)}}>
              <option value={[1]}>Once a Month</option>
              <option value={[1, 15]}>Twice a Month</option>
              <option value={[1, 8, 15, 22]}>Weekly</option>
            </select>
          </label>
          <label className="mb-5 font-poppins">
            Image:
            <input className="ml-2 rounded-lg h-8 mt-2" type="text" name="photo" onChange={(e) => {this.handleChange(e)}} value={this.state.photo} />
          </label>
            <input className="mb-5 w-40 h-14 rounded-2xl font-poppins" type="submit" name="submit" value='Submit' />
        </form>
      </div>
    )
  }
}

export default AddForm
