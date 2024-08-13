export const CPTUrls = {
    // store the urls in obj
    auth1: 'https://firebasestorage.googleapis.com/v0/b/portfolio-f00fa.appspot.com/o/CPT%2Fimage%2Fbasic%2Fauth%2Fauth_1.png?alt=media&token=5c415823-a00a-4baf-8b05-eb2ebf1d01cf',
    auth2: 'https://firebasestorage.googleapis.com/v0/b/portfolio-f00fa.appspot.com/o/CPT%2Fimage%2Fbasic%2Fauth%2Fauth_2.png?alt=media&token=97ce8029-4fc1-426b-b8a4-6dad379e352a',
    auth3: 'https://firebasestorage.googleapis.com/v0/b/portfolio-f00fa.appspot.com/o/CPT%2Fimage%2Fbasic%2Fauth%2Fauth_3.png?alt=media&token=5d6028b3-a008-4453-b93d-75879fca5c01',
};

export const LoadCPTImages = async (CPTUrls) => {
    const obj = {};

    const promises = Object.keys(CPTUrls).map(async (key) => {
        // mapping the obj and access to each element
        try {
            const response = await fetch(CPTUrls[key], { mode: 'cors' });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const blob = await response.blob(); // change url to blob
            obj[key] = blob; // restore blob with corresponding key in new object
        } catch (error) {
            console.error(`Failed to fetch ${key}:`, error);
        }
    });

    await Promise.all(promises);
    return obj; // return new key:blob pair object
};
