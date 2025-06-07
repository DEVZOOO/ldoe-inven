/**
 * Admin 항목관리 - 몹
 */

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminItemsCretures() {
  return (
    <>
      {/* title */}
      <h1>조회</h1>
      {/* 검색 */}
      <div className="flex gap-s">
        <div>
          <input type="text"></input>
        </div>
        <div>
          <select>
            <option value="updDt">수정날짜</option>
          </select>
          <button type="button">
            <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      {/* 리스트 */}
      <div>
        <table className="table w-full">
          <colgroup>
            <col style={{ width: "15%" }}></col>
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>이미지</th>
              <th>이름</th>
              <th>체력</th>
              <th>데미지</th>
              <th>방어력</th>
              <th>수정날짜</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
}
