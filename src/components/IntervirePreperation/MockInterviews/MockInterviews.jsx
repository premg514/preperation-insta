import React from 'react';
import Header from '../../Header/Header';
import interviewPrepData from '../../../Data/interviewPrep';
import {
    Card,
    Container,
    Heading,
    SubHeading,
    Paragraph,
    List,
    ListItem,
    TipHeading,
    Button,
    AdditionalSection,
    TipSection,
    ButtonWrapper,
    ExamplesSection,
    RoundItem,
    ContentSection

} from './styleComponents';



const MockInterviews = () => {
    const data = interviewPrepData[0];

    return (
        <Container>

            <Card>
                <Heading>{data.heading}</Heading>
                <Paragraph>{data.description}</Paragraph>

                <ContentSection>
                    {data.rounds.map((round, index) => (
                        <RoundItem key={index}>
                            <Paragraph>{round}</Paragraph>
                        </RoundItem>
                    ))}
                </ContentSection>

                <Paragraph>{data.detailedDescription}</Paragraph>
            </Card>

            <Card>
                <TipHeading>{data.tipsHeading}</TipHeading>
                {data.tips.map((tip, index) => (
                    <TipSection key={index}>
                        <SubHeading>{tip.subHeading}</SubHeading>
                        <Paragraph>{tip.description}</Paragraph>
                    </TipSection>
                ))}
            </Card>

            <Card>
                <TipHeading>{data.additionalHeading}</TipHeading>
                {data.additionalContent.map((content, index) => (
                    <AdditionalSection key={index}>
                        <SubHeading>{content.subHeading}</SubHeading>
                        <Paragraph>{content.description}</Paragraph>

                        {content.importantPoints && (
                            <List>
                                {content.importantPoints.map((point, idx) => (
                                    <ListItem key={idx}>{point}</ListItem>
                                ))}
                            </List>
                        )}

                        {content.examples && (
                            <ExamplesSection>
                                {content.examples.map((example, idx) => (
                                    <Paragraph key={idx}>{example}</Paragraph>
                                ))}
                            </ExamplesSection>
                        )}

                        {content.button && (
                            <ButtonWrapper>
                                <Button>{content.button}</Button>
                            </ButtonWrapper>
                        )}
                    </AdditionalSection>
                ))}
            </Card>
        </Container>
    );
};

export default MockInterviews;