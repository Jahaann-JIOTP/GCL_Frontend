// Custom_div.js
"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
const meterMapping1 = {
    "G2_U20": "Solar 1",
    "U_27": "Solar 2",
    "U_24": "Tranformer 1",
    "U_25": "Tranformer 2",
    "U_17": "Air Compressors-1",
    "U_5": "Auto Packing",
    "U_23": "Ball Mills-1",
    "U_15": "Ball Mills-2",
    "U_2": "Ball Mills-4",
    "U_11": "Belt 200 Feeding",
    "U_10": "Belt 300 Feeding",
    "U_7": "Colony D.B",
    "U_6": "DPM-2",
    "U_12": "Glaze Line-1",
    "U_4": "Glaze Line-2",
    "U_20": "Glaze Ball Mill",
    "U_9": "Kiln Blower Fan - (R.V.E)",
    "U_19": "Kiln Loading Machine",
    "U_16": "Laboratory",
    "U_18": "Light D.B # 01",
    "U_8": "Light D.B # 02",
    "U_22": "Lighting (Plant)",
    "U_3": "Masjid",
    "U_13": "Prekiln",
    "U_21": "Press PH4300",
    "U_14": "Layer Dryer",
    "G1_U2": "Polishing Line 5",
    "G1_U3": "Polishing Line 6",
    "G1_U4": "Glaze Ball Mill 13500L-2",
    "G1_U5": "Polishing Line 7",
    "G1_U6": "Air Compressor-2",
    "G1_U7": "Glaze Ball Mill 9500L-3",
    "G1_U8": "G1_U8",
    "G1_U10": "G1_U10",
    "G1_U11": "5 Layer Dryer",
    "G1_U12": "5 Layer Dryer Unloading Machine",
    "G1_U13": "Rental Genset",
    "G1_U14": "Water Treatment Area",
    "G1_U15": "G1_U15",
    "G1_U16": "G1_U16",
    "G2_U2": "Press PH  4300/1750-1",
    "G2_U3": "Ball Mills -3",
    "G2_U4": "Hard Materials",
    "G2_U7": "Polishing Line-1",
    "G2_U8": "Polishing Line-2",
    "G2_U9": "Fan for Spray Dryer",
    "G2_U10": "Slip Piston Pumps & Transfer Tank",
    "G2_U11": "Glaze Tank-1",
    "G2_U12": "Coal Stove & Coal Conveyer",
    "G2_U13": "ST Motor & Iron Remove",
    "G2_U14": "Polishing Line -3",
    "G2_U15": "Polishing Line -4",
    "G2_U16": "Belt 100 Feeding to BM500",
    "G2_U17": "No Combustion System",
    "G2_U18": "Digital Printing Machine",
    "G2_U5": "G2_U5",
    "G2_U19": "Air Compressor 3",
    "G2_U6": "Air Compressor 4",
};
class Custom_div extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            chart: null, // Store the amCharts chart instance
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.chartConfig !== this.props.chartConfig) {
            this.renderChart();
        }
    }

    componentWillUnmount() {
        if (this.state.chart) {
            this.state.chart.dispose();
        }
    }

    filterDataByDateRange(data, startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        return data.filter(item => {
            const date = new Date(item.category);
            return date >= start && date <= end;
        });
    }

    renderChart = async () => {
        const { chartConfig } = this.props;
        const chartId = `chartdiv-${this.props.divIndex}`;

        if (this.state.chart) {
            this.state.chart.dispose();
        }

        if (chartConfig) {
            let chart;
            const baseColor = am4core.color(chartConfig.color);

            // Construct API URL with parameters from chartConfig
            let apiUrl;
            // console.log(chartConfig.selectedMeter);
            // Dynamically build the API URL based on chart type
            if (chartConfig.chartType === "bar") {

                apiUrl = `https://gclapi.jiotp.com//bar_api.php?start_date=${chartConfig.startDate}&end_date=${chartConfig.endDate}&meterId=${chartConfig.selectedMeter}&suffixes=${chartConfig.selectedParameter}`;

            } else if (chartConfig.chartType === "pie") {

                apiUrl = `https://gclapi.jiotp.com//pie_api.php?start_date=${chartConfig.startDate}&end_date=${chartConfig.endDate}&meterId=${chartConfig.selectedMeter}&suffixes=${chartConfig.selectedParameter}`;

            } else if (chartConfig.chartType === "line") {

                apiUrl = `https://gclapi.jiotp.com//line_api.php?start_date=${chartConfig.startDate}&end_date=${chartConfig.endDate}&meterId=${chartConfig.selectedMeter}&suffixes=${chartConfig.selectedParameter}`;

            } else if (chartConfig.chartType === "groupedBar") {

                apiUrl = `https://gclapi.jiotp.com//period_api.php?time_period=${chartConfig.periodOption}&meterId=${chartConfig.selectedMeter}&suffixes=${chartConfig.selectedParameter}`;
            }
            try {
                // Fetch data from API with no-cache setting
                const response = await fetch(apiUrl, {
                    cache: 'no-store'
                });
                const apiData = await response.json();

                // Check the chart type and process the data accordingly
                let data = [];

                if (chartConfig.chartType === "pie") {
                    // Process the `total_consumption` data for Pie Chart
                    const totalConsumption = apiData.total_consumption;

                    // Transform total consumption into chart-compatible format
                    data = Object.entries(totalConsumption).map(([tag, value]) => ({
                        category: tag, // The tag name as the category
                        value: value   // The corresponding total value
                    }));
                }

                // Now `data` is ready for the chart, regardless of the chart type

                // Configure chart based on type
                if (chartConfig.chartType === "groupedBar") {
                    if (chartConfig.periodOption === "Today over Yesterday") {
                        const todayData = apiData[0].Today || {};
                        const yesterdayData = apiData[0].Yesterday || {};

                        data = Object.keys(todayData).map((hour) => ({
                            category: hour,
                            value1: todayData[hour]?.[`${chartConfig.selectedMeter}_${chartConfig.selectedParameter}`] || 0,
                            value2: yesterdayData[hour]?.[`${chartConfig.selectedMeter}_${chartConfig.selectedParameter}`] || 0,
                        }));
                    } else if (chartConfig.periodOption === "This Week over Last Week") {
                        const thisWeek = apiData[0]["This Week"] || [];
                        const lastWeek = apiData[0]["Last Week"] || [];

                        data = thisWeek.map((day, index) => ({
                            category: day.day,
                            value1: day.value,
                            value2: lastWeek[index]?.value || 0,
                        }));
                    } else if (chartConfig.periodOption === "This Month over Last Month") {
                        const thisMonthWeeks = apiData[0]["This Month Weeks"] || [];
                        const lastMonthWeeks = apiData[0]["Last Month Weeks"] || [];

                        data = thisMonthWeeks.map((week, index) => ({
                            category: week.week,
                            value1: week.value,
                            value2: lastMonthWeeks[index]?.value || 0,
                        }));
                    }

                    // Grouped Bar Chart Configuration
                    chart = am4core.create(chartId, am4charts.XYChart);
                    chart.logo.disabled = true;
                    chart.data = data;

                    // Category Axis
                    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "category";
                    categoryAxis.renderer.minGridDistance = 30;
                    categoryAxis.renderer.grid.template.location = 0;
                    categoryAxis.renderer.cellStartLocation = 0.15;
                    categoryAxis.renderer.cellEndLocation = 0.85;

                    // Value Axis
                    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

                    // Cursor for simultaneous tooltips
                    chart.cursor = new am4charts.XYCursor();
                    chart.cursor.behavior = "none"; // Ensure no zooming or panning
                    chart.cursor.lineX.disabled = true; // Disable cursor lines
                    chart.cursor.lineY.disabled = true;

                    const series1 = chart.series.push(new am4charts.ColumnSeries());
                    series1.dataFields.valueY = "value1";
                    series1.dataFields.categoryX = "category";
                    series1.name = "Current Period";
                    series1.fill = am4core.color(baseColor.lighten(0.5));
                    series1.columns.template.width = am4core.percent(70);
                    series1.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
                    series1.columns.template.strokeWidth = 0; // Remove outlines

                    // Dynamically adjust tooltip position for Current Period
                    series1.tooltip.adapter.add("y", function (y, target) {
                        const column = target.tooltipDataItem.column;
                        if (column) {
                            return y - column.pixelHeight / 2 - series1.tooltip.pixelHeight / 2;
                        }
                        return y;
                    });

                    // Series for Comparison Period
                    const series2 = chart.series.push(new am4charts.ColumnSeries());
                    series2.dataFields.valueY = "value2";
                    series2.dataFields.categoryX = "category";
                    series2.name = "Comparison Period";
                    series2.fill = am4core.color(baseColor);
                    series2.columns.template.width = am4core.percent(70);
                    series2.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
                    series2.columns.template.strokeWidth = 0; // Remove outlines

                    // Dynamically adjust tooltip position for Comparison Period
                    series2.tooltip.adapter.add("y", function (y, target) {
                        const column = target.tooltipDataItem.column;
                        if (column) {
                            return y + column.pixelHeight / 2 + series2.tooltip.pixelHeight / 2;
                        }
                        return y;
                    });



                    // Legend
                    chart.legend = new am4charts.Legend();
                    chart.legend.position = "bottom";

                    this.setState({ chart, title: chartConfig.title });
                } else if (chartConfig.chartType === "line") {
                    // Ensure selectedMeter is an array
                    const selectedMeters = Array.isArray(chartConfig.selectedMeter)
                        ? chartConfig.selectedMeter
                        : chartConfig.selectedMeter.split(',');

                    // Map API data to chart-compatible format
                    data = apiData.map(item => {
                        const dataPoint = { timestamp: new Date(item.timestamp) }; // Add the timestamp
                        selectedMeters.forEach(meter => {
                            const key = `${meter}_${chartConfig.selectedParameter}`; // Construct the key
                            if (item.data && item.data[key] !== undefined) { // Check if the key exists in the data object
                                dataPoint[meter] = item.data[key];
                            } else {
                                dataPoint[meter] = null; // Use null or 0 if the key is missing
                            }
                        });
                        return dataPoint;
                    });

                    // Line Chart Configuration
                    chart = am4core.create(chartId, am4charts.XYChart);
                    chart.logo.disabled = true;

                    // Enable chart legend
                    chart.legend = new am4charts.Legend();
                    chart.legend.position = "bottom";

                    // Date Axis
                    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
                    dateAxis.renderer.grid.template.location = 0;
                    dateAxis.dateFormats.setKey("minute", "HH:mm");
                    dateAxis.tooltipDateFormat = "HH:mm";
                    dateAxis.baseInterval = {
                        timeUnit: "minute",
                        count: 15 // Adjust this interval as needed
                    };

                    // Value Axis
                    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.title.text = chartConfig.selectedParameter;

                    // Create a LineSeries for each selected meter
                    const meterColors = new am4core.ColorSet();
                    meterColors.baseColor = baseColor;

                    selectedMeters.forEach((meter, index) => {
                        const series = chart.series.push(new am4charts.LineSeries());
                        series.dataFields.valueY = meter; // Bind to the meter's data key
                        series.dataFields.dateX = "timestamp";

                        // Use the mapped name for the legend
                        const meterName = meterMapping1[meter] || meter; // Fallback to meter ID if no mapping exists
                        series.name = meterName;

                        series.stroke = meterColors.getIndex(index);
                        series.strokeWidth = 2;
                        series.tooltipText = `${meterName}: [b]{valueY}[/]`; // Use the mapped name in tooltip
                        series.tooltip.getFillFromObject = false; // Prevent default color
                        series.tooltip.background.fill = series.stroke; // Match tooltip color to line color
                        series.minBulletDistance = 10;

                        // Add bullets for visibility
                        const bullet = series.bullets.push(new am4charts.CircleBullet());
                        bullet.circle.radius = 4;
                        bullet.circle.fill = meterColors.getIndex(index);
                    });

                    // Enable multiple tooltips at the same x-axis value
                    chart.cursor = new am4charts.XYCursor();
                    chart.cursor.xAxis = dateAxis;
                    chart.cursor.snapToSeries = chart.series.values;
                    chart.cursor.behavior = "zoomXY";
                    chart.cursor.fullWidthLineX = true;
                    chart.cursor.lineX.strokeOpacity = 0;
                    chart.cursor.lineY.disabled = true;

                    // Add scrollbars
                    chart.scrollbarX = new am4core.Scrollbar();

                    // Set chart data
                    chart.data = data;

                    // Update state
                    this.setState({ chart, title: chartConfig.title });


                }

                else if (chartConfig.chartType === "bar") {
                    // Extract daily consumption data for Bar chart
                    const dailyConsumption = apiData.daily_consumption;

                    // Transform API data to include dynamic tags for each date
                    data = Object.entries(dailyConsumption).flatMap(([date, tags]) => {
                        return Object.entries(tags).map(([tag, value]) => ({
                            category: date,    // Date as the category
                            tag,               // Tag (e.g., U_2_ACTIVE_ENERGY_IMPORT_KWH_consumption)
                            value              // Corresponding consumption value
                        }));
                    });

                    // Bar Chart Configuration
                    chart = am4core.create(chartId, am4charts.XYChart);
                    chart.logo.disabled = true;
                    chart.data = data;

                    // Set up Category Axis for dates
                    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "category";
                    categoryAxis.title.text = "Date";
                    categoryAxis.renderer.grid.template.location = 0;

                    // Set up Value Axis for consumption values
                    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.title.text = "Consumption (kWh)";

                    // Create a Column Series for each tag dynamically
                    const uniqueTags = [...new Set(data.map(item => item.tag))];
                    const meterColors = new am4core.ColorSet();
                    meterColors.baseColor = baseColor;
                    uniqueTags.forEach((tag, index) => {
                        const series = chart.series.push(new am4charts.ColumnSeries());
                        series.dataFields.valueY = "value";
                        series.dataFields.categoryX = "category";
                        series.name = tag;
                        series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
                        series.columns.template.width = am4core.percent(70);
                        series.stacked = true;
                        series.data = data.filter(item => item.tag === tag);
                        series.stroke = meterColors.getIndex(index);
                        series.fill = meterColors.getIndex(index);
                        series.columns.template.strokeWidth = 1;
                        series.columns.template.stroke = am4core.color('white')
                    });


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
                    markerTemplate.width = 9;
                    markerTemplate.height = 9;
                } else if (chartConfig.chartType === "pie") {
                    chart = am4core.create(chartId, am4charts.PieChart);
                    chart.logo.disabled = true; // Disable the amCharts logo

                    // Configure Pie Series
                    const pieSeries = chart.series.push(new am4charts.PieSeries());
                    pieSeries.dataFields.value = "value";
                    pieSeries.dataFields.category = "category";
                    pieSeries.slices.template.tooltipText = "{category}: [bold]{value}[/]";

                    // Customizing slice colors
                    const colorSet = new am4core.ColorSet();
                    colorSet.baseColor = baseColor;
                    colorSet.stepOptions = { lightness: 0.2, hue: 0 };
                    pieSeries.slices.template.adapter.add("fill", (fill, target) =>
                        colorSet.getIndex(target.dataItem.index)
                    );
                    chart.legend = new am4charts.Legend();
                    chart.legend.position = "bottom"; // Adjust position to "bottom" for better mobile view
                    chart.legend.valign = "middle";
                    chart.legend.fontSize = 14;
                    chart.legend.maxWidth = am4core.percent(100); // Ensure it takes full width for smaller screens
                    chart.legend.labels.template.maxWidth = 100;
                    chart.legend.scrollable = true;
                    chart.legend.valueLabels.template.disabled = true;
                    var markerTemplate = chart.legend.markers.template;
                    markerTemplate.width = 9;
                    markerTemplate.height = 9;
                    // Add data to the chart
                    chart.data = data;
                }

                // Set the chart data and update component state
                chart.data = data;
                this.setState({ chart, title: chartConfig.title });
            } catch (error) {
                console.error("Error fetching data from API", error);
            }
        }
    };



    toggleExpand = () => {
        this.setState((prevState) => ({
            expanded: !prevState.expanded,
        }));
    };

    render() {
        const { expanded } = this.state;
        const { openChartPopup, chartConfig, removeChart } = this.props;
        const chartId = `chartdiv-${this.props.divIndex}`;

        return (
            <div
                className="border border-gray-300 rounded-lg shadow-md flex flex-col justify-start items-center p-4 w-full sm:w-full md:w-[49%] relative bg-white h-[42vh] opacity-70"
                style={{
                    height: expanded ? '85%' : '',
                    width: expanded ? '83%' : '',
                    position: expanded ? 'fixed' : '',
                    zIndex: expanded ? '999' : '',
                    opacity: expanded ? '1' : '',
                }}
            >
                <div className="absolute top-2 left-4 text-gray-600 font-semibold text-lg mb-2">
                    {chartConfig
                        ? chartConfig.chartType === "groupedBar"
                            ? `${chartConfig.title} (${meterMapping1[chartConfig.selectedMeter] || chartConfig.selectedMeter})`
                            : chartConfig.title
                        : null}
                </div>
                <div className="absolute top-2 right-4 flex items-center space-x-3">
                    <span className="text-gray-600 text-sm">
                        {chartConfig && chartConfig.chartType === "groupedBar"
                            ? chartConfig.periodOption
                            : chartConfig
                                ? `${chartConfig.startDate} - ${chartConfig.endDate}`
                                : ""}
                    </span>
                    <FontAwesomeIcon icon={faExpand} className="cursor-pointer text-gray-600" onClick={this.toggleExpand} />
                    <FontAwesomeIcon icon={faTimes} className="cursor-pointer text-gray-600" onClick={removeChart} />
                </div>

                {!chartConfig && (
                    <div className="absolute flex flex-col items-center justify-center h-[90%] w-full mt-3">
                        <div
                            className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full text-6xl text-gray-400 mb-4 pb-3 cursor-pointer"
                            onClick={openChartPopup}
                        >
                            +
                        </div>
                        <div className="text-gray-400 italic">To view a Chart, select a Chart</div>
                    </div>
                )}

                <div id={chartId} className="w-[100%] h-[95%] mt-5"></div>
            </div>
        );
    }
}

export default Custom_div;
