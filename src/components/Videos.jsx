import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos,direction }) => {
  // Check if videos is null or undefined before mapping over it
  if (!videos) {
    return <div>Loading...</div>;
  }

  return (
    <Stack direction={direction ||"row"} flexWrap="wrap" justifyContent="start" gap={0.1}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
