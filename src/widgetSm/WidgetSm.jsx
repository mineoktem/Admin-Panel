import "./widgetSm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_cpUuV0VAJmQfg0R0FFYvUic2eK65uRGtEA&usqp=CAU" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Jamie Zawinski</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="WidgetSmButton">
                 <Visibility className="widgetSmIcon"/>
                 Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zWNrEH8j3LrLpaFjbmC-8PLUidxsSpBcWQ&usqp=CAU" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Steve McConnell</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="WidgetSmButton">
                 <Visibility className="widgetSmIcon"/>
                 Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://cdn.theorg.com/acf0cd21-d3c8-49d7-8d88-67318e19aeda_small.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Alexey Pazhitnov</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="WidgetSmButton">
                 <Visibility className="widgetSmIcon"/>
                 Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfUaEDw9dIiguDrOHLk1qq01i0jiAQxjRnw&usqp=CAU" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Pierre Omidyar</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="WidgetSmButton">
                 <Visibility className="widgetSmIcon"/>
                 Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/03/10183927/danial-ricaros-785707-unsplash.jpeg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Paul Buchheit</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="WidgetSmButton">
                 <Visibility className="widgetSmIcon"/>
                 Display
                </button>
            </li>
        </ul>
    </div>
  );
}
