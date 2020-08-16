import React from 'react';
import MultiSelect from "@khanacademy/react-multi-select";

const options = [
  {label: "Applied and Computational Mathematical Sciences", value: 1},
  {label: "Art: Interdisciplinary", value: "art_interdisciplinary"},
  {label: "Art: Painting and Drawing", value: "art_paintingAndDrawing"},
  {label: "Art: Photomedia", value: "art_photomedia"},
  {label: "Art: Three Dimensional Forum", value: "art_threeDimensionalForum"},
  {label: "Art History", value: "artHistory"},
  {label: "Astronomy", value: "astronomy"},
  {label: "Biochemistry", value: "biochemistry"},
  {label: "Biology", value: "biology"},
  {label: "Biology: Ecology, Evolution, and Conservation", value: "biology_ecology"},
  {label: "Biology: Molecular, Cellular, and Development", value: "biology_molecular"},
  {label: "Biology: Plant", value: "biology_plant"},
  {label: "Computer Science", value: "computerScience"},
  {label: "Dance", value: "dance"},
  {label: "Drama", value: "drama"},
  {label: "Mathematics", value: "math"},
  {label: "Music", value: "music"},
  {label: "Physics", value: "physics"},
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