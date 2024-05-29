import * as S from "./Calendar.styled";
import { ru } from "date-fns/locale/ru";
import { useContext } from "react";
import { DateContext } from "../../context/dateContext";

function Calendar({value, handleDayClick, dateCalendar, setDateCalendar}) {
    // const {dateCalendar, setDateCalendar} = useContext(DateContext);
    // console.log(dateCalendar);

    return <S.Calendar className="pop-new-card__calendar">
        <S.CalendarTtl>Даты</S.CalendarTtl>
        <S.DayPick onDayClick={handleDayClick} mode="single" selected={dateCalendar} onSelect={setDateCalendar} footer={value} locale={ru} />
    </S.Calendar>;
}
export default Calendar;