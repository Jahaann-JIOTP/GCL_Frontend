'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const ReportsMenu = () => {

    const pathname = usePathname();
    return (
        <div>

            <nav className={`mt-4 text-black text-lg slide-from-right`}>


                <Link href="/energy_cost" className={`block py-3 px-4 hover:bg-[#E5E5E5] text-[14px] rounded ${pathname == "/energy_cost" ? 'border-t border-b border-[#1f5897] bg-[#95bfed] text-gray-800 font-semibold shadow-md mx-2' : ''}`}>
                1- Energy Cost Report
                </Link>
                <Link href="/energy_usage" className={`block py-3 px-4 hover:bg-[#E5E5E5] text-[14px] rounded ${pathname == "/energy_usage" ? 'border-t border-b border-[#1f5897] bg-[#95bfed] text-gray-800 font-semibold shadow-md mx-2' : ''}`}>
                2- Energy Usage Report
                
                </Link>
                <Link href="/energy_shift" className={`block py-3 px-4 hover:bg-[#E5E5E5] text-[14px] rounded ${pathname == "/energy_shift" ? 'border-t border-b border-[#1f5897] bg-[#95bfed] text-gray-800 font-semibold shadow-md mx-2' : ''}`}>
                3- Shift-Wise Energy Usage Reports
                
                </Link>


            </nav>
        </div>
    );
};

export default ReportsMenu;

