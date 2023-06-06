import "./widgetLg.css"

export default function WidgetLg() {
  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://silkwoodstudio.co.uk/wp-content/uploads/2020/06/business-headshot.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Sep 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
            </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="data:image/jpeg;base64,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" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Alice Walton</span>
          </td>
          <td className="widgetLgDate">28 Agu 2022</td>
          <td className="widgetLgAmount">$1500.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
            </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7woM10Gd1kMh2DQgk5I-W2T6ktHK13QHVsg&usqp=CAU" alt="" className="widgetLgImg" />
            <span className="widgetLgName">MacKenzie Scott</span>
          </td>
          <td className="widgetLgDate">17 Jul 2022</td>
          <td className="widgetLgAmount">$300.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
            </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QhXzOSFiYXGi_yMpbYPyfxa_YMmjTg1geQ&usqp=CAU" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Julia Koch</span>
          </td>
          <td className="widgetLgDate">20 Jun 2022</td>
          <td className="widgetLgAmount">$7500.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
            </td>
        </tr>
      </table>
    </div>
  );
}
