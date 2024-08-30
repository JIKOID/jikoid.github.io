const parsedCategories = (category) => {
    let parsed_category;

    /**
     * category: category name
     * parsed_category: parsed category name
     * 
     * algorithm: 알고리즘
     * - concept: 개념정리
     * - programmers: 프로그래머스
     * blog: 블로그
     * jaylog: 제이로그
     * - interview: 면접후기
     * - retrospective: 회고
     * programming-language: 프로그래밍 언어
     * books: 도서
     */

    switch (category) {
        case 'algorithm':
            parsed_category = '알고리즘';
            break;
        case 'programmers':
            parsed_category = '프로그래머스';
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
        case 'programming-language':
            parsed_category = '프로그래밍 언어';
            break;
        case 'books':
            parsed_category = '도서'; 
            break;
        case 'data-engineering':
            parsed_category = '데이터 엔지니어링';
            break;
        default:
            parsed_category = category;
            break;
    }
    return parsed_category;
};

export default parsedCategories;