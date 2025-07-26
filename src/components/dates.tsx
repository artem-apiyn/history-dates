import React, { useEffect, useState } from "react";
import { IData } from "../constants";
import gsap from "gsap";
import { DatesWrapper } from "../styles/styled-compontents";

interface DatesProps {
    data: IData[],
    index: number
}
export const Dates: React.FC<DatesProps> = ({data, index}) => {
    const [currentValues, setCurrentValues] = useState<[number, number]>([data[0].yearLeft, data[0].yearRight]);
    useEffect(() => {
        const obj = {
            yearLeft: currentValues[0],
            yearRight: currentValues[1],
        };
        gsap.to(obj, {
            yearLeft: data[index].yearLeft, 
            yearRight: data[index].yearRight,
            duration: 1,
            ease: "power1.out",
            onUpdate: () => {
                setCurrentValues([
                    Math.floor(obj.yearLeft),
                    Math.floor(obj.yearRight),
                ]);
            }
        });
    }, [index]);
    return (
        <DatesWrapper >
            <div className="dates" style={{color: "#5D5FEF"}}><b>{currentValues[0]}</b></div>
            <div className="dates" style={{color: "#EF5DA8"}}><b>{currentValues[1]}</b></div>
        </DatesWrapper >
    )
}