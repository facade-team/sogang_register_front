<<<<<<< HEAD
import react, { useState, useEffect } from 'react';
import { BookmarkCheckFill } from '@styled-icons/bootstrap/BookmarkCheckFill';
import { Bookmark } from '@styled-icons/bootstrap/Bookmark';

=======
>>>>>>> 12fe5493ba4c0b685e60846e5988d1ea8b0e1752
//components
import GradationBtn from '../GradationBtn/GradationBtn';
import { Tag, TagContainer } from '../Card/Card.element';

//styled
import {
  DetailbarComponent,
  DetailbarContent,
  StackContent,
  DetailContainer,
  SubjectName,
  SubjectTable,
  TableBody,
  TableRow,
  TableHead,
  TableData,
  OptionBtnContainer,
  FavoriteBtn,
  SubejctList,
  Subject,
  SubjectNameInList,
  Detail,
  P,
  Divider,
} from './DetailBar.element';

const DetailBar = ({ width, openModal, subject }) => {
  //최근 본과목 -> true, 즐겨찾기 -> false
  const [latestAndFavoritesToggle, setLatestAndFavoritesToggle] =
    useState(true);
  const [latestList, setLatestList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [checkBookmark, setCheckBookmark] = useState(false);

  useEffect(() => {
    const existInFavoriteList = favoriteList.find(
      (favorite) => favorite.subject_id === subject.subject_id
    );

    existInFavoriteList ? setCheckBookmark(true) : setCheckBookmark(false);
  }, [subject]);

  useEffect(() => {
    const existInFavoriteList = favoriteList.find(
      (favorite) => favorite.subject_id === subject.subject_id
    );

    existInFavoriteList ? setCheckBookmark(true) : setCheckBookmark(false);
  }, [favoriteList]);

  // useEffect(() => {
  //   console.log(key);
  // }, [key]);

  const toFavorite = () => {
    // 즐겨찾기 버튼 눌렀을 때 해당 과목 즐겨찾기 리스트로 이동. 한 번 더 누르면 즐겨찾기 리스트에서 삭제
    const sub = favoriteList.find((favorite) => {
      return favorite === subject;
    });
    let list = [...favoriteList];

    if (sub === undefined) {
      list = favoriteList.concat(subject);

      if (list.length === 10) {
        list.shift();
      }

      setFavoriteList(list);
    } else {
      const idx = favoriteList.indexOf(sub);
      if (idx > -1) list.splice(idx, 1);
      setFavoriteList(list);
    }
  };

  const switchLatestAndFavorites = (e) => {
    if (e.target.innerText === '최근 본 과목' && !latestAndFavoritesToggle) {
      setLatestAndFavoritesToggle(true);
    } else if (e.target.innerText === '즐겨찾기' && latestAndFavoritesToggle) {
      setLatestAndFavoritesToggle(false);
    }
  };

  return (
    <DetailbarComponent widthPx={width}>
      <DetailContainer>
        <GradationBtn
          width={280}
          onClick={openModal}
          signBtnType={'login'}
          borderRadius={10}
          top={40}
          active
        >
          로그인/회원가입
        </GradationBtn>
        <DetailbarContent>
          {JSON.stringify(subject) === '{}' ? (
            ''
          ) : (
            <>
              <SubjectName font={14}>{subject.과목명}</SubjectName>
              <TagContainer>
                {subject.비대면여부 && <Tag untact>비대면</Tag>}
                {!subject.비대면여부 && <Tag ontact>대면</Tag>}
                {subject.영어강의 && <Tag eng>영어강의</Tag>}
                {subject.중국어강의 && <Tag china>중국어강의</Tag>}
              </TagContainer>
              <SubjectTable>
                <TableBody>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      학과
                    </TableHead>
                    <TableData corner={false}>경영학과</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      과목번호
                    </TableHead>
                    <TableData corner={false}>{subject.subject_id}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      강의계획서
                    </TableHead>
                    <TableData corner={false}>조회하기 클릭</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      학점
                    </TableHead>
                    <TableData corner={false}>{subject.학점}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      강의시간
                    </TableHead>
                    <TableData corner={false}>
                      {subject.수업시간_강의실}
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      교수
                    </TableHead>
                    <TableData corner={false}>{subject.교수진}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      수강대상
                    </TableHead>
                    <TableData corner={false}>전학년</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      권장학년
                    </TableHead>
                    <TableData corner={false}>{subject.권장학년}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={true}>
                      수간신청 참조사항
                    </TableHead>
                    <TableData corner={true}>{subject.비고}</TableData>
                  </TableRow>
                </TableBody>
              </SubjectTable>
              <FavoriteBtn>
                {checkBookmark ? (
                  <BookmarkCheckFill
                    size="20"
                    color="#4414A4"
                    onClick={toFavorite}
                  ></BookmarkCheckFill>
                ) : (
                  <Bookmark
                    size="20"
                    color="#4414A4"
                    onClick={toFavorite}
                  ></Bookmark>
                )}
              </FavoriteBtn>
            </>
          )}
        </DetailbarContent>
        {/* //최근 본 과목, 즐겨찾기 */}
        <StackContent>
          <OptionBtnContainer>
            <GradationBtn
              width={120}
              borderRadius={20}
              active={latestAndFavoritesToggle}
              onClick={switchLatestAndFavorites}
            >
              최근 본 과목
            </GradationBtn>
            <GradationBtn
              width={120}
              borderRadius={20}
              active={!latestAndFavoritesToggle}
              onClick={switchLatestAndFavorites}
            >
              즐겨찾기
            </GradationBtn>
          </OptionBtnContainer>
          <SubejctList>
            {latestAndFavoritesToggle
              ? latestList.map((sub, index) => (
                  <>
                    <Subject key={sub.subject_id}>
                      <SubjectNameInList font={14}>
                        {sub.과목명}
                      </SubjectNameInList>
                      <TagContainer>
                        {sub.비대면여부 && <Tag untact>비대면</Tag>}
                        {!sub.비대면여부 && <Tag ontact>대면</Tag>}
                        {sub.영어강의 && <Tag eng>영어강의</Tag>}
                        {sub.중국어강의 && <Tag china>중국어강의</Tag>}
                      </TagContainer>
                      <Detail>
                        <P text={sub.교수진}>{sub.교수진}</P>
                        <P>{sub.수업시간_강의실}</P>
                      </Detail>
                    </Subject>
                    {index !== favoriteList.length - 1 && <Divider></Divider>}
                  </>
                ))
              : favoriteList.map((sub, index) => (
                  <>
                    <Subject key={sub.subject_id}>
                      <SubjectNameInList font={14}>
                        {sub.과목명}
                      </SubjectNameInList>
                      <TagContainer>
                        {sub.비대면여부 && <Tag untact>비대면</Tag>}
                        {!sub.비대면여부 && <Tag ontact>대면</Tag>}
                        {sub.영어강의 && <Tag eng>영어강의</Tag>}
                        {sub.중국어강의 && <Tag china>중국어강의</Tag>}
                      </TagContainer>
                      <Detail>
                        <P text={sub.교수진}>{sub.교수진}</P>
                        <P>{sub.수업시간_강의실}</P>
                      </Detail>
                    </Subject>
                    {index !== favoriteList.length - 1 && <Divider></Divider>}
                  </>
                ))}
          </SubejctList>
        </StackContent>
      </DetailContainer>
    </DetailbarComponent>
  );
};

export default DetailBar;
