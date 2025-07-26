import React, { CSSProperties } from "react"
import { IData } from "../constants"
import clsx from "clsx"
import { NavButton } from "../styles/styled-compontents";

interface SwitchesProps {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  style?: CSSProperties;
  isMobile: boolean;
  index: number;
  data: IData[];
}

export const Switches: React.FC<SwitchesProps> = ({style, setIndex, index, data, isMobile}) => {
    const disabledMinus = index === 0;
    const disabledPlus = index === data.length-1
    return (
        <div style={{
            position: 'relative',
            display: !isMobile ? '' : 'flex',
            alignItems: "center",
            width: !isMobile ? '250px' : ''
        }}>
        <div style={style} className="pagination">
            <span className="page-counter">
                {String(index + 1).padStart(2, '0')}/
                {String(data.length).padStart(2, '0')}
            </span>
            <div style={{display: 'flex', gap: '1rem'}}>
            <NavButton disabled={disabledMinus} onClick = {() => setIndex((prev) => prev-1)} className={clsx("nav-btn", disabledMinus ? "disabled" : '')}>
                <span className="arrow left"></span>
            </NavButton>
            <NavButton disabled={disabledPlus} onClick = {() => setIndex((prev) => prev+1)} className={clsx("nav-btn", disabledPlus ? "disabled" : '')}>
                <span className="arrow right"></span>
            </NavButton>
            </div>
        </div>
        {isMobile ? <div className="custom-pagination">
        {data.map((_, idx) => (
            <div
            onClick={() => setIndex(idx)}
            key={idx}
            className={clsx('dot', { active: idx === index })}
            />
        ))}
        </div> : null}
        </div>
    )
}