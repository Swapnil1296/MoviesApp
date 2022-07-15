import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import {Paper} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import {useNavigate} from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (value === 0) {
      navigate('/');
    } else if (value === 1) {
      navigate('/movies');
    } else if (value === 2) {
      navigate('/series');
    } else if (value === 3) {
      navigate('/search');
    }
  }, [value, navigate]);

  return (
    <Box sx={{width: 500}}>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
          <BottomNavigationAction label="Movies" icon={<MovieCreationIcon />} />
          <BottomNavigationAction label="Tv Series" icon={<LiveTvIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
