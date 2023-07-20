import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column', // <-- stack navbar and content vertically
      height: '100%',
      backgroundColor: theme.palette.background.dark,
    },
    toolbar: {
      display: 'flex',
      height: '70px',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.success.main,
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      display: 'flex', // <-- use flexbox layout
      alignItems: 'center', // <-- center movies horizontally
      padding: '2em',
      height: '100vh',
      overflow: 'auto',
    },
  }));
  
  export default useStyles;
  