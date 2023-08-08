import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
	state: () => {
		return {
			carouselProjectName: "project-portfolio-revamp-1",
			carouselProjectLink: "",
			carouselImageNames: [],
			isOverlayCarouselShown: false,
		};
	},
});
