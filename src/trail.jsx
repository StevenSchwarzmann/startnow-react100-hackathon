import React from "react";

export default class Trail extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  handleError = e => {
    this.setState({
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Symbol_question-rtl.svg"
    });
  };

  render() {
    let props = this.props;
    let imgUrl = this.state.image;

    return (
      <div className="well">
        <table>
          <tbody>
            <tr className="row">
              <td className="col">
                <img
                  className="hikeImage"
                  src={imgUrl}
                  onError={this.handleError}
                  alt=""
                />
              </td>
              <td classname="col-8">
                
                <h4 className="trailTit">{props.name}</h4>
                <p className="tableDes">
                  <strong>Description : </strong> {props.summary}
                </p>
                <p className="tableLoc">
                  <i className="fa fa-map-marker" /> {props.location}
                </p>
              </td>
              <td className="col">
                <a href={props.url} target="_blank">
                  For more information click HERE!
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// export default props => (

// <div className='well'>
//     <table>
//         <tbody>
//             <tr className="row">
//                 <td className="col"> <img className="hikeImage" src={props.image} onError="" /> </td>
//                 <td classname="col-8"> <h4 className="trailTit">{props.name}</h4>
//                 <p className="tableDes"><strong>Description : </strong> {props.summary} </p>
//                 <p className="tableLoc"><i className="fa fa-map-marker"></i> {props.location} </p></td>
//                 <td className="col"> <a href={props.url} target="_blank">For more information click HERE!</a> </td>
//             </tr>
//         </tbody>
//     </table>
// </div>
// );