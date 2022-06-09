import React from 'react';

type Props = {
  children: React.ReactNode;
}

const SectionTitle: React.FC<Props> = ({children}: Props): JSX.Element => {
  return <div className="section-title-container">
    <div className="section-title" id="cornerbordercontent">
      <h4>{children}</h4>
    </div>
  </div>
}

export default SectionTitle;