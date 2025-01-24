import styled from "@emotion/styled";

const currentYear = new Date().getFullYear();

const FooterStyled = styled('footer')(({
  display: 'flex',
  background: 'var(--neutral-color)',
  alignItems: 'center',
  width: '100%',
  padding: ['6px', '12px'],
  boxSizing: 'border-box',
}));

const FooterContent = styled('div')(({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContent>
        <p>© {currentYear} Google LLC</p>
        <p>version: {__APP_VERSION__}</p>
      </FooterContent>
    </FooterStyled>
  );
};

export default Footer;
