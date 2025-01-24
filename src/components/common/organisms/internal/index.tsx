import styled from "@emotion/styled";

const NAVBAR_MAX_HEIGHT_PX = 60;

const NavbarHeader = styled('header')(({
  position: 'sticky',
  top: 0,
  display: 'flex',
  background: 'var(--bg-color)',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: ['6px', '12px'],
  height: NAVBAR_MAX_HEIGHT_PX,
  boxSizing: 'border-box',
  zIndex: 10,
}));

const NavbarHeaderBordered = styled(NavbarHeader)(({
  borderBottom: '1px solid var(--neutral-color)',
}));

const NavContent = styled('nav')(({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  alignSelf: 'center',
}));

const NavBrandSearch = styled('div')(({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexGrow: 1,
  gap: '1rem',
  '> a': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem', 
  }
}));

const NavBrandName = styled('div')(({
  display: 'flex',
  flexGrow: 1,
  fontSize: '1rem'
}));

const NavAccount = styled('div')(({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 0,
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
}));

export {
  NavbarHeader,
  NavbarHeaderBordered,
  NavContent,
  NavBrandSearch,
  NavBrandName,
  NavAccount
};
