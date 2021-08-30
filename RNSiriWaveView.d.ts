import * as React from "react";

export interface SiriWaveProps {
	width: number;
	height: number;
	size?: object;
	props?: object;
	numberOfWaves?: number;
	backgroundColor?: string;
	waveColor?: string;
	primaryWaveLineWidth?: number;
	secondaryWaveLineWidth?: number;
	frequency?: number;
	amplitude?: number;
	density?: number;
	phaseShift?: number;
	colors?: string[];
	startAnimation: boolean;
	stopAnimation: boolean;
}

declare class RNSiriWaveView extends React.Component<SiriWaveProps> {}
export default RNSiriWaveView;
