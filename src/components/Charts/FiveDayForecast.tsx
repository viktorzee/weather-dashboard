import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getOrganizedNextDaysWeatherData } from "../../services/index"

const FiveDayForecast = ({ nextDaysWeatherData, isMetric }: any) => {
  const dayMeasurements = getOrganizedNextDaysWeatherData(nextDaysWeatherData);

  const chartData = Object.keys(dayMeasurements).map((date) => ({
    date,
    temperature:
      dayMeasurements[date].temps.reduce((sum, temp) => sum + temp, 0) /
      dayMeasurements[date].temps.length,
  }));

  return (
    <div className="pt-5  dark:bg-[#1E213A] bg-blue-600 shadow-xl text-white">
      <p className="text-center text-white font-bold">
        Temperature Trends for the 5-day Forecast
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis
            dataKey="date"
            tick={{ fill: "white" }} 
            label={{ fill: "white" }} 
          />
          <YAxis
            tick={{ fill: "white" }} 
            label={{ fill: "white" }} 
          />
          <Tooltip labelStyle={{ color: "black" }} />{" "}
          <Legend wrapperStyle={{ color: "white" }} />{" "}
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
            name={`Temperature (°${isMetric ? 'C' : 'F'})`}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FiveDayForecast;
