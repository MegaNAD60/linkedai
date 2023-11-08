import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const faqItems = [
    {
        id: 1,
        question: "Can I work on a project I started before the hackathon?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboore et dolore magna aliqua."
    },
    {
        id: 2,
        question: "What happens if I need help during the hackathon?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboore et dolore magna aliqua."
    },
    {
        id: 3,
        question: 'What happens if I dont have an idea for a project?',
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboore et dolore magna aliqua."
    },
    {
        id: 4,
        question: "Can I join a team or do I have to come with one?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboore et dolore magna aliqua."
    },
    {
        id: 5,
        question: "What happens after the hackathon ends?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboore et dolore magna aliqua."
    },
    {
        id: 5,
        question: "Can I work on a project I started before the hackathon?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboore et dolore magna aliqua."
    },
]

function FaqItems(){
    const ToggleAnswer = ({id, question, answer}) => {
        const [expanded, setExpanded] = useState(false);
        return(
            <div key={id}>
                <div onClick={() => setExpanded(!expanded)}>
                    <p>
                        {question}
                        <span style={{color: '#d434fe', float: 'right'}}><FaPlus /></span>
                    </p>
                </div>
                {expanded && <p>{answer}</p>}<hr style={{ borderBottom: '1px solid #d434fe'}} />
            </div>
        )
    }
    return(
        <>
            {faqItems.map(faq => {
                return <ToggleAnswer key={faq.id} question={faq.question} answer={faq.answer} />
            })}
        </>
    )
}

export default FaqItems;