/**
 * 인덱스드 엑서스 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];


function printAuthorInfo(author: PostList[number]["author"]) { // 익덱스드 엑서드 타입
  console.log(`${author.name}-${author.id}`);

}

const num = 0

const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  }
}

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Typ0 = Tup[0];
type Typ1 = Tup[1];
type Typ2 = Tup[2];
// type Typ3 = Tup[3];
type TupNum = Tup[number];

