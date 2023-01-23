import {useContext, React} from "react";
import "./Pagination.css";
import { FcPrevious , FcNext } from 'react-icons/fc';
import { DataContext } from "../../context/DataContext";

export function Pagination() {

  const {onPrevious, onNext, infoPrev, infoNext} = useContext(DataContext)

  return (
    <nav className="pagination">
      <ul className="pagination__buttons">
        {infoPrev ? (
          <li className="pagination__item">
            <button className="pagination__button" onClick={onPrevious}>
            <FcPrevious />
            </button>
          </li>
        ) : null}

        {infoNext ? (
          <li className="pagination__item">
            <button className="pagination__button" onClick={onNext}>
              <FcNext />
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
  
}
