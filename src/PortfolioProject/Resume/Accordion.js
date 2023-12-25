import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='flexacc'> <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; {title} </p> <p className='plus'> {isActive ? <i class="fa fa-caret-up" aria-hidden="true"></i> : <i class="fa fa-caret-down" aria-hidden="true"></i>
}</p></div>
        <div></div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;