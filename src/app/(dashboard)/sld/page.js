'use client'; // Marks this component as a Client Component
import Meter from '@/components/meter';

import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
export default function SLDPage() {
  const [data, setData] = useState(null);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const res = await fetch('http://13.234.241.103:1880/latestgcl1');
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // useEffect to fetch data on mount and set an interval to refresh
  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Helper function to get the value by key and format to 2 decimal places
  const getValue = (key) => {
    if (!data) return 'Loading...'; // Show loading if data is not yet available
    const sanitizedKey = key.trim(); // Sanitize the key
    const value = data[sanitizedKey];
    return value !== undefined
      ? typeof value === 'number'
        ? value.toFixed(2) // Format numbers to 2 decimal places
        : value // Return non-numeric values as-is
      : '---';
  };
  return (
    <div className='flex justify-center w-full h-[85vh] rounded-[8px] bg-[#fff] border-2 border-[grey] border-t-[4px] border-t-[#1d5999] bg-center bg-contain bg-no-repeat'
      style={{ backgroundImage: 'url("./bglogo.png")' }}>
      <div className="p-2 overflow-auto">
        <div className='w-[1300px] relative'>
          {/* <Image src="/gcl_sld.png" className='' alt="Description of the image" width={1000} height={1000} /> */}
          <img src="/gcl_sld1.png" alt="Ghani Ceramics SLD"></img>

          {/* {uper 4 meters} */}
          <Meter position={'top-[94px] left-[202px]'} link={'sld_meters?id=T_1&&meter=G2_U20'}></Meter>
          <Meter position={'top-[94px] left-[392px]'} link={'sld_meters?id=T_1&&meter=U_27'}></Meter>
          <Meter position={'top-[94px] left-[630px]'} link={'sld_meters?id=T_1&&meter=U_24'}></Meter>
          <Meter position={'top-[94px] left-[820px]'} link={'sld_meters?id=T_1&&meter=U_25'}></Meter>
          {/* 1st row */}
          <Meter position={'top-[174px] left-[40px]'} link={'sld_meters?id=T_1&&meter=U_2'}></Meter>
          <Meter position={'top-[174px] left-[189px]'} link={'sld_meters?id=T_1&&meter=U_3'}></Meter>
          <Meter position={'top-[174px] left-[341px]'} link={'sld_meters?id=T_1&&meter=U_4'}></Meter>
          <Meter position={'top-[174px] left-[489px]'} link={'sld_meters?id=T_1&&meter=U_5'}></Meter>
          <Meter position={'top-[174px] left-[640px]'} link={'sld_meters?id=T_1&&meter=U_6'}></Meter>
          <Meter position={'top-[174px] left-[792px]'} link={'sld_meters?id=T_1&&meter=U_7'}></Meter>
          <Meter position={'top-[174px] left-[932px]'} link={'sld_meters?id=T_1&&meter=U_8'}></Meter>
          <Meter position={'top-[174px] left-[1078px]'} link={'sld_meters?id=T_1&&meter=U_9'}></Meter>
          {/* 2nd row */}
          <Meter position={'top-[253px] left-[40px]'} link={'sld_meters?id=T_1&&meter=U_10'}></Meter>
          <Meter position={'top-[253px] left-[189px]'} link={'sld_meters?id=T_1&&meter=U_11'}></Meter>
          <Meter position={'top-[253px] left-[341px]'} link={'sld_meters?id=T_1&&meter=U_12'}></Meter>
          <Meter position={'top-[253px] left-[497px]'} link={'sld_meters?id=T_1&&meter=U_13'}></Meter>
          <Meter position={'top-[253px] left-[652px]'} link={'sld_meters?id=T_1&&meter=U_14'}></Meter>
          <Meter position={'top-[253px] left-[792px]'} link={'sld_meters?id=T_1&&meter=U_15'}></Meter>
          <Meter position={'top-[253px] left-[935px]'} link={'sld_meters?id=T_1&&meter=U_16'}></Meter>
          <Meter position={'top-[253px] left-[1078px]'} link={'sld_meters?id=T_1&&meter=U_17'}></Meter>
          {/* 3rd row */}
          <Meter position={'top-[337px] left-[40px]'} link={'sld_meters?id=T_1&&meter=U_18'}></Meter>
          <Meter position={'top-[337px] left-[189px]'} link={'sld_meters?id=T_1&&meter=U_19'}></Meter>
          <Meter position={'top-[337px] left-[341px]'} link={'sld_meters?id=T_1&&meter=U_20'}></Meter>
          <Meter position={'top-[338px] left-[497px]'} link={'sld_meters?id=T_1&&meter=U_21'}></Meter>
          <Meter position={'top-[338px] left-[652px]'} link={'sld_meters?id=T_1&&meter=U_22'}></Meter>
          <Meter position={'top-[338px] left-[792px]'} link={'sld_meters?id=T_1&&meter=U_23'}></Meter>
          <Meter position={'top-[338px] left-[934px]'} link={'sld_meters?id=T_1&&meter=G1_U2'}></Meter>
          <Meter position={'top-[337px] left-[1076px]'} link={'sld_meters?id=T_1&&meter=G1_U3'}></Meter>
          {/* 4th row */}
          <Meter position={'top-[419px] left-[40px]'} link={'sld_meters?id=T_1&&meter=G1_U4'}></Meter>
          <Meter position={'top-[419px] left-[189px]'} link={'sld_meters?id=T_1&&meter=G1_U5'}></Meter>
          <Meter position={'top-[419px] left-[341px]'} link={'sld_meters?id=T_1&&meter=G1_U6'}></Meter>
          <Meter position={'top-[420px] left-[497px]'} link={'sld_meters?id=T_1&&meter=G1_U7'}></Meter>
          <Meter position={'top-[419px] left-[652px]'} link={'sld_meters?id=T_1&&meter=G1_U8'}></Meter>
          {/* <Meter position={'top-[419px] left-[792px]'} link={'sld_meters?id=T_1&&meter=G1_U10'}></Meter> */}
          <Meter position={'top-[419px] left-[934px]'} link={'sld_meters?id=T_1&&meter=G1_U10'}></Meter>
          <Meter position={'top-[419px] left-[1078px]'} link={'sld_meters?id=T_1&&meter=G1_U11'}></Meter>
          {/* 5th row */}
          <Meter position={'top-[505px] left-[40px]'} link={'sld_meters?id=T_1&&meter=G1_U12'}></Meter>
          <Meter position={'top-[505px] left-[189px]'} link={'sld_meters?id=T_1&&meter=G1_U13'}></Meter>
          <Meter position={'top-[505px] left-[341px]'} link={'sld_meters?id=T_1&&meter=G1_U14'}></Meter>
          <Meter position={'top-[507px] left-[497px]'} link={'sld_meters?id=T_1&&meter=G1_U15'}></Meter>
          <Meter position={'top-[506px] left-[652px]'} link={'sld_meters?id=T_1&&meter=G1_U16'}></Meter>
          <Meter position={'top-[505px] left-[792px]'} link={'sld_meters?id=T_1&&meter=G2_U2'}></Meter>
          <Meter position={'top-[506px] left-[935px]'} link={'sld_meters?id=T_1&&meter=G2_U3'}></Meter>
          <Meter position={'top-[506px] left-[1078px]'} link={'sld_meters?id=T_1&&meter=G2_U4'}></Meter>
          {/* 6th row */}
          <Meter position={'top-[587px] left-[40px]'} link={'sld_meters?id=T_1&&meter=G2_U7'}></Meter>
          <Meter position={'top-[587px] left-[189px]'} link={'sld_meters?id=T_1&&meter=G2_U8'}></Meter>
          <Meter position={'top-[587px] left-[341px]'} link={'sld_meters?id=T_1&&meter=G2_U9'}></Meter>
          <Meter position={'top-[588px] left-[497px]'} link={'sld_meters?id=T_1&&meter=G2_U10'}></Meter>
          <Meter position={'top-[588px] left-[652px]'} link={'sld_meters?id=T_1&&meter=G2_U12'}></Meter>
          <Meter position={'top-[588px] left-[792px]'} link={'sld_meters?id=T_1&&meter=G2_U13'}></Meter>
          <Meter position={'top-[588px] left-[935px]'} link={'sld_meters?id=T_1&&meter=G2_U14'}></Meter>
          <Meter position={'top-[588px] left-[1078px]'} link={'sld_meters?id=T_1&&meter=G2_U11'}></Meter>
          {/* 7th row */}
          <Meter position={'top-[673px] left-[40px]'} link={'sld_meters?id=T_1&&meter=G2_U15'}></Meter>
          <Meter position={'top-[673px] left-[187px]'} link={'sld_meters?id=T_1&&meter=G2_U16'}></Meter>
          <Meter position={'top-[673px] left-[339px]'} link={'sld_meters?id=T_1&&meter=G2_U17'}></Meter>
          <Meter position={'top-[673px] left-[495px]'} link={'sld_meters?id=T_1&&meter=G2_U18'}></Meter>
          <Meter position={'top-[674px] left-[652px]'} link={'sld_meters?id=T_1&&meter=G2_U5'}></Meter>
          <Meter position={'top-[674px] left-[792px]'} link={'sld_meters?id=T_1&&meter=G2_U19'}></Meter>
          <Meter position={'top-[674px] left-[933px]'} link={'sld_meters?id=T_1&&meter=G2_U6'}></Meter>
          {/* <Meter position={'top-[674px] left-[1078px]'} link={'#'}></Meter> */}

          {/* values */}
         
         
          {/* Solar1 */}
        
          <div className='absolute left-[239px] top-[87px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U20_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U20_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U20_CURRENT_TOTAL_A')} A</p>
          </div>
          
          {/* Solar2 */}
          <div className='absolute left-[430px] top-[87px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_27_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_27_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_27_CURRENT_AVG_A')} A</p>
          </div>
          {/* Trafo1 */}
          <div className='absolute left-[668px] top-[89px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {(getValue('U_24_ACTIVE_POWER_TOTAL_KW')/1000).toFixed(2)} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_24_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_24_CURRENT_TOTAL_A')} A</p>
          </div>
          {/* Trafo2 */}
          <div className='absolute left-[859px] top-[89px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {(getValue('U_25_ACTIVE_POWER_TOTAL_KW')/1000).toFixed(2)} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_25_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_25_CURRENT_TOTAL_A')} A</p>
          </div>
          {/* ball mill 4 */}
          <div className='absolute left-[84px] top-[178px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_2_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_2_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_2_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* masjid */}
           <div className='absolute left-[235px] top-[178px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_3_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_3_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_3_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* glaze line 2 */}
           <div className='absolute left-[390px] top-[178px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_4_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_4_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_4_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Sorting & Packing Line */}
           <div className='absolute left-[540px] top-[178px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_5_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_5_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_5_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Digital Printing Machine */}
           <div className='absolute left-[693px] top-[178px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_6_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_6_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_6_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Colony D.B */}
           <div className='absolute left-[835px] top-[178px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_7_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_7_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_7_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Light D.B # 02 */}
           <div className='absolute left-[983px] top-[178px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_8_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_8_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_8_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Kiln Blower Fan - (R.V.E)*/}
           <div className='absolute left-[1127px] top-[178px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_9_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_9_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_9_CURRENT_TOTAL_A')} A</p>
          </div>
          {/*Belt 300 Feeding to Press PH4300 */}
          <div className='absolute left-[84px] top-[260px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_10_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_10_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_10_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Belt 200 Feeding to Silo */}
           <div className='absolute left-[235px] top-[263px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_11_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_11_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_11_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Glaze Line 1 */}
           <div className='absolute left-[390px] top-[255px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_12_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_12_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_12_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Perklin + Kiln */}
           <div className='absolute left-[544px] top-[255px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_13_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_13_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_13_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Layer Dryer */}
           <div className='absolute left-[700px] top-[255px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_14_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_14_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_14_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Spare 01 */}
           <div className='absolute left-[841px] top-[255px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_15_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_15_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_15_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Laboratory */}
           <div className='absolute left-[985px] top-[255px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_16_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_16_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_16_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Air Compressor 1*/}
           <div className='absolute left-[1127px] top-[257px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_17_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_17_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_17_CURRENT_TOTAL_A')} A</p>
          </div>
          {/*Light D.B 1 */}
          <div className='absolute left-[94px] top-[338px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_18_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_18_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_18_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Kiln Loading Machine with Compensation */}
           <div className='absolute left-[245px] top-[343px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_19_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_19_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_19_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Glaze Ball Mill 13500L-2/9500L-1 */}
           <div className='absolute left-[390px] top-[343px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_20_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_20_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_20_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Press PH 4300/1750-2 */}
           <div className='absolute left-[545px] top-[338px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_21_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_21_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_21_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Lightning Plant */}
           <div className='absolute left-[701px] top-[341px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_22_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_22_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_22_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Ball Mill 1 */}
           <div className='absolute left-[841px] top-[338px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('U_23_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('U_23_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('U_23_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Polishing Line 5 */}
           <div className='absolute left-[983px] top-[338px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U2_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U2_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U2_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Polishing Line 6*/}
           <div className='absolute left-[1127px] top-[338px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U3_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U3_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U3_CURRENT_TOTAL_A')} A</p>
          </div>
          {/*Glaze Ball Mill 13500L-2 */}
          <div className='absolute left-[84px] top-[429px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U4_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U4_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U4_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Polishing Line 7 */}
           <div className='absolute left-[235px] top-[421px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U5_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U5_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U5_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Air Compressor 2 */}
           <div className='absolute left-[390px] top-[427px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U6_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U6_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U6_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Glaze Ball Mill 9500L-3 */}
           <div className='absolute left-[540px] top-[422px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U7_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U7_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U7_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Spare 02 */}
           <div className='absolute left-[698px] top-[423px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U8_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U8_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U8_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Spare 03 */}
           {/* <div className='absolute left-[835px] top-[424px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U9_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U9_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U9_CURRENT_TOTAL_A')} A</p>
          </div> */}
           {/*Spare 04 */}
           <div className='absolute left-[983px] top-[424px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U10_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U10_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U10_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* 5 Layer Dryer*/}
           <div className='absolute left-[1127px] top-[422px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U11_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U11_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U11_CURRENT_TOTAL_A')} A</p>
          </div>
          {/*5 Layer Dryer Unloading Machine */}
          <div className='absolute left-[84px] top-[515px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U12_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U12_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U12_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Rental Genset */}
           <div className='absolute left-[235px] top-[507px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U13_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U13_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U13_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Water Treatment Area */}
           <div className='absolute left-[390px] top-[507px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U14_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U14_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U14_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Spare 05 */}
           <div className='absolute left-[540px] top-[507px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U15_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U15_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U15_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Spare 06 */}
           <div className='absolute left-[697px] top-[507px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G1_U16_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G1_U16_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G1_U16_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Press PH 4300/1750-1 */}
           <div className='absolute left-[835px] top-[513px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U2_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U2_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U2_CURRENT_TOTAL_A')} A</p>
          </div>
           {/*Ball Mills 03 */}
           <div className='absolute left-[983px] top-[506px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U3_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U3_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U3_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Hard Material*/}
           <div className='absolute left-[1127px] top-[508px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U4_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U4_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U4_CURRENT_TOTAL_A')} A</p>
          </div>
          {/*Polishing Line 1 */}
          <div className='absolute left-[84px] top-[590px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U7_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U7_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U7_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Polishing Line 2 */}
           <div className='absolute left-[235px] top-[590px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U8_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U8_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U8_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Fan for Spray Dryer*/}
           <div className='absolute left-[390px] top-[590px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U9_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U9_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U9_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Slip Piston Pumps & Transfer Tanks */}
           <div className='absolute left-[540px] top-[590px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U10_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U10_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U10_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Coal Stove & Coal Conveyor */}
           <div className='absolute left-[699px] top-[598px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U12_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U12_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U12_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* ST Motor & Iron Remove */}
           <div className='absolute left-[835px] top-[590px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U13_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U13_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U13_CURRENT_TOTAL_A')} A</p>
          </div>
           {/*Polishing Line 3 */}
           <div className='absolute left-[983px] top-[590px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U14_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U14_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U14_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Gaze Tank-1*/}
           <div className='absolute left-[1127px] top-[590px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U11_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U11_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U11_CURRENT_TOTAL_A')} A</p>
          </div>
          {/*Polishing Line 4 */}
          <div className='absolute left-[84px] top-[675px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U15_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U15_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U15_CURRENT_TOTAL_A')} A</p>
          </div>
           {/*Belt 100 Feeding to BM500 */}
           <div className='absolute left-[235px] top-[685px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U16_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U16_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U16_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* No Combustion System*/}
           <div className='absolute left-[390px] top-[685px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U17_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U17_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U17_CURRENT_TOTAL_A')} A</p>
          </div>
           {/*Digital Printing Machine */}
           <div className='absolute left-[540px] top-[685px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U18_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U18_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U18_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Spare 07 */}
           <div className='absolute left-[699px] top-[675px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U5_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U5_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U5_CURRENT_TOTAL_A')} A</p>
          </div>
           {/* Air Compressor 3 */}
           <div className='absolute left-[838px] top-[675px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U19_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U19_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U19_CURRENT_TOTAL_A')} A</p>
          </div>
           {/*Air Compressor 4 */}
           <div className='absolute left-[983px] top-[675px] text-[13px] font-bold text-[#76fd40] text-center'>
            <p> {getValue('G2_U6_ACTIVE_POWER_TOTAL_KW')} kW</p>
            <p className='mb-[-3px] mt-[-3px]'> {getValue('G2_U6_VOLTAGE_L_L_AVG_V')} V</p>
            <p> {getValue('G2_U6_CURRENT_TOTAL_A')} A</p>
          </div>
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



