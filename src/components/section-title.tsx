import React from 'react';

type Props = {
  children: React.ReactNode;
  noMargin?: boolean;
  noBorder?: boolean;
  id?: string;
}

const SectionTitle: React.FC<Props> = ({noMargin=false, noBorder=false, id, children}: Props): JSX.Element => {
  return <div className="section-title-container" style={noMargin ? {margin: 0, width: "unset"} : {}} id={id}>
    <div className={"section-title " + (noBorder ? "borderless" : "border")} id={noBorder ? "" : "cornerbordercontent"}>
      <h4>{children}</h4>
    </div>
  </div>
}

export default SectionTitle;