import React, { useCallback, useEffect, useState } from "react"
import { data } from "../constants";
import {Slider} from "./slider";
import { Switches } from "./switches";
import { CircleWithDotes } from "./circle-with-dotes";
import { Dates } from "./dates";

export const HistoryDates:React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState(false);
    const checkMobile = useCallback(() => {
        setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    }, []);
    useEffect(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return (
        <>
        {!isMobile ? <CircleWithDotes 
            setIndex={setIndex} 
            data={data} 
            index={index}
        /> : null}
        <Dates data={data} index={index} />
        {isMobile ? (
            <>
            <Slider isMobile = {isMobile} index={index} data = {data}/>
            <Switches
                setIndex={setIndex}
                isMobile = {isMobile}
                style={{margin: '0 0 0 15px'}}
                index={index}
                data={data}
            />
            </>
        ) : (
            <>
            <Switches
                setIndex={setIndex}
                isMobile = {isMobile}
                style={{margin: '30px 0 0 40px'}}
                index={index}
                data={data}
            />
            <Slider isMobile = {isMobile} index={index} data = {data}/>
            </>
        )}
        </>
    )
}