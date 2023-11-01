import React, { useRef, useState, useEffect } from "react";

const Canvas = () => {
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
        <div className="canvas_wrap" style={{color : "green"}}>
            {}
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default Canvas;

