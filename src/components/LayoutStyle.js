import { Container } from '@mui/material';

export default function LayoutStyle({children}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Container>
      {children}
      </Container>
    </div>
  );
}
