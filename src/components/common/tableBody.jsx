import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  render() {
    const { data, tableHeaders } = this.props;

    return (
      <tbody>
        {data.map(dItem => (
          <tr>
            {tableHeaders.map(tItem => (
              <td>{_.get(dItem, tItem.key)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
