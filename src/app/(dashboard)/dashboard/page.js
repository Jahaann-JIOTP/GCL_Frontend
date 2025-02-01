"use client";
import React, { useState, useEffect, useRef } from "react";
import Div from "@/components/Div";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DashboardPage() {
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 1))
      .toISOString()
      .split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timePeriod, setTimePeriod] = useState("hourly"); // Track the selected time period (hourly, daily, monthly)

  const solarPieChartRef = useRef(null);
  const transformerPieChartRef = useRef(null);
  const solarsVsTransformersChartRef = useRef(null);
  const productionChartRef = useRef(null);
  const [dateRange, setDateRange] = useState([
    new Date(new Date().setDate(new Date().getDate() - 1)) ,// Start date default to today
    new Date(), // End date default to today
  ]);
  const [startDate1, endDate1] = dateRange;

  const [solarStartDate, setSolarStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 0))
      .toISOString()
      .split("T")[0]
  );
  const [solarEndDate, setSolarEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [transformerStartDate, setTransformerStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 0))
      .toISOString()
      .split("T")[0]
  );
  const [transformerEndDate, setTransformerEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [All_GensetStartDate, setAll_GensetStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 0))
      .toISOString()
      .split("T")[0]
  );
  const [All_GensetEndDate, setAll_GensetEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [solarValue, setSolarValue] = useState(null);
  const [transformerValue, setTransformerValue] = useState(null);
  const [All_GensetValue, setAll_GensetValue] = useState(null);

  const calculateDateRange = (range) => {
    const today = new Date();
    let start = new Date();
    let end = new Date();

    switch (range) {
      case "today":
        start = today;
        end = today;
        // console.log(start, end);
        break;
      case "yesterday":
        start = new Date(today.setDate(today.getDate() - 1));
        end = start;
        // console.log(start, end)
        break;
      case "this_week":
        start = new Date(today.setDate(today.getDate() - today.getDay()));
        end = new Date();
        // console.log(start, end);
        break;
      case "last_week":
        start = new Date(today.setDate(today.getDate() - today.getDay() - 7));
        end = new Date(today.setDate(start.getDate() + 6));
        // console.log(start, end);
        break;
      case "this_month":
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = today;
        // console.log(start, end);
        break;
      case "last_month":
        start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        end = new Date(today.getFullYear(), today.getMonth(), 0);
        // console.log(start, end);
        break;
      case "this_year":
        start = new Date(today.getFullYear(), 0, 1);
        end = today;
        // console.log(start, end);
        break;
      default:
        break;
    }

    return {
      startDate0: start.toISOString().split("T")[0],
      endDate0: end.toISOString().split("T")[0],
    };
  };
  // console.log(startDate0, endDate0);
  const handleSolarDropdownChange = (e) => {
    const { startDate0, endDate0 } = calculateDateRange(e.target.value);
    console.log(startDate0, endDate0);
    setSolarStartDate(startDate0);
    setSolarEndDate(endDate0);
  };

  const handleTransformerDropdownChange = (e) => {
    const { startDate0, endDate0 } = calculateDateRange(e.target.value);
    console.log(startDate0, endDate0);
    setTransformerStartDate(startDate0);
    setTransformerEndDate(endDate0);
  };

  const handleAll_GensetDropdownChange = (e) => {
    const { startDate0, endDate0 } = calculateDateRange(e.target.value);
    console.log(startDate0, endDate0);
    setAll_GensetStartDate(startDate0);
    setAll_GensetEndDate(endDate0);
  };

  useEffect(() => {
    const fetchSolarData = () => {
      const apiUrl = `http://15.206.128.214/Test_API/solar_vs_trans.php?start_date=${solarStartDate}&end_date=${solarEndDate}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.total_consumption) {
            setSolarValue(data.total_consumption.Solars);
          }
        })
        .catch((error) => {
          console.error("Error fetching Solars data:", error);
        });
    };

    fetchSolarData(); // Initial fetch
    const interval = setInterval(fetchSolarData, 60000); // Fetch every 1 minute

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [solarStartDate, solarEndDate]);

  useEffect(() => {
    const fetchTransformerData = () => {
      const apiUrl = `http://15.206.128.214/Test_API/solar_vs_trans.php?start_date=${transformerStartDate}&end_date=${transformerEndDate}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.total_consumption) {
            setTransformerValue(data.total_consumption.Transformers);
          }
        })
        .catch((error) => {
          console.error("Error fetching Transformers data:", error);
        });
    };

    fetchTransformerData(); // Initial fetch
    const interval = setInterval(fetchTransformerData, 60000); // Fetch every 1 minute

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [transformerStartDate, transformerEndDate]);

  useEffect(() => {
    const fetchAll_GensetData = () => {
      const apiUrl = `http://15.206.128.214/Test_API/solar_vs_trans.php?start_date=${All_GensetStartDate}&end_date=${All_GensetEndDate}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.total_consumption) {
            setAll_GensetValue(data.total_consumption.All_Genset);
          }
        })
        .catch((error) => {
          console.error("Error fetching All_Genset data:", error);
        });
    };

    fetchAll_GensetData(); // Initial fetch
    const interval = setInterval(fetchAll_GensetData, 60000); // Fetch every 1 minute

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [All_GensetStartDate, All_GensetEndDate]);

  useEffect(() => {
    const createProductionChart = async () => {
      const chartId = "productionChart";
      const chartContainer = document.getElementById(chartId);

      if (chartContainer) {
        const chart = am4core.create(chartId, am4charts.XYChart);
        chart.logo.disabled = true;

        // Dynamic API URL for production chart
        const apiUrl = `http://15.206.128.214/Test_API/solar_vs_trans_com.php?start_date=${startDate}&end_date=${endDate}&label=${timePeriod}`;

        try {
          const response = await axios.get(apiUrl);
          const data = response.data;

          chart.data = data;

          chart.dateFormatter.inputDateFormat = "yyyy-MM-ddTHH:mm:SS.SSS+zz:zz";

          // Create X-axis (Date Axis)
          const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
          dateAxis.renderer.grid.template.location = 0;
          dateAxis.renderer.minGridDistance = 50;
          dateAxis.renderer.labels.template.fontSize = 14;

          // Create primary Y-axis (for generated and transformer power in kW)
          const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          valueAxis.renderer.labels.template.fill = am4core.color("#666666");
          valueAxis.renderer.labels.template.fontSize = 12;
          valueAxis.renderer.labels.template.fontWeight = "bold";
          valueAxis.title.rotation = -90;
          valueAxis.title.fill = am4core.color("#666666");
          valueAxis.title.fontSize = 14;
          valueAxis.title.fontWeight = "bold";
          valueAxis.title.valign = "middle";
          valueAxis.title.align = "center";
          valueAxis.title.fill = am4core.color("grey");
          valueAxis.title.text = "kW";
          valueAxis.title.rotation = -90;
          valueAxis.min = 0; // Set minimum value to 0
          valueAxis.strictMinMax = true;

          // Create secondary Y-axis (for solar usage %)
          var secondaryValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          secondaryValueAxis.renderer.opposite = true; // Place the secondary axis on the right
          secondaryValueAxis.renderer.grid.template.strokeOpacity = 0;
          secondaryValueAxis.renderer.grid.template.stroke =
            am4core.color("#D0D0D0");
          secondaryValueAxis.renderer.minGridDistance = 30;
          secondaryValueAxis.renderer.labels.template.fill =
            am4core.color("#666666");
          secondaryValueAxis.renderer.labels.template.fontSize = 12;
          secondaryValueAxis.renderer.labels.template.fontWeight = "bold";
          secondaryValueAxis.title.text = "SOLAR USAGE (%)";
          secondaryValueAxis.title.rotation = -90;
          secondaryValueAxis.title.fill = am4core.color("#666666");
          secondaryValueAxis.title.fontSize = 14;
          secondaryValueAxis.title.fontWeight = "bold";
          secondaryValueAxis.title.valign = "middle";
          secondaryValueAxis.title.align = "center";
          secondaryValueAxis.title.fill = am4core.color("grey");
          secondaryValueAxis.title.dy = -15;
          secondaryValueAxis.title.dx = 0;
          secondaryValueAxis.min = 0;
          secondaryValueAxis.max = 100; // Assuming solar_usage is a percentage

          // Series for Generated Power (Primary Y-Axis)
          const generatedPowerSeries = chart.series.push(
            new am4charts.ColumnSeries()
          );
          generatedPowerSeries.dataFields.valueY = "sum_avg_G2_U20_and_U_27";
          generatedPowerSeries.dataFields.dateX = "date";
          generatedPowerSeries.name = "Generated Power";
          generatedPowerSeries.tooltipText =
            "Generated Power: [bold]{valueY} kW[/]";
          generatedPowerSeries.columns.template.fill = am4core.color("#219ebc");

          // Series for Transformer Power (Primary Y-Axis)
          const transformerPowerSeries = chart.series.push(
            new am4charts.ColumnSeries()
          );
          transformerPowerSeries.dataFields.valueY = "sum_avg_U_24_and_U_25";
          transformerPowerSeries.dataFields.dateX = "date";
          transformerPowerSeries.name = "Transformers Power";
          transformerPowerSeries.tooltipText =
            "Transformers Power: [bold]{valueY} kW[/]";
          transformerPowerSeries.columns.template.fill =
            am4core.color("#023047");

          // Series for Solar Usage (Secondary Y-Axis)
          var solarUsageSeries = chart.series.push(new am4charts.LineSeries());
          solarUsageSeries.dataFields.valueY = "solar_usage";
          solarUsageSeries.dataFields.dateX = "date";
          solarUsageSeries.yAxis = secondaryValueAxis; // Assign the series to the secondary axis
          solarUsageSeries.name = "Solar Usage";
          solarUsageSeries.tooltipText = "Solar Usage: [bold]{valueY}%[/]";
          solarUsageSeries.strokeWidth = 3;
          solarUsageSeries.stroke = am4core.color("#FFA500"); // Orange color
          solarUsageSeries.tooltip.background.fill = am4core.color("#FFA500");
          solarUsageSeries.tooltip.getFillFromObject = false;
          solarUsageSeries.tooltip.autoBackground = true;
          solarUsageSeries.tooltip.background.cornerRadius = 5;
          solarUsageSeries.tooltip.background.strokeWidth = 2;
          solarUsageSeries.tooltip.pointerOrientation = "vertical";
          solarUsageSeries.tooltip.label.minWidth = 150;
          solarUsageSeries.tooltip.label.minHeight = 20;
          solarUsageSeries.tooltip.label.textAlign = "middle";
          solarUsageSeries.tooltip.autoTextColor = false;
          solarUsageSeries.showOnInit = true;
          // Add a bullet to the Solar Usage series (Optional: to improve visibility of data points)
          const solarUsageBullet = solarUsageSeries.bullets.push(
            new am4charts.CircleBullet()
          );
          solarUsageBullet.circle.fill = am4core.color("#FFA500");
          solarUsageBullet.circle.strokeWidth = 2;
          solarUsageBullet.circle.stroke = am4core.color("#FFFFFF");

          // Set the tooltip color to match the series color
          solarUsageSeries.tooltip.background.fill = am4core.color("#FFA500");
          solarUsageSeries.tooltip.label.fill = am4core.color("#FFFFFF");

          // Enable cursor and tooltips
          chart.cursor = new am4charts.XYCursor();
          chart.cursor.lineY.disabled = false;
          chart.cursor.lineX.disabled = false;
          chart.cursor.behavior = "none"; // Disable zoom on drag

          // Set cursor tooltip for Solar Usage
          chart.cursor.events.on("cursorpositionchanged", function () {
            const dataPoint = solarUsageSeries.tooltipDataItem?.dataContext;
            if (dataPoint) {
              chart.cursor.tooltipText = `Solar Usage: ${dataPoint.solar_usage}%`;
            }
          });

          // Minimize legend icon size and text size
          chart.legend = new am4charts.Legend();
          chart.legend.position = "bottom"; // Adjust position to "bottom" for better mobile view
          chart.legend.valign = "middle";
          chart.legend.fontSize = 14;
          chart.legend.maxWidth = am4core.percent(100); // Ensure it takes full width for smaller screens
          chart.legend.labels.template.maxWidth = 100;
          chart.legend.scrollable = true;
          chart.legend.valueLabels.template.disabled = true;

          // Legend markers configuration
          var markerTemplate = chart.legend.markers.template;
          markerTemplate.width = 10;
          markerTemplate.height = 10;
          // Store the chart reference
          productionChartRef.current = chart;
        } catch (error) {
          console.error("Error fetching Production Chart data:", error);
        }
      }
    };
    const fetchDataAndUpdateCharts1 = async () => {
      setLoading(true);
      setError(null);

      try {
        await createProductionChart();
      } catch (error) {
        setError("An error occurred while fetching chart data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndUpdateCharts1();

    return () => {
      if (productionChartRef.current) {
        productionChartRef.current.dispose();
      }
    };
  }, [startDate, endDate, timePeriod]); // Re-fetch data when timePeriod changes

  useEffect(() => {
    const createSolarPieChart = async () => {
      const chartId = "solarPieChart";
      const chartContainer = document.getElementById(chartId);

      if (chartContainer) {
        const chart = am4core.create(chartId, am4charts.PieChart);
        chart.logo.disabled = true;

        try {
          const formattedStartDate1 = startDate1.toISOString().split("T")[0];
          const formattedEndDate1 = endDate1.toISOString().split("T")[0];
          const apiUrl = `http://15.206.128.214/Test_API/pie_api.php?start_date=${formattedStartDate1}&end_date=${formattedEndDate1}&meterId=G2_U20,U_27&suffixes=ACTIVE_ENERGY_IMPORT_KWH`;
          const response = await axios.get(apiUrl);

          const data = response.data.total_consumption;
          const chartData = Object.keys(data).map((key) => ({
            category: key,
            value: data[key],
          }));

          chart.data = chartData;

          const pieSeries = chart.series.push(new am4charts.PieSeries());
          pieSeries.dataFields.value = "value";
          pieSeries.dataFields.category = "category";
          pieSeries.slices.template.tooltipText =
            "{category}: [bold]{value}[/]";

          // Apply custom colors
          const colorSet = new am4core.ColorSet();
          colorSet.list = [am4core.color("#ff983b"), am4core.color("#eeb299")];
          pieSeries.colors = colorSet;
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;


          // Minimize legend icon size and text size
          chart.legend = new am4charts.Legend();
          chart.legend.position = "bottom"; // Adjust position to "bottom" for better mobile view
          chart.legend.valign = "middle";
          chart.legend.fontSize = 14;
          chart.legend.maxWidth = am4core.percent(100); // Ensure it takes full width for smaller screens
          chart.legend.labels.template.maxWidth = 100;
          chart.legend.scrollable = true;
          chart.legend.valueLabels.template.disabled = true;

          // Legend markers configuration
          var markerTemplate = chart.legend.markers.template;
          markerTemplate.width = 10;
          markerTemplate.height = 10;

          solarPieChartRef.current = chart;
        } catch (error) {
          console.error("Error fetching Solar Pie Chart data:", error);
        }
      }
    };

    const createTransformerPieChart = async () => {
      const chartId = "transformerPieChart";
      const chartContainer = document.getElementById(chartId);

      if (chartContainer) {
        const chart = am4core.create(chartId, am4charts.PieChart);
        chart.logo.disabled = true;

        try {
          const formattedStartDate1 = startDate1.toISOString().split("T")[0];
          const formattedEndDate1 = endDate1.toISOString().split("T")[0];
          const apiUrl = `http://15.206.128.214/Test_API/pie_api.php?start_date=${formattedStartDate1}&end_date=${formattedEndDate1}&meterId=U_24,U_25&suffixes=ACTIVE_ENERGY_IMPORT_KWH`;
          const response = await axios.get(apiUrl);

          const data = response.data.total_consumption;
          const chartData = Object.keys(data).map((key) => ({
            category: key,
            value: data[key],
          }));

          chart.data = chartData;

          const pieSeries = chart.series.push(new am4charts.PieSeries());
          pieSeries.dataFields.value = "value";
          pieSeries.dataFields.category = "category";
          pieSeries.slices.template.tooltipText =
            "{category}: [bold]{value}[/] kWh";

          // Apply custom colors
          const colorSet = new am4core.ColorSet();
          colorSet.list = [am4core.color("#78dcfe"), am4core.color("#3c9fe2")];
          pieSeries.colors = colorSet;
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;


          // Minimize legend icon size and text size
          chart.legend = new am4charts.Legend();
          chart.legend.position = "bottom"; // Adjust position to "bottom" for better mobile view
          chart.legend.valign = "middle";
          chart.legend.fontSize = 14;
          chart.legend.maxWidth = am4core.percent(100); // Ensure it takes full width for smaller screens
          chart.legend.labels.template.maxWidth = 100;
          chart.legend.scrollable = true;
          chart.legend.valueLabels.template.disabled = true;

          // Legend markers configuration
          var markerTemplate = chart.legend.markers.template;
          markerTemplate.width = 10;
          markerTemplate.height = 10;

          transformerPieChartRef.current = chart;
        } catch (error) {
          console.error("Error fetching Transformer Pie Chart data:", error);
        }
      }
    };

    const createSolarsVsTransformersChart = async () => {
      const chartId = "solarsVsTransformersChart";
      const chartContainer = document.getElementById(chartId);

      if (chartContainer) {
        const chart = am4core.create(chartId, am4charts.PieChart);
        chart.logo.disabled = true;

        try {
          const formattedStartDate1 = startDate1.toISOString().split("T")[0];
          const formattedEndDate1 = endDate1.toISOString().split("T")[0];
          const apiUrl = `http://15.206.128.214/Test_API/solar_vs_trans.php?start_date=${formattedStartDate1}&end_date=${formattedEndDate1}`;
          const response = await axios.get(apiUrl);

          const data = response.data.total_consumption;
          const chartData = Object.keys(data).map((key) => ({
            category: key,
            value: data[key],
          }));

          chart.data = chartData;

          const pieSeries = chart.series.push(new am4charts.PieSeries());
          pieSeries.dataFields.value = "value";
          pieSeries.dataFields.category = "category";
          pieSeries.slices.template.tooltipText =
            "{category}: [bold]{value}[/] kWh";

          // Disable outside labels
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;

          // Apply custom colors
          const colorSet = new am4core.ColorSet();
          colorSet.list = [am4core.color("#e67f22"), am4core.color("#3598db")];
          pieSeries.colors = colorSet;
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;

          // Minimize legend icon size and text size
          chart.legend = new am4charts.Legend();
          chart.legend.position = "bottom"; // Adjust position to "bottom" for better mobile view
          chart.legend.valign = "middle";
          chart.legend.fontSize = 14;
          chart.legend.maxWidth = am4core.percent(100); // Ensure it takes full width for smaller screens
          chart.legend.labels.template.maxWidth = 100;
          chart.legend.scrollable = true;
          chart.legend.valueLabels.template.disabled = true;

          // Legend markers configuration
          var markerTemplate = chart.legend.markers.template;
          markerTemplate.width = 10;
          markerTemplate.height = 10;

          solarsVsTransformersChartRef.current = chart;
        } catch (error) {
          console.error("Error fetching Solars vs Transformers data:", error);
        }
      }
    };

    const fetchDataAndUpdateCharts = async () => {
      setLoading(true);
      setError(null);

      try {
        await createSolarPieChart();
        await createTransformerPieChart();
        await createSolarsVsTransformersChart();
      } catch (error) {
        setError("An error occurred while fetching chart data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndUpdateCharts();

    return () => {
      if (solarPieChartRef.current) {
        solarPieChartRef.current.dispose();
      }
      if (transformerPieChartRef.current) {
        transformerPieChartRef.current.dispose();
      }
      if (solarsVsTransformersChartRef.current) {
        solarsVsTransformersChartRef.current.dispose();
      }
    };
  }, [startDate1, endDate1]); // Re-fetch data when timePeriod changes

  return (
    <main className="p-1">
      <div className="flex flex-wrap gap-2 h-[83vh] overflow:auto">
        <Div
          title={"Solar Generation"}
          hide={"hidden"}
          date_select={
            <select
              className="border-2 border-gray-300 rounded p-1 cursor-pointer w-[8vw] ml-2"
              onChange={handleSolarDropdownChange}
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="this_week">This Week</option>
              <option value="last_week">Last Week</option>
              <option value="this_month">This Month</option>
              <option value="last_month">Last Month</option>
              <option value="this_year">This Year</option>
            </select>
          }
          height={"130px"}
          length={"w-full sm:w-[48%] lg:w-[31.6%]"}
          className="flex items-center justify-center"
        >
          {solarValue !== null ? (
            <p className="text-2xl font-bold text-center h-full pt-[50px]">
              {solarValue.toFixed(2)} kWh
            </p>
          ) : (
            <div className="flex items-center justify-center mt-4 overflow-hidden text-ellipsis">
              <p>Loading...</p>
            </div>
          )}
        </Div>
        {/* Transformers Div */}
        <Div
          title={
            <span
              className="truncate max-w-[11.5rem] block cursor-pointer"
              title="Transformer Consumption" // Tooltip on hover
            >
              Transformer Consumption
            </span>
          }
          hide={"hidden"}
          date_select={
            <select
              className="border-2 border-gray-300 rounded p-1 cursor-pointer w-[8vw] ml-2"
              onChange={handleTransformerDropdownChange}
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="this_week">This Week</option>
              <option value="last_week">Last Week</option>
              <option value="this_month">This Month</option>
              <option value="last_month">Last Month</option>
              <option value="this_year">This Year</option>
            </select>
          }
          height={"130px"}
          length={"w-full sm:w-[48%] lg:w-[31.6%]"}
          className="flex items-center justify-center"
        >
          {transformerValue !== null ? (
            <p className="text-2xl font-bold text-center h-full pt-[50px]">
              {transformerValue.toFixed(2)} kWh
            </p>
          ) : (
            <div className="flex items-center justify-center mt-4 overflow-hidden text-ellipsis">
              <p>Loading...</p>
            </div>
          )}
        </Div>
        {/* All_Genset Div */}
        <Div
          // title={"All Genset Main Incoming"}
          title={
            <span
              className="truncate max-w-[11.7rem] block cursor-pointer"
              title="All Genset Main Incoming" // Tooltip on hover
            >
              All Genset Main Incoming
            </span>
          }
          hide={"hidden"}
          date_select={
            <select
              className="border-2 border-gray-300 rounded p-1 cursor-pointer w-[8vw] ml-2"
              onChange={handleAll_GensetDropdownChange}
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="this_week">This Week</option>
              <option value="last_week">Last Week</option>
              <option value="this_month">This Month</option>
              <option value="last_month">Last Month</option>
              <option value="this_year">This Year</option>
            </select>
          }
          height={"130px"}
          length={"w-full sm:w-[48%] lg:w-[31.6%]"}
          className="flex items-center justify-center"
        >
          {All_GensetValue !== null ? (
            <p className="text-2xl font-bold text-center h-full pt-[50px]">
              {All_GensetValue.toFixed(2)} kWh
            </p>
          ) : (
            <div className="flex items-center justify-center mt-4 overflow-hidden text-ellipsis">
              <p>Loading...</p>
            </div>
          )}
        </Div>
        <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full">
          <div className="w-full lg:w-[31.6%] xl:w-[25.8%]  bg-white shadow-md rounded-xl p-3 h-[34vh] shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px">
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <h3 className="text-md font-bold text-gray-500">Weather</h3>
            </div>

            {/* Content */}

            <iframe
              width="100%"
              height="89%"
              src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=7&overlay=wind&product=ecmwf&level=surface&lat=31.451&lon=73.027&detailLat=31.451&detailLon=73.027&detail=true"
              frameborder="0"
            ></iframe>
          </div>
          <Div
            title="Production & Consumption"
            height={"34vh"}
            length="w-full lg:w-[68.7%] md:w-full"
          >
            <br></br>
            <h4 className="text-[0.7] float-left mr-10 mt-[-2px]">
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-4 items-center text-[0.7vw]">
                  <div className="flex items-center">
                    <label htmlFor="p_startDate" className="mr-2">
                      Start Date:
                    </label>
                    <input
                      type="date"
                      id="p_startDate"
                      name="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="px-2 py-1 text-[0.7vw] border border-gray-300 rounded-md mr-4 w-[120px]"
                    />
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="p_endDate" className="mr-2">
                      End Date:
                    </label>
                    <input
                      type="date"
                      id="p_endDate"
                      name="endDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="px-2 py-1 text-[0.7vw] border border-gray-300 rounded-md mr-4 w-[120px]"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 items-center">
                    <button
                      className={`px-3 py-1 text-[0.7vw] bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none ${
                        timePeriod === "hourly" ? "bg-green-600" : ""
                      }`}
                      onClick={() => setTimePeriod("hourly")}
                    >
                      Hourly
                    </button>
                    <button
                      className={`px-3 py-1 text-[0.7vw] bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ${
                        timePeriod === "daily" ? "bg-blue-600" : ""
                      }`}
                      onClick={() => setTimePeriod("daily")}
                    >
                      Daily
                    </button>
                    <button
                      className={`px-3 py-1 text-[0.7vw] bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none ${
                        timePeriod === "monthly" ? "bg-orange-600" : ""
                      }`}
                      onClick={() => setTimePeriod("monthly")}
                    >
                      Monthly
                    </button>
                  </div>
                </div>
              </div>
            </h4>

            {/* The original chart container */}
            <div id="productionChart" className="w-full h-[94%] mt-4"></div>
          </Div>
        </div>
        <div className="mt-[-5px]  ml-2 w-[90%] flex items-center flex-wrap gap-4">
          <div className="flex items-center">
            <label className="mr-2">Start Date:</label>
            <DatePicker
              selected={startDate1}
              onChange={(date) => setDateRange([date, endDate1])} // Update the start date while keeping the end date
              className="px-2 py-1 text-[0.9vw] border border-gray-300 rounded-md mr-4 w-[120px]"
              placeholderText="Select Start Date"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-2">End Date:</label>
            <DatePicker
              selected={endDate1}
              onChange={(date) => setDateRange([startDate1, date])} // Update the end date while keeping the start date
              className="px-2 py-1 text-[0.9vw] border border-gray-300 rounded-md mr-4 w-[120px]"
              placeholderText="Select End Date"
            />
          </div>
        </div>
        

        <Div
          title={"Solars vs Transformers vs All_Genset"}
          height={"30vh"}
          length={"w-full md:w-[48%] lg:w-[31.6%]"}
        >
          <div
            id="solarsVsTransformersChart"
            className="mt-12"
            style={{ width: "100%", height: "87%" }}
          ></div>
        </Div>
        <Div
          title={"Solar_1 vs Solar_2"}
          height={"30vh"}
          length={"w-full md:w-[48%] lg:w-[31.6%]"}
        >
          <div
            id="solarPieChart"
            className="mt-12"
            style={{ width: "100%", height: "87%" }}
          ></div>
        </Div>
        <Div
          title={"Transformer_1 vs Transformer_2"}
          height={"30vh"}
          length={"w-full md:w-[48%] lg:w-[31.6%]"}
        >
          <div
            id="transformerPieChart"
            className="mt-12"
            style={{ width: "100%", height: "87%" }}
          ></div>
        </Div>
        {/* <Div title={"Transformer_1 vs Transformer_2"} height={"30vh"} length={"lg:w-[31.6%] xl:w-[31.8%"}>

            <div id="" className="mt-12" style={{ width: "100%", height: "87%" }}></div>
          </Div> */}
      </div>
    </main>
  );
}

export default DashboardPage;
