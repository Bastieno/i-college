import Box from '@components/common/box';
import Link from 'next/link';

export default () => (
  <Box height={'100px'} bg={'white'} display="flex" alignItems="center">
    <Link href="/">
      <a style={{
        display: 'inline-block',
        width: '100px',
        fontWeight: 700,
        textAlign: 'center',
        padding: '8px',
        backgroundColor: '#000',
        color: '#fff',
        marginLeft: '32px',
      }}>
        iCOLLEGE
      </a>
    </Link>
  </Box>
);
