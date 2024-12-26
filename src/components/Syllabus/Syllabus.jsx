import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useParams } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import Header from '../Header/Header';
import {
    Container,
    SectionTitle,
    SectionContent,
    TopicItem,
    DownloadButton
} from './styleComponents';
import syllabusCompanyData from '../Data/syllabus';
import {
    FaRegStar,
    FaCode,
    FaClipboardList,
    FaRegLightbulb,
    FaClock,
    FaCheckCircle,
} from 'react-icons/fa';

const Syllabus = () => {
    const { id } = useParams();
    const companyData = syllabusCompanyData.find(
        (data) => data.id === id
    );

    if (!companyData) {
        return (
            <Container>
                <p>Company data not found.</p>
            </Container>
        );
    }
    const contentRef = useRef();

    const downloadPDF = () => {
        html2canvas(contentRef.current, {
            useCORS: true, // Enable cross-origin resource sharing if needed
            logging: false, // Disable console logging
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const doc = new jsPDF();

            doc.addImage(imgData, 'PNG', 10, 10, 180, 0); // Adjust the size and position

            doc.save(`${companyData.companyName}-syllabus.pdf`);
        });
    };

    return (
        <Container ref={contentRef}>
            <Header />
            <SectionTitle>
                <FaClipboardList /> {companyData.companyName}
            </SectionTitle>
            {companyData.content.map((contentItem) => (
                <SectionContent key={contentItem.id}>
                    <h2>
                        <FaRegLightbulb /> {contentItem.title}
                    </h2>
                    <h3>
                        <FaClipboardList /> {contentItem.heading}
                    </h3>
                    <p>{contentItem.description}</p>
                    <ul>
                        {contentItem.highlights.map((highlight, index) => (
                            <li key={index}>
                                <FaRegStar /> {highlight}
                            </li>
                        ))}
                    </ul>
                    {contentItem.sections.map((section) => (
                        <div key={section.id} className="topic-section">
                            <h4>
                                <FaCode /> {section.heading}
                            </h4>
                            <ul>
                                {section.details.topics.map((topic) => (
                                    <TopicItem key={topic.id} className="topic-item">
                                        <FaCheckCircle /> {topic.name} - {topic.questions} Questions
                                    </TopicItem>
                                ))}
                            </ul>
                            <p>Notes:</p>
                            <ul>
                                {section.details.notes.map((note, index) => (
                                    <li key={index}>
                                        <FaClock /> {note}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </SectionContent>
            ))}
            <DownloadButton onClick={downloadPDF}>
                <FaDownload />
            </DownloadButton>
        </Container>
    );
};

export default Syllabus;
