/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, writable } from 'svelte/store';
import { urlFor } from './utils/image';

export const lightbox = writable<any>(null);
export const lightboxOpen = writable<boolean>(false);
export const currLightboxImageArray = writable<any[]>([]);
export const currLightboxImageIdx = writable<number>(undefined);

export const getImgUrl = (imgRef: any) => {
	return urlFor(imgRef)
		.width(Math.min(window.innerWidth * 2, 2400))
		.fit('max')
		.url();
};

export const setLightbox = (e: any, imageArray?: any, imageIdx?: any, imgRef?: any) => {
	let src;
	if (imgRef) {
		src = getImgUrl(imgRef);
	} else {
		src = e.target.src;
	}
	get(lightbox).style.backgroundImage = 'url(' + src + ')';
	lightboxOpen.set(true);
	currLightboxImageArray.set(imageArray);
	currLightboxImageIdx.set(imageIdx);
};
export const closeLightbox = () => {
	lightboxOpen.set(false);
};

export const setNextLightboxImage = (e: Event) => {
	e.stopPropagation();
	if (get(currLightboxImageIdx) === get(currLightboxImageArray).length - 1) {
		currLightboxImageIdx.set(0);
	} else {
		currLightboxImageIdx.update((idx) => idx + 1);
	}
	const imgRef = get(currLightboxImageArray)[get(currLightboxImageIdx)].img.asset._ref;
	const src = getImgUrl(imgRef);
	get(lightbox).style.backgroundImage = 'url(' + src + ')';
};

export const setPrevLightboxImage = (e: Event) => {
	e.stopPropagation();
	if (get(currLightboxImageIdx) === 0) {
		currLightboxImageIdx.set(get(currLightboxImageArray).length - 1);
	} else {
		currLightboxImageIdx.update((idx) => idx - 1);
	}
	const imgRef = get(currLightboxImageArray)[get(currLightboxImageIdx)].img.asset._ref;
	const src = getImgUrl(imgRef);
	get(lightbox).style.backgroundImage = 'url(' + src + ')';
};
