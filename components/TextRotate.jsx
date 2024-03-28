import React, { useEffect, useRef } from "react";
import { useScroll } from 'framer-motion';
import "@/scss/TextSVG.scss";

function TextCircle() {
    const container = useRef();
    const svgRef = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    });

    useEffect(() => {
        scrollYProgress.on("change", e => {
            const rotation = e * 770;
            if (svgRef.current) {
                svgRef.current.style.transform = `rotate(${rotation}deg)`;
            }
        });
    }, [scrollYProgress]);

    return (
        <div ref={container} style={{ height: "500vh", position: "relative" }}>
            <svg ref={svgRef} className="container" viewBox="0 0 500 500" 
            style={{ position: "fixed", top: "0%", left: "0%", maxWidth: "90vh", maxHeight: "90vh" }} 
           >
               
                <path id="circlePath" d="M 250, 250 m -60, 0 a 60,60 0 1,0 120,0 a 60,60 0 1,0 -120,0" fill="none" stroke="transparent"/>
                <text fill="grey" fontSize="15">
                  
                    <textPath xlinkHref="#circlePath" startOffset="50%">
                        Recent work & projects
                    </textPath>
                    <textPath xlinkHref="#circlePath" startOffset="0%">
                    Recent work & projects 
                    </textPath>
                </text>
            </svg>
        </div>
    );
}

export default TextCircle;