import Box from '@components/Box';

export default () => (
  <Box
    height={'64px'}
    bg={'black'}
    width={'100%'}
    position="absolute"
    bottom="0"
    display="flex"
    flex="0 0 auto"
    alignItems="center"
  >
    <a style={{
      display: 'block',
      fontWeight: 700,
      textAlign: 'center',
      padding: '8px',
      backgroundColor: '#000',
      color: '#fff',
      marginLeft: '32px',
    }}>
      Copyright @ iCOLLEGE 2020
        </a>
  </Box>
);
