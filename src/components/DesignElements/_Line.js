const _Line = ({ sx = {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="hidden xl:block"
      width={4}
      height={894}
      viewBox="0 0 4 894"
      fill="none"
      style={{
        ...sx,
      }}
    >
      <path
        d="M2 2V892"
        stroke="#ABABAB"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="6 8"
      />
    </svg>
  );
};

const _VerticalLine = ({ sx = {}, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={393}
      height={2}
      viewBox="0 0 393 2"
      fill="none"
      style={{
        ...sx,
      }}
      {...props}
    >
      <path
        d="M443 1L-53 1"
        stroke="#ABABAB"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeDasharray="6 3"
      />
    </svg>
  );
};
export {_VerticalLine}
export default _Line;
