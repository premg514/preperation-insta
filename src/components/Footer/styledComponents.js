import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 64px 24px 32px;
  background: white;
  font-family: "Inter", serif;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 48px;
  flex-wrap: wrap;
  gap: 32px;
`;

export const LogoSection = styled.div`
  max-width: 300px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: #000000;
  margin-bottom: 16px;
`;

export const LogoDescription = styled.p`
  color: #22242a;
  line-height: 1.6;
  font-size: 14px;
`;

export const NewsletterSection = styled.div`
  max-width: 400px;
`;

export const NewsletterTitle = styled.h3`
  color: #000000;
  margin-bottom: 16px;
`;

export const NewsletterForm = styled.form`
  display: flex;
  gap: 8px;
`;

export const EmailInput = styled.input`
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  flex: 1;
  font-size: 14px;
  
  &::placeholder {
    color: #37383c;
  }
`;

export const SubscribeButton = styled.button`
  background: #fc2947;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    
  }
`;

export const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  margin-bottom: 48px;
`;

export const LinkColumn = styled.div``;

export const ColumnTitle = styled.h3`
  color: #000000;
  font-size: 16px;
  margin-bottom: 24px;
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 12px;
  color:#37383c;
`;

export const Link = styled.a`
  color: #37383c;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    color: ;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  color: #37383c;
  font-size: 14px;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #e0e0e0;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Copyright = styled.p`
  color: #37383c;
  font-size: 14px;
  
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 6px;
`;
