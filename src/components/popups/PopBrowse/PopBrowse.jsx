import { paths } from "../../../paths";
import Calendar from "../../Calendar/Calendar";
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from "react";
import * as S from "./popBrowse.styled";
import { CategoriesP, CategoriesTheme } from "../PopNewCard/popNewCard.styled";
import { CardsContext } from "../../../context/cardContext";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
// import { deleteTasks } from "../../../api/cardsApi";

function PopBrowse() {
    const [date, setDate] = useState(new Date());
    const {tasks, setTasks} = useContext(CardsContext);
    // const {user, setUser} = useContext(UserContext);
    // const navigate = useNavigate();
    const {id} = useParams();
    const tasksCard = tasks.find((task) => task._id === id);
    console.log(tasksCard);

    
    // console.log(id);
    // console.log(tasks);
    // console.log(tasks[0]);

    // const deleteCards = () => {
    //     deleteTasks({token: user.token, id}).then((data) => {
    //         console.log(data);
    //         setTasks(res.tasks);
    //         navigate(paths.HOME)
    //     })
    // }

    return <S.PopBrowse id="popBrowse">
    <S.PopBrowseContainer>
        <S.PopBrowseBlock>
            <S.PopBrowseContent>
                <S.PopBrowseTopBlock>
                    <S.PopBrowseTtl>{tasksCard.title}</S.PopBrowseTtl>
                    <S.ThemeTop><CategoriesTheme className="_orange _active-category">
                        <p className="_orange">Web Design</p>
                    </CategoriesTheme></S.ThemeTop>
                </S.PopBrowseTopBlock>
                <S.Status>
                    <S.StatusP>Статус</S.StatusP>
                    <S.StatusThemes>
                    <S.Hide><S.StatusTheme>
                            <S.StatusThemeP>Без статуса</S.StatusThemeP>
                        </S.StatusTheme></S.Hide>
                        <S.Hide><S.StatusTheme className="_gray">
                            <S.StatusThemeP className="_gray">Нужно сделать</S.StatusThemeP>
                        </S.StatusTheme></S.Hide>
                        <S.Hide><S.StatusTheme>
                            <S.StatusThemeP>В работе</S.StatusThemeP>
                        </S.StatusTheme></S.Hide>
                        <S.Hide><S.StatusTheme>
                            <S.StatusThemeP>Тестирование</S.StatusThemeP>
                        </S.StatusTheme></S.Hide>
                        <S.Hide><S.StatusTheme>
                            <S.StatusThemeP>Готово</S.StatusThemeP>
                        </S.StatusTheme></S.Hide>
                    </S.StatusThemes>
                </S.Status>
                <S.PopBrowseWrap>
                    <S.PopBrowseForm id="formBrowseCard" action="#">									
                        <S.PopBrowseBlock>
                            <S.PopBrowseSubttl htmlFor="textArea01">Описание задачи</S.PopBrowseSubttl>
                            <S.FormBrowseArea name="text" id="textArea01"  readOnly placeholder="Введите описание задачи...">{tasksCard.description}</S.FormBrowseArea>
                        </S.PopBrowseBlock>
                    </S.PopBrowseForm>
                    <Calendar date={date} setDate={setDate}/>
                </S.PopBrowseWrap>
                <S.ThemeDown>
                    <CategoriesP>Категория</CategoriesP>
                    <CategoriesTheme className="_orange _active-category">
                        <p className="_orange">Web Design</p>
                    </CategoriesTheme>
                </S.ThemeDown>
                <S.Show><S.PopBrowseBtnBrowse>
                    <S.BtnGroup>
                        <S.BtnBor $onClick className="btn-browse__edit"><S.BtnBorA href="#">Редактировать задачу</S.BtnBorA></S.BtnBor>
                        <S.BtnBor className="btn-browse__delete"><S.BtnBorA href="#">Удалить задачу</S.BtnBorA></S.BtnBor>
                    </S.BtnGroup>
                    <S.BtnBg className="btn-browse__close"><S.LinkBtnBgA to={paths.HOME}>Закрыть</S.LinkBtnBgA></S.BtnBg>
                </S.PopBrowseBtnBrowse></S.Show>
                <S.Hide><S.PopBrowseBtnEdit>
                    <S.BtnGroup>
                        <S.BtnBg className="btn-edit__edit"><S.BtnBgA>Сохранить</S.BtnBgA></S.BtnBg>
                        <S.BtnBor className="btn-edit__edit"><S.BtnBorA href="#">Отменить</S.BtnBorA></S.BtnBor>
                        <S.BtnBor className="btn-edit__delete" id="btnDelete"><S.BtnBorA href="#">Удалить задачу</S.BtnBorA></S.BtnBor>
                    </S.BtnGroup>
                    <S.BtnBg className="btn-edit__close"><S.BtnBgA href="#">Закрыть</S.BtnBgA></S.BtnBg>
                </S.PopBrowseBtnEdit></S.Hide>
                                        
            </S.PopBrowseContent>
        </S.PopBrowseBlock>
    </S.PopBrowseContainer>
</S.PopBrowse>;
}

export default PopBrowse;