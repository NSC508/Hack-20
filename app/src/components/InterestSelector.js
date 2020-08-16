import React from 'react';
import MultiSelect from "@khanacademy/react-multi-select";

const options = [
  {label: "Basketball", value: "basketball"},
  {label: "Football", value: "football"},
  {label: "Tennis", value: "tennis"},
  {label: "Running", value: "running"},
  {label: "Hiking", value: "hiking"},
  {label: "Painting", value: "painting"},
  {label: "Camping", value: "camping"},
  {label: "Playing Music", value: "playing music"},
  {label: "Cooking", value: "cooking"},
  {label: "Computer science", value: "computer science"},
  {label: "Video games", value: "video games"}
];

class Selector extends React.Component {
  state = {
    selected: [],
  }

  render(props) {
    const {selected} = this.state;

    return <MultiSelect
      options={options}
      selected={selected}
      onSelectedChanged={selected => this.setState({selected})}
      onSubmit={() => this.state}
    />
  }
}

export default Selector;