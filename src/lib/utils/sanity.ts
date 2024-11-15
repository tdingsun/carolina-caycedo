/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@sanity/client';
import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2024-08-11' // date of setup
});

export async function getAboutPage(): Promise<AboutPage> {
	return await client.fetch(groq`*[_id == "aboutPage"][0]{...,
		coverVideo{..., 'url':asset->url}
	}`)
}

export async function getSplashPage(): Promise<SplashPage> {
	return await client.fetch(
		groq`*[_id == "splashPage"][0]{..., 
			splashVids[]{..., 'url':asset->url},
			splashImgs[]{..., 'originalFilename':asset->originalFilename}
		}`
	)
}

export async function getPortfolioFiles(): Promise<PortfolioFiles> {
	return await client.fetch(
		groq`*[_id == "portfolioFiles"][0]
		{..., 
			portfolioPDF{..., 'url':asset->url, 'originalFilename':asset->originalFilename}, 
			videoPortfolioPDF{..., 'url':asset->url, 'originalFilename':asset->originalFilename}
		}`
	)
}

export interface AboutPage {
	_type: 'aboutPage';
	_id: 'aboutPage';
	aboutPageBlurb?: any;
	coverVideo?: any;
	contactLinks?: Link[];
	coverImage?: any;
	useImage?: boolean;
	useDarkText: boolean;
}

export interface SplashPage {
	_type: 'splashPage';
	_id: 'splashPage';
	splashImgs?: any;
	splashVids?: any;
	useDarkText: boolean;
}

export interface PortfolioFiles {
	_type: 'portfolioFiles';
	_id: 'portfolioFiles';
	portfolioPDF?: any;
	videoPortfolioPDF?: any;
}

export interface Link {
	label: string;
	url: string;
}