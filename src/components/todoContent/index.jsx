import React from "react";
import {
  TodoListTitle,
  TodoListTitleContet,
  TodoListBoard,
  Topsection,
  BottomSection,
  TodoListMonth,
  TodoListMon,
  TodoListTue,
  TodoListWed,
  TodoListFri,
  TodoListSat,
  TodoListSun,
  TodoListWeek,
  TodoListThu,
  TodoListDate,
  TodoListDateBox,
  Redcolor,
} from "./styles";

const TodoContentBox = () => {
  return (
    <>
      <Topsection>
        <TodoListTitle>
          <div></div>
          <TodoListTitleContet>
            <div>TodoList를 작성하고 관리해보세요</div>
            <div>나의 오늘 할 일을 정리하고 관리할 수 있습니다</div>
          </TodoListTitleContet>
        </TodoListTitle>
      </Topsection>
      <BottomSection>
        <TodoListBoard />
        <TodoListBoard>
          <TodoListMonth>4월</TodoListMonth>
          <TodoListWeek>
            <TodoListSun>일</TodoListSun>
            <TodoListMon>월</TodoListMon>
            <TodoListTue>화</TodoListTue>
            <TodoListWed>수</TodoListWed>
            <TodoListThu>목</TodoListThu>
            <TodoListFri>금</TodoListFri>
            <TodoListSat>토</TodoListSat>
          </TodoListWeek>
          <TodoListDateBox>
            <TodoListDate>
              <Redcolor>31</Redcolor>
            </TodoListDate>
            <TodoListDate>1</TodoListDate>
            <TodoListDate>2</TodoListDate>
            <TodoListDate>3</TodoListDate>
            <TodoListDate>4</TodoListDate>
            <TodoListDate>5</TodoListDate>
            <TodoListDate>6</TodoListDate>
            <TodoListDate>
              <Redcolor>7</Redcolor>
            </TodoListDate>
            <TodoListDate>8</TodoListDate>
            <TodoListDate>9</TodoListDate>
            <TodoListDate>10</TodoListDate>
            <TodoListDate>11</TodoListDate>
            <TodoListDate>12</TodoListDate>
            <TodoListDate>13</TodoListDate>
            <TodoListDate>
              <Redcolor>14</Redcolor>
            </TodoListDate>
            <TodoListDate>15</TodoListDate>
            <TodoListDate>16</TodoListDate>
            <TodoListDate>17</TodoListDate>
            <TodoListDate>18</TodoListDate>
            <TodoListDate>19</TodoListDate>
            <TodoListDate>20</TodoListDate>
            <TodoListDate>
              <Redcolor>21</Redcolor>
            </TodoListDate>
            <TodoListDate>22</TodoListDate>
            <TodoListDate>23</TodoListDate>
            <TodoListDate>24</TodoListDate>
            <TodoListDate>25</TodoListDate>
            <TodoListDate>26</TodoListDate>
            <TodoListDate>27</TodoListDate>
            <TodoListDate>
              <Redcolor>28</Redcolor>
            </TodoListDate>
            <TodoListDate>29</TodoListDate>
            <TodoListDate>30</TodoListDate>
            <TodoListDate>1</TodoListDate>
            <TodoListDate>2</TodoListDate>
            <TodoListDate>3</TodoListDate>
            <TodoListDate>4</TodoListDate>
          </TodoListDateBox>
        </TodoListBoard>
      </BottomSection>
    </>
  );
};

export default TodoContentBox;
