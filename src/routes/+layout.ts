import { getPortfolioFiles } from "$lib/utils/sanity";
import type { LayoutLoad } from './$types';
export const load = ( async () => {
    const portfolioFiles = await getPortfolioFiles();
    return {
        portfolioFiles
    };
}) satisfies LayoutLoad;

export const prerender = true;