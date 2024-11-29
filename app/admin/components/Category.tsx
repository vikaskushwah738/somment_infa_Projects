"use client";
import { useEffect, useState } from "react";

interface CategoryProp {
    category: string; 
}

export default function Category () {
    const [categoryData, SetCategoryData] = useState<CategoryProp[]>([]);

    useEffect(() => {
        const fetchYearData = async () => {
            try {
                const response = await fetch('/api/create-year'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch year data');
                }
           
                const data: CategoryProp[] = await response.json();
                SetCategoryData(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchYearData();
    }, []);
   
    return (
        <>
            {categoryData.map((data, index) => (
                <option
                    key={index}
                    value={data.category}
                >
                    {data.category}
                </option>
            ))}
        </>
    );
}