import React from 'react';

type Props = {
  children: React.ReactNode;
  noMargin?: boolean;
}

const SectionTitle: React.FC<Props> = ({noMargin=false, children}: Props): JSX.Element => {
  return <div className="section-title-container" style={noMargin ? {margin: 0} : {}}>
    <div className="section-title" id="cornerbordercontent">
      <h4>{children}</h4>
    </div>
  </div>
}

export default SectionTitle;