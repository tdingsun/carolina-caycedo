import { getAboutPage } from "$lib/utils/sanity";
import type { PageLoad } from './$types';
export const load = ( async () => {
    const aboutPage = await getAboutPage();
    return {
        aboutPage
    };
}) satisfies PageLoad;