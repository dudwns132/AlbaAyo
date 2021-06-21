export default {
    User: [
        {
          user_id: 1,
          name: '박영준',
          age: '25',
          created_at: '2021-06-18 11:42:11'
        },
        {
          user_id: 2,
          name: '조승완',
          age: '24',
          created_at: '2021-06-18 11:42:11'
        },
        {
          user_id: 3,
          name: '최재욱',
          age: '22',
          created_at: '2021-06-18 11:42:11'
        },
        {
          user_id: 4,
          name: '이선제',
          age: '24',
          created_at: '2021-06-18 11:42:11'  
        }
      ],
      Content: [
        {
          content_id: 1,
          user_id: 1,
          title: '게시판 테스트입니다.',
          context: '테스트 중입니다.',
          created_at: '2021-06-18 13:11:42',
          updated_at: null
        },
        {
          content_id: 2,
          user_id: 3,
          title: '아이유 많이 사랑해 주세요',
          context: '화이팅',
          created_at: '2021-06-18 13:11:42',
          updated_at: null
        },
        {
          content_id: 3,
          user_id: 2,
          title: '어서오세요 GS25영진점입니다.',
          context: '^^',
          created_at: '2021-06-18 13:11:42',
          updated_at: null
        }
      ],
      Comment: [
        {
          comment_id: 1,
          user_id: 1,
          content_id: 3,
          context: '잘부탁드립니다',
          created_at: '2021-06-19 14:11:11',
          updated_at: null
        },
        {
          comment_id: 2,
          user_id: 3,
          content_id: 3,
          context: '열심히 해봐요',
          created_at: '2021-06-19 16:11:11',
          updated_at: null
        },
        {
          comment_id: 3,
          user_id: 2,
          content_id: 1,
          context: '고생많으십니다',
          created_at: '2021-06-19 14:11:11',
          updated_at: null
        }
      ],
      SubComment: [
        {
          subcomment_id: 1,
          comment_id: 3,
          user_id: 1,
          context: '감사합니다',
          created_at: '2021-06-19 16:22:11',
          updated_at: null
        }
      ]
}