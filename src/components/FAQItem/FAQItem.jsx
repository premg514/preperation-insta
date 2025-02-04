import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FAQItemContainer, FAQQn, QuestionNumber, QuestionText, Answer } from './styledComponents'

export default function FAQItem(props) {
    const { item } = props
    const [isOpen, setIsOpen] = useState(false)

    const toggleAnswer = () => {
        setIsOpen(!isOpen)
    }

    return (
        <FAQItemContainer>
            <FAQQn onClick={toggleAnswer} aria-expanded={isOpen} aria-controls={`answer-${item.id}`}>
                <QuestionNumber>{item.id}</QuestionNumber>
                <QuestionText>{item.question}</QuestionText>
                {isOpen ? <RxCross2 size={24} color="#000000" /> : <FaPlus size={24} color="#000000" />}
            </FAQQn>
            <Answer id={`answer-${item.id}`} isOpen={isOpen}>
                <p>{item.answer}</p>
            </Answer>
        </FAQItemContainer>
    )
}

