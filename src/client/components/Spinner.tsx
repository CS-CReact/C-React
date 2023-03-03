/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor(): JSX.Element {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      {/* <CircularProgress color="success" />
      <CircularProgress color="inherit" /> */}
    </Stack>
  );
}
