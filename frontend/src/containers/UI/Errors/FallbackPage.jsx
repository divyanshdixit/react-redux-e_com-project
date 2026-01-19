import { Button, Box, Typography } from "@mui/material";

const FallbackPage = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h5" gutterBottom>
        Something went wrong
      </Typography>
      <Typography color="text.secondary" mb={3}>
        We couldn’t load this page. Please try again.
      </Typography>

      <Button variant="contained" onClick={() => window.location.reload()}>
        Reload Page
      </Button>
    </Box>
  );
};

export default FallbackPage;
