import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCellContent = (dItem, tItem) => {
    if (tItem.content) return tItem.content(dItem);
    return _.get(dItem, tItem.key);
  };

  render() {
    const { data, tableHeaders } = this.props;

    return (
      <tbody>
        {data.map(dItem => (
          <tr key={dItem._id}>
            {tableHeaders.map(tItem => (
              <td key={dItem._id + tItem.key}>
                {this.renderCellContent(dItem, tItem)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
