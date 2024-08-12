export const CPTUrls = {
    auth1: 'https://firebasestorage.googleapis.com/v0/b/portfolio-f00fa.appspot.com/o/CPT%2Fimage%2Fbasic%2Fauth%2Fauth_1.png?alt=media&token=5c415823-a00a-4baf-8b05-eb2ebf1d01cf',
    auth2: 'https://firebasestorage.googleapis.com/v0/b/portfolio-f00fa.appspot.com/o/CPT%2Fimage%2Fbasic%2Fauth%2Fauth_2.png?alt=media&token=97ce8029-4fc1-426b-b8a4-6dad379e352a',
    auth3: 'https://firebasestorage.googleapis.com/v0/b/portfolio-f00fa.appspot.com/o/CPT%2Fimage%2Fbasic%2Fauth%2Fauth_3.png?alt=media&token=5d6028b3-a008-4453-b93d-75879fca5c01',
};

export const LoadCPTImages = async (CPTUrls) => {
    const imageKeys = Object.keys(CPTUrls); // CPTUrls 객체의 키를 배열로 추출
    const imageLoadPromises = imageKeys.map((key) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve({ key, img }); // 로드 성공 시, 키와 이미지 객체를 반환
            };
            img.onerror = reject; // 로드 실패 시, 에러를 반환
            img.src = CPTUrls[key]; // 이미지 소스 설정
        });
    });

    try {
        const results = await Promise.all(imageLoadPromises); // 모든 이미지 로드 Promise를 병렬로 처리
        const images = {};
        results.forEach((result) => {
            images[result.key] = result.img;
        });
        console.log(images);
        return images;
    } catch (error) {
        console.error('Failed to load images', error);
        throw error;
    }
};
