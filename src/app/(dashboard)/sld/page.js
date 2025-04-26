
"use client";
import React, { useState, useEffect } from "react";
import Solar from "@/components/Solar";

export default function SLDPage() {
  const [data, setData] = useState(null);

  // Define meterMapping within the component
  const meterMapping = {
    Solar1: {
      prefix: "G2_U20",

      position: { top: "86px", left: "5px" },
      link: "sld_meters?id=T_1&meter=G2_U20",
      lightPosition: { top: "100px", left: "20px" },
      clickableSize: { width: "90px", height: "80px" }, // Custom size for Solar1
    },

    Solar2: {
      prefix: "U_27",

      position: { top: "86px", left: "195px" },
      link: "sld_meters1?id=T_1&meter=U_27",
      lightPosition: { top: "100px", left: "215px" },
      clickableSize: { width: "90px", height: "80px" }, // Custom size for Solar2
    },

    TR_1: {
      prefix: "U_24",

      position: { top: "170px", left: "418px" },
      link: "sld_meters?id=T_1&&meter=U_24",
      lightPosition: { top: "170px", left: "404px" },
    },
    TR_2: {
      prefix: "U_25",
      position: { top: "170px", left: "612px" },
      link: "sld_meters?id=T_1&&meter=U_25",
      lightPosition: { top: "170px", left: "598px" },
    },

    Genset1: {
      prefix: "G1_U17",
      position: { top: "0px", left: "823px" },
      link: "sld_meters_genset?id=T_1&&meter=G1_U17",
      lightPosition: { top: "10px", left: "941px" },
      clickableSize: { width: "90px", height: "80px" }, // Custom size for Solar1
    },
    Genset2: {
      prefix: "G1_U18",
      position: { top: "110px", left: "823px" },
      link: "sld_meters_genset?id=T_1&&meter=G1_U18",
      lightPosition: { top: "115px", left: "941px" },
      clickableSize: { width: "90px", height: "80px" }, // Custom size for Solar1
    },
    Genset3: {
      prefix: "G1_U19",
      position: { top: "0px", left: "1150px" },
      link: "sld_meters_genset?id=T_1&&meter=G1_U19",
      lightPosition: { top: "10px", left: "1270px" },
      clickableSize: { width: "90px", height: "80px" }, // Custom size for Solar1
    },
    Genset4: {
      prefix: "#",
      position: { top: "110px", left: "1150px" },
      link: "#",
      lightPosition: { top: "115px", left: "1270px" },
      clickableSize: { width: "90px", height: "80px" }, // Custom size for Solar1
    },
    center_meter: {
      prefix: "G1_U16",
      position: { top: "142px", left: "1024px" },
      link: "sld_meters_genset?id=T_1&&meter=G1_U16",
      lightPosition: { top: "142px", left: "1005px" },
    },
    Ball_Mill_4: {
      prefix: "U_2",
      position: { top: "282px", left: "91px" },
      link: "sld_meters?id=T_1&&meter=U_2",
      lightPosition: { top: "282px", left: "78px" },
    },
    Mosque: {
      prefix: "U_3",
      position: { top: "282px", left: "264px" },
      link: "sld_meters?id=T_1&&meter=U_3",
      lightPosition: { top: "282px", left: "250px" },
    },
    Glaze_Line2: {
      prefix: "U_4",
      position: { top: "282px", left: "429px" },
      link: "sld_meters?id=T_1&&meter=U_4",
      lightPosition: { top: "282px", left: "415px" },
    },
    Sorting_and_Packing_Line: {
      prefix: "U_5",
      position: { top: "282px", left: "603px" },
      link: "sld_meters?id=T_1&&meter=U_5",
      lightPosition: { top: "282px", left: "588px" },
    },
    Digital_printing_machine: {
      prefix: "U_6",
      position: { top: "282px", left: "767px" },
      link: "sld_meters?id=T_1&&meter=U_6",
      lightPosition: { top: "282px", left: "752px" },
    },
    Colony_DB: {
      prefix: "U_7",
      position: { top: "282px", left: "940px" },
      link: "sld_meters?id=T_1&&meter=U_7",
      lightPosition: { top: "282px", left: "925px" },
    },
    Light_DB2: {
      prefix: "U_8",
      position: { top: "282px", left: "1104px" },
      link: "sld_meters?id=T_1&&meter=U_8",
      lightPosition: { top: "282px", left: "1090px" },
    },
    Kiln_Bolwer_Fan: {
      prefix: "U_9",
      position: { top: "282px", left: "1277px" },
      link: "sld_meters?id=T_1&&meter=U_9",
      lightPosition: { top: "282px", left: "1262px" },
    },
    Belt_300_feeding: {
      prefix: "U_10",
      position: { top: "395px", left: "91px" },
      link: "sld_meters?id=T_1&&meter=U_10",
      lightPosition: { top: "395px", left: "78px" },
    },
    Belt_200_feeding: {
      prefix: "U_11",
      position: { top: "395px", left: "264px" },
      link: "sld_meters?id=T_1&&meter=U_11",
      lightPosition: { top: "395px", left: "250px" },
    },
    Glaze_Line1: {
      prefix: "U_12",
      position: { top: "395px", left: "429px" },
      link: "sld_meters?id=T_1&&meter=U_12",
      lightPosition: { top: "395px", left: "414px" },
    },
    Parklin_Kiln: {
      prefix: "U_13",
      position: { top: "395px", left: "603px" },
      link: "sld_meters?id=T_1&&meter=U_13",
      lightPosition: { top: "395px", left: "587px" },
    },
    Layer_dryer: {
      prefix: "U_14",
      position: { top: "395px", left: "767px" },
      link: "sld_meters?id=T_1&&meter=U_14",
      lightPosition: { top: "395px", left: "751.5px" },
    },
    Spare_1: {
      prefix: "U_15",
      position: { top: "395px", left: "940px" },
      link: "sld_meters?id=T_1&&meter=U_15",
      lightPosition: { top: "395px", left: "925px" },
    },
    Laboratory: {
      prefix: "U_16",
      position: { top: "395px", left: "1108px" },
      link: "sld_meters?id=T_1&&meter=U_16",
      lightPosition: { top: "395px", left: "1090px" },
    },
    Air_Compressor1: {
      prefix: "U_17",
      position: { top: "395px", left: "1277px" },
      link: "sld_meters?id=T_1&&meter=U_17",
      lightPosition: { top: "395px", left: "1262px" },
    },
    Light_DB1: {
      prefix: "U_18",
      position: { top: "514px", left: "93px" },
      link: "sld_meters?id=T_1&&meter=U_18",
      lightPosition: { top: "514px", left: "78px" },
    },
    Kiln_Loading_machine: {
      prefix: "U_19",
      position: { top: "514px", left: "264px" },
      link: "sld_meters?id=T_1&&meter=U_19",
      lightPosition: { top: "514px", left: "250px" },
    },
    Glaze_Ball_Mill_13500L_2_9500L_1: {
      prefix: "U_20",
      position: { top: "514px", left: "429px" },
      link: "sld_meters?id=T_1&&meter=U_20",
      lightPosition: { top: "514px", left: "414px" },
    },
    Press_PH: {
      prefix: "U_21",
      position: { top: "514px", left: "603px" },
      link: "sld_meters?id=T_1&&meter=U_21",
      lightPosition: { top: "514px", left: "587px" },
    },
    Lightining_Plant: {
      prefix: "U_22",
      position: { top: "514px", left: "767px" },
      link: "sld_meters?id=T_1&&meter=U_22",
      lightPosition: { top: "514px", left: "751.5px" },
    },
    Ball_Mill1: {
      prefix: "U_23",
      position: { top: "514px", left: "940px" },
      link: "sld_meters?id=T_1&&meter=U_23",
      lightPosition: { top: "514px", left: "925px" },
    },
    Polising_Linee_5: {
      prefix: "G1_U2",
      position: { top: "514px", left: "1108px" },
      link: "sld_meters?id=T_1&&meter=G1_U2",
      lightPosition: { top: "514px", left: "1090px" },
    },
    Polising_Line6: {
      prefix: "G1_U3",
      position: { top: "514px", left: "1277px" },
      link: "sld_meters?id=T_1&&meter=G1_U3",
      lightPosition: { top: "514px", left: "1262px" },
    },
    Glaze_Ball_Mill_13500L_2: {
      prefix: "G1_U4",
      position: { top: "628px", left: "93px" },
      link: "sld_meters?id=T_1&&meter=G1_U4",
      lightPosition: { top: "628px", left: "78px" },
    },
    Polising_Line5: {
      prefix: "G1_U5",
      position: { top: "628px", left: "264px" },
      link: "sld_meters?id=T_1&&meter=G1_U5",
      lightPosition: { top: "628px", left: "250px" },
    },
    Air_Compressor2: {
      prefix: "G1_U6",
      position: { top: "628px", left: "429px" },
      link: "sld_meters?id=T_1&&meter=G1_U6",
      lightPosition: { top: "628px", left: "414px" },
    },
    Glaze_Bill_Mill_9500L_3: {
      prefix: "G1_U7",
      position: { top: "628px", left: "603px" },
      link: "sld_meters?id=T_1&&meter=G1_U7",
      lightPosition: { top: "628px", left: "587px" },
    },
    Spare_2: {
      prefix: "G1_U8",
      position: { top: "628px", left: "767px" },
      link: "sld_meters?id=T_1&&meter=G1_U8",
      lightPosition: { top: "628px", left: "751.5px" },
    },
    Spare_3: {
      prefix: "G1_U9",
      position: { top: "628px", left: "940px" },
      link: "#",
      lightPosition: { top: "628px", left: "925px" },
    },
    Spare_4: {
      prefix: "G1_U10",
      position: { top: "628px", left: "1108px" },
      link: "sld_meters?id=T_1&&meter=G1_U10",
      lightPosition: { top: "628px", left: "1090px" },
    },
    Layer5_dryer: {
      prefix: "G1_U11",
      position: { top: "628px", left: "1277px" },
      link: "sld_meters?id=T_1&&meter=G1_U11",
      lightPosition: { top: "628px", left: "1262px" },
    },
    Layer5_dryer_unloading_machine: {
      prefix: "G1_U12",
      position: { top: "750px", left: "93px" },
      link: "sld_meters?id=T_1&&meter=G1_U12",
      lightPosition: { top: "750px", left: "78px" },
    },
    Rental_Genset: {
      prefix: "G1_U13",
      position: { top: "750px", left: "264px" },
      link: "sld_meters?id=T_1&&meter=G1_U13",
      lightPosition: { top: "750px", left: "250px" },
    },
    Water_treatment_area: {
      prefix: "G1_U14",
      position: { top: "750px", left: "429px" },
      link: "sld_meters?id=T_1&&meter=G1_U14",
      lightPosition: { top: "750px", left: "414px" },
    },
    Spare5: {
      prefix: "G1_U15",
      position: { top: "750px", left: "603px" },
      link: "sld_meters?id=T_1&&meter=G1_U15",
      lightPosition: { top: "750px", left: "587px" },
    },
    Air_compressor4: {
      prefix: "G2_U6",
      position: { top: "750px", left: "767px" },
      link: "sld_meters?id=T_1&&meter=G2_U6",
      lightPosition: { top: "750px", left: "751.5px" },
    },
    Press_PH_4300_1750_1: {
      prefix: "G2_U2",
      position: { top: "750px", left: "940px" },
      link: "sld_meters?id=T_1&&meter=G2_U2",
      lightPosition: { top: "750px", left: "925px" },
    },
    Ball_Mill8: {
      prefix: "G2_U3",
      position: { top: "750px", left: "1108px" },
      link: "sld_meters?id=T_1&&meter=G2_U3",
      lightPosition: { top: "750px", left: "1090px" },
    },
    Hard_Material: {
      prefix: "G2_U4",
      position: { top: "750px", left: "1277px" },
      link: "sld_meters?id=T_1&&meter=G2_U4",
      lightPosition: { top: "750px", left: "1262px" },
    },
    Polising_Line1: {
      prefix: "G2_U7",
      position: { top: "865px", left: "93px" },
      link: "sld_meters?id=T_1&&meter=G2_U7",
      lightPosition: { top: "865px", left: "78px" },
    },
    Polising_Line2: {
      prefix: "G2_U8",
      position: { top: "865px", left: "264px" },
      link: "sld_meters?id=T_1&&meter=G2_U8",
      lightPosition: { top: "865px", left: "250px" },
    },
    Fan_of_spray_dryer: {
      prefix: "G2_U9",
      position: { top: "865px", left: "429px" },
      link: "sld_meters?id=T_1&&meter=G2_U9",
      lightPosition: { top: "865px", left: "414px" },
    },
    Slip_piston_pump: {
      prefix: "G2_U10",
      position: { top: "865px", left: "603px" },
      link: "sld_meters?id=T_1&&meter=G2_U10",
      lightPosition: { top: "865px", left: "587px" },
    },
    Cole_Stove: {
      prefix: "G2_U12",
      position: { top: "865px", left: "767px" },
      link: "sld_meters?id=T_1&&meter=G2_U12",
      lightPosition: { top: "865px", left: "751.5px" },
    },
    ST_Motor: {
      prefix: "G2_U13",
      position: { top: "865px", left: "940px" },
      link: "sld_meters?id=T_1&&meter=G2_U13",
      lightPosition: { top: "865px", left: "925px" },
    },
    Polising_Line8: {
      prefix: "G2_U14",
      position: { top: "865px", left: "1108px" },
      link: "sld_meters?id=T_1&&meter=G2_U14",
      lightPosition: { top: "865px", left: "1090px" },
    },
    Gaze_tank1: {
      prefix: "G2_U11",
      position: { top: "865px", left: "1277px" },
      link: "sld_meters?id=T_1&&meter=G2_U11",
      lightPosition: { top: "865px", left: "1262px" },
    },
    Polising_Line4: {
      prefix: "G2_U15",
      position: { top: "986px", left: "93px" },
      link: "sld_meters?id=T_1&&meter=G2_U15",
      lightPosition: { top: "986px", left: "78px" },
    },
    Belt_100_feeding: {
      prefix: "G2_U16",
      position: { top: "986px", left: "264px" },
      link: "sld_meters?id=T_1&&meter=G2_U16",
      lightPosition: { top: "986px", left: "250px" },
    },
    No_Cumbustion_system: {
      prefix: "G2_U17",
      position: { top: "986px", left: "429px" },
      link: "sld_meters?id=T_1&&meter=G2_U17",
      lightPosition: { top: "986px", left: "414px" },
    },
    Digital_printing_machine1: {
      prefix: "G2_U18",
      position: { top: "986px", left: "603px" },
      link: "sld_meters?id=T_1&&meter=G2_U18",
      lightPosition: { top: "986px", left: "587px" },
    },
    Spare7: {
      prefix: "G2_U5",
      position: { top: "986px", left: "767px" },
      link: "sld_meters?id=T_1&&meter=G2_U5",
      lightPosition: { top: "986px", left: "751.5px" },
    },
    Air_compressor3: {
      prefix: "G2_U19",
      position: { top: "986px", left: "940px" },
      link: "sld_meters?id=T_1&&meter=G2_U19",
      lightPosition: { top: "986px", left: "925px" },
    },
  };

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const res = await fetch("https://gclapi.jiotp.com/noderedlink.php");
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);
    // Function to check if data is stale (older than 5 minutes)
  const isDataStale = () => {
    if (!data || !data.timestamp) return true;  // No data or no timestamp = stale

    const currentTime = Date.now();  // Current system time in milliseconds
    const dataTime = new Date(data.timestamp).getTime();  // Convert `timestamp` to milliseconds

    const differenceInMinutes = (currentTime - dataTime) / (1000 * 60);  // Difference in minutes

    return differenceInMinutes > 5;  // If more than 5 minutes old, data is stale
  };

  // Function to get the value, return 0 if data is stale
  const getValue = (key) => {
    if (isDataStale()) {
      return "0";  // Data stale, so return 0
    }

    if (!data) return "Loading";  // If data is still loading
    const sanitizedKey = key.trim();
    const value = data[sanitizedKey];

    return value !== undefined
      ? typeof value === "number"
        ? value.toFixed(2)  // Format numbers
        : value              // Return non-number values as-is
      : "00";                  // Key not found
  };

  // Function to render meter data
  const renderMeterData = (
    prefix,
    { position, link, lightPosition, clickableSize = {} }
  ) => {
    if (!data) return null;

    // Construct keys using the prefix
    const voltageKey = `${prefix}_VOLTAGE_L_L_AVG_V`;
    const currentKey = `${prefix}_CURRENT_TOTAL_A`;
    const powerKey = `${prefix}_ACTIVE_POWER_TOTAL_KW`;

    // Retrieve values from data
    const voltage = data[voltageKey];
    const current = data[currentKey];
    const power = data[powerKey];

    // Log values for debugging
    console.log(`Meter Prefix: ${prefix}`);
    console.log(`Voltage (${voltageKey}):`, voltage);
    console.log(`Current (${currentKey}):`, current);
    console.log(`Power (${powerKey}):`, power);

    // Determine light color and size
    let imageSrc;
    let lightSize;

    if (isDataStale()) {
      // 🔴 Stale data - show red light
      imageSrc = "/red.gif";
      lightSize = { height: "16px", width: "16px" };
    } else if (voltage === undefined || voltage === 0) {
      // 🔴 Voltage missing or zero - red light
      imageSrc = "/red.gif";
      lightSize = { height: "16px", width: "16px" };
    } else if (power === undefined || power === 0) {
      // 🟠 Power missing or zero, but voltage present - orange light
      imageSrc = "/yellow.png";
      lightSize = { height: "14px", width: "14px" };
    } else {
      // 🟢 Normal operation - green light
      imageSrc = "/green.gif";
      lightSize = { height: "21px", width: "21px" };
    }

    return (
      <div key={prefix}>
        {/* Light Indicator */}
        <img
          src={imageSrc}
          alt="Status Light"
          style={{
            position: "absolute",
            ...lightPosition,
            ...lightSize,
          }}
        />

        {/* Clickable Meter Link */}
        <a
          href={link}
          style={{
            position: "absolute",
            ...position,
            display: "block",
            width: clickableSize.width || "50px",
            height: clickableSize.height || "35px",
            background: "rgba(255, 255, 255, 0)", // Transparent
          }}
        >
          <div style={{ width: "100%", height: "100%" }}></div>
        </a>
      </div>
    );
  };

  return (
    <div
      className="overflow-auto flex justify-center w-full h-[85vh] rounded-[8px] bg-[#fff] border-2 border-[grey] border-t-[4px] border-t-[#1d5999] bg-center bg-contain bg-no-repeat"
      style={{ backgroundImage: 'url("./bglogo.png")' }}
    >
      <div>
        <div className="w-[1400px] relative pr-[50px]">
          <img src="/GCL_SLD.png" alt="Ghani Ceramics SLD" />
          {Object.entries(meterMapping).map(([meterName, config]) =>
            renderMeterData(config.prefix, config)
          )}

          {/* Solar1 */}

          <div className="absolute left-[80px] top-[180px] text-[14px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U20_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U20_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U20_CURRENT_TOTAL_A")} A</p>
          </div>

          {/* Solar2 */}
          <div className="absolute left-[270px] top-[180px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_27_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_27_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_27_CURRENT_AVG_A")} A</p>
          </div>
          {/*Total Power Trafo */}
          <div className="absolute left-[570px] top-[60px] text-[13px] font-bold text-[#167fe4] text-center">
          <p>
              {(
                ((parseFloat(getValue("U_24_ACTIVE_POWER_TOTAL_KW")) || 0) +
                  Math.abs(
                    parseFloat(getValue("U_25_ACTIVE_POWER_TOTAL_KW")) || 0
                  )) /
                1000
              ).toFixed(2)}{" "}
              kW
            </p>
          </div>
          {/* Trafo1 */}
          <div className="absolute left-[480px] top-[180px] text-[13px] font-bold text-[#167fe4] text-center">
            <p>
              {" "}
              {(getValue("U_24_ACTIVE_POWER_TOTAL_KW") / 1000).toFixed(2)} kW
            </p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_24_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_24_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Trafo2 */}
          <div
            className={`absolute left-[670px] top-[180px] text-[13px] font-bold text-center ${
              getValue("U_25_ACTIVE_POWER_TOTAL_KW") < 0
                ? "text-green-500"
                : "text-[#167fe4]"
            }`}
          >
            <p>
              {" "}
              {(getValue("U_25_ACTIVE_POWER_TOTAL_KW") / 1000).toFixed(2)} kW
            </p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_25_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_25_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Main Genset */}
          <div className="absolute left-[1075px] top-[150px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U16_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U16_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U16_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Genset 1*/}
          <div className="absolute left-[977px] top-[30px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U17_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U17_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U17_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Genset 2*/}
          <div className="absolute left-[969px] top-[110px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U18_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U18_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U18_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Genset 3*/}
          <div className="absolute left-[1280px] top-[25px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U19_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U19_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U19_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Genset 4*/}
          <div className="absolute left-[1280px] top-[132px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> NA kW</p>
            <p className="mb-[-3px] mt-[-3px]"> NA V</p>
            <p> NA A</p>
          </div>
          {/* ball mill 4 */}
          <div className="absolute left-[143px] top-[280px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_2_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_2_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_2_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* masjid */}
          <div className="absolute left-[317px] top-[280px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_3_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_3_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_3_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* glaze line 2 */}
          <div className="absolute left-[484px] top-[280px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_4_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_4_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_4_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Sorting & Packing Line */}
          <div className="absolute left-[655px] top-[280px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_5_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_5_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_5_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Digital Printing Machine */}
          <div className="absolute left-[825px] top-[280px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_6_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_6_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_6_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Colony D.B */}
          <div className="absolute left-[995px] top-[280px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_7_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_7_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_7_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Light D.B # 02 */}
          <div className="absolute left-[1155px] top-[280px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_8_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_8_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_8_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Kiln Blower Fan - (R.V.E)*/}
          <div className="absolute left-[1330px] top-[280px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_9_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_9_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_9_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*Belt 300 Feeding to Press PH4300 */}
          <div className="absolute left-[143px] top-[390px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_10_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_10_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_10_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Belt 200 Feeding to Silo */}
          <div className="absolute left-[317px] top-[390px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_11_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_11_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_11_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Glaze Line 1 */}
          <div className="absolute left-[484px] top-[390px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_12_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_12_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_12_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Perklin + Kiln */}
          <div className="absolute left-[655px] top-[390px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_13_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_13_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_13_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Layer Dryer */}
          <div className="absolute left-[825px] top-[390px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_14_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_14_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_14_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Spare 01 */}
          <div className="absolute left-[995px] top-[390px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_15_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_15_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_15_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Laboratory */}
          <div className="absolute left-[1160px] top-[390px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_16_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_16_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_16_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Air Compressor 1*/}
          <div className="absolute left-[1330px] top-[390px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_17_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_17_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_17_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*Light D.B 1 */}
          <div className="absolute left-[143px] top-[512px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_18_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_18_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_18_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Kiln Loading Machine with Compensation */}
          <div className="absolute left-[317px] top-[512px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_19_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_19_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_19_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Glaze Ball Mill 13500L-2/9500L-1 */}
          <div className="absolute left-[484px] top-[512px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_20_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_20_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_20_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Press PH 4300/1750-2 */}
          <div className="absolute left-[655px] top-[512px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_21_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_21_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_21_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Lightning Plant */}
          <div className="absolute left-[825px] top-[512px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_22_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_22_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_22_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Ball Mill 1 */}
          <div className="absolute left-[995px] top-[512px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("U_23_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("U_23_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("U_23_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Polishing Line 5 */}
          <div className="absolute left-[1160px] top-[512px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U2_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U2_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U2_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Polishing Line 6*/}
          <div className="absolute left-[1330px] top-[512px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U3_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U3_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U3_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*Glaze Ball Mill 13500L-2 */}
          <div className="absolute left-[143px] top-[630px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U4_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U4_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U4_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Polishing Line 7 */}
          <div className="absolute left-[317px] top-[630px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U5_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U5_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U5_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Air Compressor 2 */}
          <div className="absolute left-[484px] top-[630px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U6_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U6_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U6_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Glaze Ball Mill 9500L-3 */}
          <div className="absolute left-[655px] top-[630px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U7_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U7_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U7_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Spare 02 */}
          <div className="absolute left-[825px] top-[630px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U8_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U8_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U8_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Spare 03 */}
          <div className="absolute left-[993px] top-[630px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U9_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U9_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U9_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*Spare 04 */}
          <div className="absolute left-[1160px] top-[630px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U10_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U10_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U10_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* 5 Layer Dryer*/}
          <div className="absolute left-[1330px] top-[630px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U11_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U11_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U11_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*5 Layer Dryer Unloading Machine */}
          <div className="absolute left-[143px] top-[753px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U12_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U12_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U12_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Rental Genset */}
          <div className="absolute left-[317px] top-[753px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U13_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U13_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U13_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Water Treatment Area */}
          <div className="absolute left-[484px] top-[753px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U14_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U14_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U14_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Spare 05 */}
          <div className="absolute left-[655px] top-[753px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G1_U15_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G1_U15_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G1_U15_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Spare 06 */}
          <div className="absolute left-[825px] top-[753px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U6_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U6_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U6_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Press PH 4300/1750-1 */}
          <div className="absolute left-[993px] top-[753px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U2_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U2_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U2_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*Ball Mills 03 */}
          <div className="absolute left-[1160px] top-[753px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U3_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U3_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U3_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Hard Material*/}
          <div className="absolute left-[1330px] top-[753px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U4_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U4_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U4_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*Polishing Line 1 */}
          <div className="absolute left-[143px] top-[865px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U7_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U7_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U7_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Polishing Line 2 */}
          <div className="absolute left-[317px] top-[865px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U8_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U8_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U8_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Fan for Spray Dryer*/}
          <div className="absolute left-[484px] top-[865px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U9_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U9_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U9_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Slip Piston Pumps & Transfer Tanks */}
          <div className="absolute left-[655px] top-[865px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U10_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U10_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U10_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Coal Stove & Coal Conveyor */}
          <div className="absolute left-[825px] top-[865px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U12_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U12_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U12_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* ST Motor & Iron Remove */}
          <div className="absolute left-[993px] top-[865px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U13_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U13_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U13_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*Polishing Line 3 */}
          <div className="absolute left-[1160px] top-[865px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U14_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U14_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U14_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Gaze Tank-1*/}
          <div className="absolute left-[1330px] top-[865px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U11_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U11_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U11_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*Polishing Line 4 */}
          <div className="absolute left-[143px] top-[981px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U15_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U15_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U15_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*Belt 100 Feeding to BM500 */}
          <div className="absolute left-[317px] top-[986px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U16_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U16_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U16_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* No Combustion System*/}
          <div className="absolute left-[484px] top-[986px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U17_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U17_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U17_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*Digital Printing Machine */}
          <div className="absolute left-[655px] top-[986px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U18_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U18_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U18_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Spare 07 */}
          <div className="absolute left-[825px] top-[986px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U5_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U5_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U5_CURRENT_TOTAL_A")} A</p>
          </div>
          {/* Air Compressor 3 */}
          <div className="absolute left-[993px] top-[986px] text-[13px] font-bold text-[#167fe4] text-center">
            <p> {getValue("G2_U19_ACTIVE_POWER_TOTAL_KW")} kW</p>
            <p className="mb-[-3px] mt-[-3px]">
              {" "}
              {getValue("G2_U19_VOLTAGE_L_L_AVG_V")} V
            </p>
            <p> {getValue("G2_U19_CURRENT_TOTAL_A")} A</p>
          </div>
          {/*Air Compressor 4 */}
          {/* <div className='absolute left-[1160px] top-[986px] text-[13px] font-bold text-[#167fe4] text-center'>
            <p> {getValue('G2_U6_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U6_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U6_CURRENT_TOTAL_A')} A</p>
          </div> */}
          {/* <p>Value for U_2_ACTIVE_POWER_TOTAL_KW: {getValue('U_2_ACTIVE_POWER_TOTAL_KW')}</p>
      <p>Value for U_26_VOLTAGE_L_L_AVG_V: {getValue('U_8_VOLTAGE_L_L_AVG_V')}</p>
      <p>Value for U_26_CURRENT_TOTAL_A: {getValue('U_26_CURRENT_TOTAL_A')}</p> */}

          {/* <map name="workmap3">
              <area shape="rect" coords="50,550,100,620" href="/sld_meters1?id=T_1&&meter=U_7_EM7" alt="Compressor 1" />
              <area shape="rect" coords="200,545,250,620" href="/sld_meters?id=T_1&&meter=U_5_EM5" alt="Compressor 2" />
              <area shape="rect" coords="350,545,400,620" href="/sld_meters2?id=T_1&&meter=U_21" alt="Compressor 3" />
              <area shape="circle" coords="510,545,40" href="/sld_meters?id=T_1&&meter=U_10_EM10" alt="Compressor 4" />
              <area shape="rect" coords="700,545,650,620" href="/sld_meters2?id=T_1&&meter=U_15" alt="Compressor 5" />
              <area shape="rect" coords="860,545,750,620" href="/sld_meters?id=T_1&&meter=U_3_EM3" alt="Compressor 6" />
              <area shape="circle" coords="980,545,40" href="/sld_meters?id=T_1&&meter=U_4_EM4" alt="Compressor 7" />
              <area shape="rect" coords="1100,545,1150,620" href="/sld_meters?id=T_1&&meter=U_6_EM6" alt="Compressor 8" />
              <area shape="rect" coords="1350,360,950,530" href="/sld_meters1?id=T_1&&meter=U_9_EM9" alt="Compressor 10" />
              <area shape="circle" coords="1230,545,40" href="/sld_meters2?id=T_1&&meter=U_22" alt="Compressor 9" />
              <area shape="circle" coords="1430,545,40" href="/sld_meters?id=T_1&&meter=U_8_EM8" alt="Compressor 11" />
            </map> */}
        </div>
      </div>
    </div>
  );
}