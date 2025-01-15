const DefectDetection = ({ sx = {} }) => {
  return (
    <svg
      width={264}
      height={2}
      viewBox="0 0 264 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...sx }}
    >
      <path
        opacity="0.3"
        d="M1 1H263"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};

const ObjectDetection = ({ sx = {} }) => {
  return (
    <svg
      width={221}
      height={123}
      viewBox="0 0 221 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...sx }}
    >
      <path
        opacity="0.3"
        d="M1 1H60.5C93.9132 1 121 28.0868 121 61.5V61.5C121 94.9132 148.087 122 181.5 122H219.5"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </svg>
  );
};

const AnomalyDetection = ({ sx = {} }) => {
  return (
    <svg
      width={247}
      height={244}
      viewBox="0 0 247 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...sx }}
    >
      <path
        opacity="0.3"
        d="M1.5 1H100.5C140.265 1 172.5 33.2355 172.5 73V169.5C172.5 210.093 205.407 243 246 243V243"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </svg>
  );
};

const ObjectCounting = ({ activeState, sx }) => {
  return (
    <svg
      width={247}
      height={360}
      viewBox="0 0 247 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...sx }}
    >
      <path
        opacity="0.3"
        d="M1 1H131.5C171.265 1 203.5 33.2355 203.5 73V316.5C203.5 339.696 222.304 358.5 245.5 358.5V358.5"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </svg>
  );
};

const Completeness = ({ activeState, sx }) => {
  return (
    <svg
      width={200}
      height={123}
      viewBox="0 0 200 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...sx }}
    >
      <path
        opacity="0.3"
        d="M1.5 122H38.5C71.9132 122 99 94.9132 99 61.5V61.5C99 28.0868 126.087 1 159.5 1H198.5"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </svg>
  );
};

const TextIdentification = ({ activeState, sx }) => {
  return (
    <svg
      width={231}
      height={244}
      viewBox="0 0 231 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...sx }}
    >
      <path
        opacity="0.3"
        d="M1 243H84.5C124.264 243 156.5 210.764 156.5 171V74.5C156.5 33.9071 189.407 1 230 1V1"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </svg>
  );
};

const Mesuer = ({ activeState, sx }) => {
  return (
    <svg
      width={247}
      height={360}
      viewBox="0 0 247 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...sx }}
    >
      <path
        opacity="0.3"
        d="M1 358.5H131.5C171.265 358.5 203.5 326.265 203.5 286.5V43C203.5 19.8041 222.304 1 245.5 1V1"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </svg>
  );
};

export {
  DefectDetection,
  ObjectDetection,
  AnomalyDetection,
  ObjectCounting,
  Completeness,
  TextIdentification,
  Mesuer,
};
