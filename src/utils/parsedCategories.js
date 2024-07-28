const parsedCategories = (category) => {
    let parsed_category;

    /**
     * category: category name
     * parsed_category: parsed category name
     * 
     * algorithm: 알고리즘
     * - concept: 개념정리
     * blog: 블로그
     * jaylog: 제이로그
     * - interview: 면접후기
     * - retrospective: 회고
     */

    switch (category) {
        case 'algorithm':
            parsed_category = '알고리즘';
            break;
        case 'concept':
            parsed_category = '개념정리';
            break;
        case 'blog':
            parsed_category = '블로그';
            break;
        case 'jaylog':
            parsed_category = '제이로그';
            break;
        case 'interview':
            parsed_category = '면접후기';
            break;
        case 'retrospective':
            parsed_category = '회고';
            break;
        default:
            parsed_category = category;
            break;
    }
    return parsed_category;
};

export default parsedCategories;