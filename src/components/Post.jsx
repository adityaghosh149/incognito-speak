/* eslint-disable react/prop-types */
import React from "react";
import { FaArrowDown, FaArrowUp, FaShare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removePost } from "../redux/postSlice";

const Post = ({ post }) => {
	const dispatch = useDispatch();
	const { topic, title, description, media, username, time } = post;

	const handleRemovePost = () => {
		dispatch(removePost(post.postid));
	};

	// Function to check the file type
	const getFileType = (url) => {
		if (url === null) return "null";
		const extension = url.split(".").pop().toLowerCase();
		if (["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(extension))
			return "image";
		if (["mp4", "webm", "ogg"].includes(extension)) return "video";
		if (url.includes("youtube.com") || url.includes("youtu.be"))
			return "youtube";
		return "link";
	};

	// Function to render media
	const renderMedia = () => {
		const fileType = getFileType(media);

		switch (fileType) {
			case "image":
				return (
					<img
						src={media}
						alt="Media content"
						className="max-w-full h-auto rounded"
					/>
				);
			case "video":
				return (
					<video controls className="max-w-full rounded">
						<source src={media} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				);
			case "youtube":
				// eslint-disable-next-line no-case-declarations
				const videoId =
					media.split("v=")[1]?.split("&")[0] || media.split("/").pop();

				// eslint-disable-next-line no-case-declarations
				const embedUrl = `https://www.youtube.com/embed/${videoId}`;
				return (
					<div className="rounded">
						<iframe
							className="rounded"
							width="100%"
							height="315"
							src={embedUrl}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				);
			case "null":
				return null;
			default:
				return (
					<a
						href={media}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 underline"
					>
						View Link
					</a>
				);
		}
	};

	return (
		<div className="bg-black text-white p-8 rounded shadow-xl mb-4 relative">
			<button
				onClick={handleRemovePost}
				className="absolute top-0 right-0 hover:text-red-500 focus:outline-none pr-7 pt-7 font-bold text-2xl"
			>
				&times;
			</button>

			<h3 className="text-lg font-bold hover:cursor-pointer">{title}</h3>
			<p className="text-xs mb-4">
				<span className="hover:cursor-pointer hover:underline">{username}</span>{" "}
				• <span className="hover:cursor-pointer hover:underline">{time}</span> •{" "}
				<span className="hover:cursor-pointer hover:underline">{topic}</span>
			</p>

			<div className=" mb-4 hover:cursor-pointer">{renderMedia()}</div>

			<p className="mb-4">{description}</p>

			<div className="flex items-center justify-between py-2300 bg-blue-500	text-white rounded px-3 py-2 text-sm">
				<div className="flex gap-x-3">
					<button className="flex items-center space-x-1 hover:text-gray-900 focus:outline-none">
						<FaArrowUp className="text-lg" />
						<span>Upvote</span>
					</button>

					<button className="flex items-center space-x-1 hover:text-gray-900 focus:outline-none">
						<FaArrowDown className="text-lg" />
						<span>Downvote</span>
					</button>
				</div>

				<button className="flex items-center space-x-1 hover:text-gray-900 focus:outline-none">
					<span>See Full Thread</span>
				</button>

				<button className="flex items-center space-x-1 hover:text-gray-900 focus:outline-none">
					<FaShare className="text-lg" />
					<span>Share</span>
				</button>
			</div>
		</div>
	);
};

export default Post;
