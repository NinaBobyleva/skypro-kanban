import { Wrapper } from "../../globalStyle.styled";
import { Link } from "react-router-dom";
import { paths } from "../../paths";

export function NotFoundPage() {
    return (
        <Wrapper>
            <h1>404</h1>
            <h2>NOT FOUND</h2>
            <button><Link to={paths.HOME}>Вернуться на главную страницу</Link></button>
        </Wrapper>
    )
}