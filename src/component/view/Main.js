import React, { useRef, useState, useEffect } from "react";

const MainCanvas = () => {
    const canvasRef = useRef(null);
    const [canvassTag, setCanvasTag] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 0.5;
        canvas.height = window.innerHeight;

        setCanvasTag(canvas);
    }, []);

    console.log("canvasTag : " + canvassTag);

    return (
        <div className="canvas_wrap" style={{backgroundColor : "green"}}>
            <span id="title" style={{justifyContent : "center", alignItems : "center", display : "flex"}}>
                <p style={{fontSize : 100, textAlign : "center", color : "#770000"}}>SHOOT-A-BALL</p>
            </span>
            {}
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default MainCanvas;

