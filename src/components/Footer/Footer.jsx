import React from 'react'

import {
    FooterContainer,
    FooterContent,
    TopSection,
    LogoSection,
    Logo,
    LogoDescription,
    NewsletterSection,
    NewsletterTitle,
    NewsletterForm,
    EmailInput,
    SubscribeButton,
    LinksSection,
    LinkColumn,
    ColumnTitle,
    LinksList,
    LinkItem,
    Link,
    ContactItem,
    BottomSection,
    Copyright,
    LegalLinks
  } from './styledComponents';
  

export default function Footer() {
    return (
        <FooterContainer>
          <FooterContent>
            <TopSection>
              <LogoSection>
                <Logo>brix</Logo>
                <LogoDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit aliquam mauris sed ma
                </LogoDescription>
              </LogoSection>
              <NewsletterSection>
                <NewsletterTitle>Subscribe to our newsletter</NewsletterTitle>
                <NewsletterForm>
                  <EmailInput type="email" placeholder="Enter your email address" />
                  <SubscribeButton type="submit">Subscribe</SubscribeButton>
                </NewsletterForm>
              </NewsletterSection>
            </TopSection>
    
            <LinksSection>
              <LinkColumn>
                <ColumnTitle>About us</ColumnTitle>
                <LinksList>
                  <LinkItem><Link href="#">Mission</Link></LinkItem>
                  <LinkItem><Link href="#">Our team</Link></LinkItem>
                  <LinkItem><Link href="#">Awards</Link></LinkItem>
                  <LinkItem><Link href="#">Testimonials</Link></LinkItem>
                  <LinkItem><Link href="#">Privacy policy</Link></LinkItem>
                </LinksList>
              </LinkColumn>
    
              <LinkColumn>
                <ColumnTitle>Services</ColumnTitle>
                <LinksList>
                  <LinkItem><Link href="#">Web design</Link></LinkItem>
                  <LinkItem><Link href="#">Web development</Link></LinkItem>
                  <LinkItem><Link href="#">Mobile design</Link></LinkItem>
                  <LinkItem><Link href="#">UI/UX design</Link></LinkItem>
                  <LinkItem><Link href="#">Branding design</Link></LinkItem>
                </LinksList>
              </LinkColumn>
    
              <LinkColumn>
                <ColumnTitle>Portfolio</ColumnTitle>
                <LinksList>
                  <LinkItem><Link href="#">Corporate websites</Link></LinkItem>
                  <LinkItem><Link href="#">E-commerce</Link></LinkItem>
                  <LinkItem><Link href="#">Mobile apps</Link></LinkItem>
                  <LinkItem><Link href="#">Landing pages</Link></LinkItem>
                  <LinkItem><Link href="#">UI/UX projects</Link></LinkItem>
                </LinksList>
              </LinkColumn>
    
              <LinkColumn>
                <ColumnTitle>Contact us</ColumnTitle>
                <LinksList>
                  <LinkItem>
                    <ContactItem>
                      <span>Email:</span>
                      <Link href="mailto:contact@brix.com">contact@brix.com</Link>
                    </ContactItem>
                    <ContactItem>
                      <span>Phone:</span>
                      <Link href="tel:(414) 687 - 5892">(414) 687 - 5892</Link>
                    </ContactItem>
                  </LinkItem>
                </LinksList>
              </LinkColumn>
            </LinksSection>
    
            <BottomSection>
              <Copyright>Copyright © 2025 BRIX Agency | All Rights Reserved |</Copyright>
              <LegalLinks>
                <Link href="#"> Terms and Conditions  |</Link> 
                <Link href="#">Privacy Policy</Link>
              </LegalLinks>
            </BottomSection>
          </FooterContent>
        </FooterContainer>
      );
}
