import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { echartOptions } from "../constants/chartOptions";

const TokenomicsChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: echarts.ECharts | undefined;

    if (chartRef.current) {
      chart = echarts.init(chartRef.current);
      chart.setOption(echartOptions);
    }

    const handleResize = () => {
      if (chart && chartRef.current) {
        chart.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    // 初始调整大小
    handleResize();

    return () => {
      chart?.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100vh" }} />;
};

export default TokenomicsChart;
