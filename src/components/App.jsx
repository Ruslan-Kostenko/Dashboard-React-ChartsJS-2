// import { Doughnut } from "react-chartjs-2";
import { Container } from './Container/Container.styled';
// import FoodChart from './Charts/foodCharts';
// import { DoughnutGraph } from "./Charts/FoodCharts/foodCharts";
// import {
//   FoodThumb,
//   WaterThumb,
//   DailyThumb,
//   DailyBox,
//   WaterBox,
//   FoodBox,
//   BiggestThumb,
// } from './Charts/FoodCharts/Charts.Styled';
// import { FoodCharts } from './Charts/FoodCharts/Food';
import Food from './AllFood/MyFood';
import DashboardPage from './AlllDashboard/DashboardPage';

export const App = () => {
  return (
    <Container>
      <Food />
      <DashboardPage/>
      {/* <h1>My Chart</h1>
      <BiggestThumb>
        <DailyThumb>
          <h2>Daily</h2>
          <DailyBox />
        </DailyThumb>
        <WaterThumb>
          <h2>Water</h2>
          <WaterBox />
        </WaterThumb>
        <FoodThumb>
          <h2>Food</h2>
          <FoodBox>
            <FoodCharts/>
          </FoodBox>
        </FoodThumb>
      </BiggestThumb> */}
    </Container>
  );
};
