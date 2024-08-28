/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, writable } from 'svelte/store';
import { urlFor } from './utils/image';

export const lightbox = writable<any>(null);
export const lightboxOpen = writable<boolean>(false);
export const currLightboxImageArray = writable<any[]>([]);
export const currLightboxImageIdx = writable<number>(undefined);

export const currLightboxDescription = writable<any>(undefined);

export const getImgUrl = (imgRef: any) => {
	return urlFor(imgRef)
		.width(Math.min(window.innerWidth * 2, 2400))
		.fit('max')
		.url();
};

export const setLightbox = (e: any, imageArray?: any, imageIdx?: any, imgObj?: any) => {
	let src;
	if (imgObj) {
		src = getImgUrl(imgObj.img.asset._ref);
	} else {
		src = e.target.src;
	}
	get(lightbox).style.backgroundImage = 'url(' + src + ')';
	lightboxOpen.set(true);
	currLightboxImageArray.set(imageArray);
	currLightboxImageIdx.set(imageIdx);
	currLightboxDescription.set(imgObj.caption);
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
	const imgObj = get(currLightboxImageArray)[get(currLightboxImageIdx)];
	const imgRef = imgObj.img.asset._ref;
	const src = getImgUrl(imgRef);
	get(lightbox).style.backgroundImage = 'url(' + src + ')';
	currLightboxDescription.set(imgObj.caption);
};

export const setPrevLightboxImage = (e: Event) => {
	e.stopPropagation();
	if (get(currLightboxImageIdx) === 0) {
		currLightboxImageIdx.set(get(currLightboxImageArray).length - 1);
	} else {
		currLightboxImageIdx.update((idx) => idx - 1);
	}
	const imgObj = get(currLightboxImageArray)[get(currLightboxImageIdx)];
	const imgRef = imgObj.img.asset._ref;
	const src = getImgUrl(imgRef);
	get(lightbox).style.backgroundImage = 'url(' + src + ')';
	currLightboxDescription.set(imgObj.caption);
};
