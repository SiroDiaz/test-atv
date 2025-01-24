import styled from "@emotion/styled";

const IconButton = styled('button')(({
  display: 'inline-flex',
  height: '3rem',
  minHeight: '3rem',
  flexShrink: 0,
  cursor: 'pointer',
  userSelect: 'none',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--btn-neutral-border-radius, 0.5rem)',
  border: '1px solid transparent',
  textAlign: 'center',
  fontSize: '0.875rem',
  lineHeight: '1em',
  fontWeight: 600,
  textDecorationLine: 'none',
  transitionDuration: '0.2s',
  ':hover': {
    background: 'var(--bg-color)',
  },
}));

const IconButtonGhost = styled(IconButton)(({
  background: 'transparent',
  border: '1px solid transparent',
  ':hover': {
    background: 'transparent',
    border: '1px solid gainsboro',
  },
}));

const IconButtonRounded = styled(IconButtonGhost)(({
  borderRadius: '9999px',
  width: '48px',
  height: '48px'
}));

export { IconButton, IconButtonGhost, IconButtonRounded };
