"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

class Div extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpand = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const { id, title, children, length, height, date_select, hide } = this.props;
    const { expanded } = this.state;
    return (
      <div
      id={id}
      className={`bg-[#ffffff] text-black p-4 w-full sm:w-full md:w-[46%] shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] ${length} mb-2 relative ${expanded ? 'expanded absolute top-0 right-0 left-0' : ''} opacity-70 rounded-xl`}
      style={{
        height: expanded ? '100%' : height,
        width: expanded ? '100%' : '',
        position: expanded ? 'fixed' : '',
        zIndex: expanded ? '999' : '',
        opacity: expanded ? '1' : '',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
    >
        <div
          className="absolute top-2 right-4 mt-0 mr-2">
          <div className='float-right cursor-pointe'>
            {date_select}
            <FontAwesomeIcon icon={faExpand} onClick={this.toggleExpand} className={hide} />
          </div>
        </div>

        <div
          className="absolute top-2 left-4">
          <p
            className="text-lg font-bold">
            {title}
          </p>
        </div>
        {children}
      </div>
    );
  }
}

export default Div
