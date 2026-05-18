import { Grid, Card, CardContent, Typography } from "@mui/material";

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
    <Grid container spacing={3}>
      {dashboardData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card elevation={4}>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>

              <Typography variant="h4" color="primary" sx={{ mt: 2 }}>
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
