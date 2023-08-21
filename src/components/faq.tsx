import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'; 
import SectionTitle from './section-title';
import { setSourceMapRange } from 'typescript';

type QA  = {
  question: string;
  answer: React.ReactNode;
}

const QAs: QA[] = [
  {
    question: 'What is JMKRIDE?',
    answer: <div>Test</div>,
  },
  {
    question: 'What?',
    answer: 'Yes.'
  }
];

type QuestionDropdownProps = { qa: QA }

const QuestionDropdown: React.FC<QuestionDropdownProps> = ({qa}: QuestionDropdownProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return <div className='qa-container raised-box'>
    <div onClick={toggle} className='qa-question'>
      {'\u2022  '}{qa.question}
      {open 
        ? <FiChevronDown/>
        : <FiChevronUp/>
      }
    </div>
    {open && <div className='qa-answer'>{qa.answer}</div>}
  </div>
}


const FAQ: React.FC<{}> = (): JSX.Element => {

  return <div className='section-container'>
    <SectionTitle id="faq">Frequently Asked Questions</SectionTitle>
    {QAs.map((qa, index) => <QuestionDropdown qa={qa} key={index}/>)}
  </div>
}

export default FAQ;