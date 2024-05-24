const SmallLoader = ({
  className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
}) => {
  return (
    <svg
      className={className}
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
  );
};

export default SmallLoader;
