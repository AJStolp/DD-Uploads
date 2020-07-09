import config from "../config";
import React from "react";
import { Link } from "react-router-dom";
import "./upload-videos.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import TokenService from "../services/token-service";
import LoadingIndicator from "../loadingIndicator/loadingIndicator";
import { trackPromise } from "react-promise-tracker";

class UploadVideos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			content: "",
			status: "",
		};
	}

	onTitleChange = async (title) => {
		title.preventDefault();
		await this.setState({
			title: title.target.value,
		});
	};
	onContentChange = async (content) => {
		content.preventDefault();
		await this.setState({
			content: content.target.value,
		});
	};

	submitForm = (form) => {
		form.preventDefault();

		let myForm = document.getElementById("form");
		const formData = new FormData(myForm);

		const request = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
			body: formData,
			Accept: "application/json",
		};

		const url = `${config.API_ENDPOINT}/videos`;

		trackPromise(
			fetch(url, request, {mode: 'no-cors'})
				.then((res) => {
					if (!res.ok) {
						throw new Error(
							alert(
								"You must be signed when trying to upload - Please try your upload again after creating an account or signing in."
							)
						);
					}
					if (res.ok) {
						this.setState({
							isLoading: true,
						});
					}
					return res.json();
				})
				.then((data) => {
					this.setState({
						status: alert("Your video upload was successful!"),
					});
					window.location.assign("/home-page");
				})
				.catch((error) => {
					console.log(error);
				})
		);
	};

	render() {
		return (
			<div>
				<form
					onSubmit={(form) => this.submitForm(form)}
					id='form'
					encType='multipart/form-data'
				>
					<div className='row'>
						<section className='column' id='column-1'>
							<FaCloudUploadAlt id='upload-icon' />
							<p>Upload time varies - dependant on video size</p>
							<div>
								<h2 htmlFor='file' id='up-label'>
									Upload File.
								</h2>
								<input
									accept='video/*'
									name='file'
									type='file'
									id='file'
									className='files'
								/>
							</div>
						</section>
						<section className='column'>
							<p htmlFor='title'>Video Title</p>
							<input
								name='title'
								maxLength='40'
								value={this.state.title}
								onChange={(title) => this.onTitleChange(title)}
								type='text'
								id='title'
								placeholder='Your Video Title'
								required
							/>
							<p htmlFor='description'>Video Description</p>
							<textarea
								name='content'
								value={this.state.content}
								onChange={(content) => this.onContentChange(content)}
								id='description'
								className=''
								maxLength='140'
								placeholder='Your Video Description'
								required
							></textarea>
							<br></br>
							<button type='submit' className='upload-btn'>
								Upload Your Video
							</button>
						</section>
					</div>
					<LoadingIndicator />
					<div>
						<Link to='/home-page' className='watch-now watch-now-link'>
							Watch Videos Now
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default UploadVideos;
