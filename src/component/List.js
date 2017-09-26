import React from 'react';

const List = props => {
  return(
    <ul>
      {
        props.items.map((item, index) =>
        <li key={index}>
          <div className="col s12 m8 offset-m2 16 offset-13">
            <div className="card-panel grey lighten-5 z-depth-1">
              <div className="row valign-wrapper">
                <div className="col s2">
                  <i className="fa fa-circle-o fa-2x" aria-hidden="true"></i>
                </div>
                <div className="col s10">
                  <span className="black-text">
                    {item}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
        )
      }
    </ul>
  );
};

export default List;
