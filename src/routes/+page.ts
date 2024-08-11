import { getSplashPage } from "$lib/utils/sanity";
import type { PageLoad } from './$types';
export const load = ( async () => {
    const splashPage = await getSplashPage();
    return {
        splashPage
    };
}) satisfies PageLoad;