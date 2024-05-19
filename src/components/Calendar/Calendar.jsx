// import { ru } from "date-fns/locale";
import { useState } from "react";
import * as S from "./Calendar.styled";
import { ru } from "date-fns/locale/ru";

function Calendar({date, setDate}) {
    const [value, setValue] = useState(<S.TitleDayPicker>Выберите срок исполнения.</S.TitleDayPicker>);

    const formatDate = date.toLocaleDateString("RU-ru");

    const handleDayClick = (day) => {
        setValue(<S.TitleDayPicker>Срок исполнения: <S.SpanDayPicker>{formatDate}</S.SpanDayPicker></S.TitleDayPicker>);
    }

    return <S.Calendar className="pop-new-card__calendar">
    <S.CalendarTtl>Даты</S.CalendarTtl>
    <S.DayPick onDayClick={handleDayClick} mode="single" selected={date} onSelect={setDate} footer={value} locale={ru} />								
    {/* <S.CalendarBlock>
        <S.CalendarNav>
            <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
            <S.NavActions>
                <S.NavAction data-action="prev">
                    <S.NavActionSvg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                        <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                    </S.NavActionSvg>
                </S.NavAction>
                <S.NavAction data-action="next">
                    <S.NavActionSvg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                        <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                    </S.NavActionSvg>
                </S.NavAction>
            </S.NavActions>
        </S.CalendarNav>
        <S.CalendarContent>
            <S.CalendarDaysNames>
                <S.CalendarDayName>пн</S.CalendarDayName>
                <S.CalendarDayName>вт</S.CalendarDayName>
                <S.CalendarDayName>ср</S.CalendarDayName>
                <S.CalendarDayName>чт</S.CalendarDayName>
                <S.CalendarDayName>пт</S.CalendarDayName>
                <S.CalendarDayName className="-weekend-">сб</S.CalendarDayName>
                <S.CalendarDayName className="-weekend-">вс</S.CalendarDayName>
            </S.CalendarDaysNames>
            <S.CalendarCells>
                <S.OtherMonth>28</S.OtherMonth>
                <S.OtherMonth>29</S.OtherMonth>
                <S.OtherMonth>30</S.OtherMonth>
                <S.CellDay >31</S.CellDay>
                <S.CellDay>1</S.CellDay>
                <S.CellDay className="_weekend">2</S.CellDay>
                <S.CellDay className="_weekend">3</S.CellDay>
                <S.CellDay>4</S.CellDay>
                <S.CellDay>5</S.CellDay>
                <S.CellDay>6</S.CellDay>
                <S.CellDay>7</S.CellDay>
                <S.Current>8</S.Current>
                <S.CellDay className="_weekend">9</S.CellDay>
                <S.CellDay className="_weekend">10</S.CellDay>
                <S.CellDay>11</S.CellDay>
                <S.CellDay>12</S.CellDay>
                <S.CellDay>13</S.CellDay>
                <S.CellDay>14</S.CellDay>
                <S.CellDay>15</S.CellDay>
                <S.CellDay className="_weekend">16</S.CellDay>
                <S.CellDay className="_weekend">17</S.CellDay>
                <S.CellDay>18</S.CellDay>
                <S.CellDay>19</S.CellDay>
                <S.CellDay>20</S.CellDay>
                <S.CellDay>21</S.CellDay>
                <S.CellDay>22</S.CellDay>
                <S.CellDay className="_weekend">23</S.CellDay>
                <S.CellDay className="_weekend">24</S.CellDay>
                <S.CellDay>25</S.CellDay>
                <S.CellDay>26</S.CellDay>
                <S.CellDay>27</S.CellDay>
                <S.CellDay>28</S.CellDay>
                <S.CellDay>29</S.CellDay>
                <S.CellDay className="_weekend">30</S.CellDay>
                <S.OtherMonth className="_weekend">1</S.OtherMonth>
            </S.CalendarCells>
        </S.CalendarContent>
        
        <input type="hidden" id="datepick_value" value="08.09.2023"/>
        <S.CalendarPeriod>
            <S.CalendarP className="date-end">Выберите срок исполнения <S.CalendarPSpan className="date-control"></S.CalendarPSpan>.</S.CalendarP>
        </S.CalendarPeriod>
    </S.CalendarBlock> */}
</S.Calendar>;
}
export default Calendar;