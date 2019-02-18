import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCellContent = (dItem, thItem) => {
    if (thItem.content) return thItem.content(dItem);
    return _.get(dItem, thItem.key);
  };

  render() {
    const { data, tableHeaders } = this.props;

    return (
      <tbody>
        {data.map(dItem => (
          <tr key={dItem._id}>
            {tableHeaders.map(thItem => (
              <td key={dItem._id + thItem.key}>
                {this.renderCellContent(dItem, thItem)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
