import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        className="ipc-icon ipc-icon--inline ipc-media__icon"
        {...props}
    >
        <Path
            fill="currentColor"
            d="M12 2c2.49 0 4.5 1.975 4.5 4.421s-2.01 4.421-4.5 4.421-4.5-1.975-4.5-4.42C7.5 3.974 9.51 2 12 2Zm0 21c-3.75 0-7.065-1.796-9-4.52.045-2.792 6-4.322 9-4.322 2.985 0 8.955 1.53 9 4.323C19.065 21.204 15.75 23 12 23Z"
        />
    </Svg>
);
export default SvgComponent;
