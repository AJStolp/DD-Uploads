import React from "react";
import "./loadingIndicator.css";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

const LoadingIndicator = (props) => {
	const { promiseInProgress } = usePromiseTracker();
	return (
		promiseInProgress && (
			<section className='loader-spinner'>
				<Loader type='ThreeDots' color='#fca311' />
			</section>
		)
	);
};
export default LoadingIndicator;
