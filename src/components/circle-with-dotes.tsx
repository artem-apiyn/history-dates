import gsap from "gsap";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IData } from "../constants";
import { Circle, Dot } from "../styles/styled-compontents";

interface CircleWithDotesProps {
  data: IData[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
export const CircleWithDotes:React.FC<CircleWithDotesProps> = ({
    data,
    index,
    setIndex,
}) => {
    const circleRef = useRef<HTMLDivElement>(null);
    const dotsRefs = useRef<HTMLDivElement[]>([]);
    const [hovered, setHovered] = useState<number | null>(null);

    const centerX = 190;
    const centerY = 190;
    const angleStep = 360 / data.length;
    const angleDeg = (270 * Math.PI) / 180;

    const labelTop = useMemo(() => centerY + (centerY - 150) * Math.sin(angleDeg) -2 ,[]);
    const labelLeft = useMemo(() => centerX + centerX * Math.cos(angleDeg) + 525, []);

    const dotsLayout = useMemo(
        () =>
            data.map((_, i) => {
            const angleDeg = angleStep * i;
            const angleRad = (angleDeg * Math.PI) / 180;
            return {
                top: centerY + centerY * Math.sin(angleRad),
                left: centerX + centerX * Math.cos(angleRad),
            };
            }),
        [data.length]
        );
    const addDotRef = (el: HTMLDivElement | null) => {
        if (el && !dotsRefs.current.includes(el)) {
        dotsRefs.current.push(el);
        }
    };

    useEffect(() => {
        const rotateTo = -(angleStep * index) - 65;
        gsap.to(circleRef.current, {
        rotate: rotateTo,
        duration: 1,
        ease: "power3.inOut",
        });
        dotsRefs.current.forEach((dot) => {
        gsap.to(dot, {
            rotate: -rotateTo,
            duration: 0.5,
            ease: "power3.inOut",
        });
        });
    }, [index]);

    return (
        <>
        <Circle ref={circleRef}>
            {data.map((item, i) => {
            const activeOrHovered = i === index || i === hovered;
            const { top, left } = dotsLayout[i];

            const dotStyle: React.CSSProperties = {
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#42567A",
                fontWeight: 550,
                fontSize: "16px",
                top: `${top}px`,
                left: `${left}px`,
                background: activeOrHovered ? "#F4F5F9" : "#42567A",
                border: activeOrHovered ? "1px solid #b4bccc" : "none",
                width: activeOrHovered ? "50px" : "8px",
                height: activeOrHovered ? "50px" : "8px",
            };

            return (
                <Dot
                key={item.id}
                ref={addDotRef}
                style={dotStyle}
                onClick={() => setIndex(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                >
                {activeOrHovered ? <span>{i + 1}</span> : null}
                </Dot>
            );
            })}
        </Circle>
        <div
            key={index}
            style={{
            position: "absolute",
            top: `${labelTop}px`,
            left: `${labelLeft}px`,
            opacity: 0,
            animation: "fadeIn 0.3s ease forwards",
            animationDelay: "1.5s",
            fontSize: "18px",
            fontWeight: 550,
            color: "#42567A",
            }}
        >
            {data[index].name}
        </div>
        </>
    );
};
