import React from "react";
import MyDataRow from "./MyDataRow.js";

class MyDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columnNames: []
    };
  }

  render() {
    let { data, columnNames } = this.props;

    return (
      <table>
        <tr>
          {Object.values(columnNames).map(name => (
            <th>{name}</th>
          ))}
        </tr>
        {data.map(row => (
          <MyDataRow row={row} columnNames={columnNames} />
        ))}
      </table>
    );
  }
}

export default MyDataTable;
