import styled from "@emotion/styled";

const MainAppLayout = styled('div')(({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
}));

const MainAppContainer = styled('main')(({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  flex: 1,
}));

const MainResultsContainer = styled('main')(({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  flex: 1,
}))

export { MainAppLayout, MainAppContainer, MainResultsContainer };
