import ChartForCalories from 'components/AllCharts/MyChartForCalories';
import ChartForCarbonohidrates from 'components/AllCharts/MyChartForCarbonohidrates';
import ChartForProtein from 'components/AllCharts/MyChartForProtein';
import ChartForFat from 'components/AllCharts/MyChartForFat';

import {
  Wrapper,
  Title,
  InfoBox,
  MainChartBox,
  CardList,
  Card,
  ChartBox,
  CardText,
  CardTitle,
  CounterList,
  Counter,
} from './MyFood.Styled';

// import LineChartForCalories from 'components/Charts/FoodCharts/LineChartForCalories';

// import LineChartCalories from 'components/AllCharts/LineChartCalories';
// import LineChartWater from 'components/AllCharts/LineChartWater';
// import ScaleChart from 'components/AllCharts/ScaleChartWeight';


const Food = () => {
  return (
    <Wrapper>
      <Title>Food</Title>
      <InfoBox>
        <MainChartBox>
          <ChartForCalories />
        </MainChartBox>
        <CardList>
          <Card>
            <ChartBox>
              <ChartForCarbonohidrates />
            </ChartBox>
            <CardText>
              <CardTitle>Carbonohidrates</CardTitle>
              <CounterList>
                {/*мета для вуглеводів */}
                <Counter>
                  Goal: <span>{}</span>
                </Counter>
                {/* залишилось для вуглеводів */}
                <Counter>
                  left: <span>{}</span>
                </Counter>
              </CounterList>
            </CardText>
          </Card>
          <Card>
            <ChartBox>
              <ChartForProtein />
            </ChartBox>
            <CardText>
              <CardTitle>Protein</CardTitle>
              <CounterList>
                {/*мета для протеїнів */}
                <Counter>
                  Goal: <span>{}</span>
                </Counter>
                {/*залишилось для протеїнів */}
                <Counter>
                  left: <span>{}</span>
                </Counter>
              </CounterList>
            </CardText>
          </Card>
          <Card>
            <ChartBox>
              <ChartForFat />
            </ChartBox>
            <CardText>
              <CardTitle>Fat</CardTitle>
              <CounterList>
                {/*мета для жирів */}
                <Counter>
                  Goal: <span>{}</span>
                </Counter>
                {/*залишилось для жирів */}
                <Counter>
                  left: <span>{}</span>
                </Counter>
              </CounterList>
            </CardText>
          </Card>
        </CardList>
      </InfoBox>
      {/* <LineChartForCalories/> */}
      {/* <LineChartCalories />
      <LineChartWater />
      <ScaleChart/> */}
    </Wrapper>
  );
};

export default Food;
