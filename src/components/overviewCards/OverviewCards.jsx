import { Card, CardContent, Typography, Stack } from "@mui/material";

const dashboardData = [
  {
    title: "Users",
    value: "1,280",
  },
  {
    title: "Revenue",
    value: "$84,000",
  },
  {
    title: "Orders",
    value: "430",
  },
];

export default function OverviewCards() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={3}
      sx={{ width: "100%", mb: 3 }}
    >
      {dashboardData.map((item, index) => (
        <Card
          key={index}
          elevation={4}
          sx={{
            width: "100%",
            flex: { md: 1 },
            height: 150,
            borderRadius: 3,
          }}
        >
          <CardContent
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Card ke content ko center me lane ke liye
            }}
          >
            <Typography variant="h6" color="text.secondary">
              {item.title}
            </Typography>

            <Typography
              variant="h4"
              color="primary"
              sx={{ mt: 1, fontWeight: "bold" }}
            >
              {item.value}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
