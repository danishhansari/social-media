const BigLoader = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen fixed top-0 left-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="50"
        height="50"
        style={{
          shapeRendering: "auto",
          display: "block",
          background: "transparent",
        }}
      >
        <g>
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#1da1f2"
            strokeWidth="8"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="0.6896551724137931s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
          <g></g>
        </g>
      </svg>
    </div>
  );
};

export default BigLoader;
