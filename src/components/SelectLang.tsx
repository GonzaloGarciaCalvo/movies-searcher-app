import { setLang } from '../features/lang';
import Dropdown from 'react-bootstrap/Dropdown';
import { useCommonHooks } from './hooks/useCommonHooks';

export function SelectLang() {

  const {lang, dispatch} = useCommonHooks()


  return (
    <Dropdown className='langSelect' >
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {lang === "es" ? "Esp" : "En"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => dispatch(setLang("en"))}>
          En
        </Dropdown.Item>
        <Dropdown.Item onClick={() => dispatch(setLang("es"))}>
          Esp
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

