import { clarity } from "clarity-js";
import { functionalCookiesEnabledAtom } from './local-storage';

if (functionalCookiesEnabledAtom.get()) {
    clarity.consent();
    clarity.start({
        projectId: "h720d1oanw",
        upload: "https://m.clarity.ms/collect",
        track: true,
        content: true
    });
    console.info("Since functional cookies are enabled, Microsoft Clarity has been enabled.")
}
else {
    console.info("Since functional cookies are disabled, Microsoft Clarity has not been enabled.")
}

functionalCookiesEnabledAtom.subscribe(value => {
    if (value) {
        clarity.consent();
        clarity.start({
            projectId: "h720d1oanw",
            upload: "https://m.clarity.ms/collect",
            track: true,
            content: true
        });
        console.info("Since functional cookies are enabled, Microsoft Clarity has been enabled.")
    } else {
        clarity.stop();
    }
});