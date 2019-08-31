import React from 'react';
import Select from 'react-select';
 
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
 
const nameOptions = [
    { value: 'name1', label: 'name1' },
    { value: 'name2', label: 'name2' },
    { value: 'name3', label: 'name3' },
  ];

export default class SelectDropdown extends React.Component {

  constructor() {
      super()
      this.state = {
        selectedOption: null,
      }
  }
  
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = this.state;
 
    return (
        <div>
             <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={nameOptions}
      />
        </div>
     
    )
  }
}