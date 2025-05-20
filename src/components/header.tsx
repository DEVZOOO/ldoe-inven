import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex justify-between items-center mt-xs gap-s text-salmon">
      <h1 className="flex">LOGO</h1>
      <div className="w-full flex gap-xs">
        <input type="text" className="flex-[1_0_auto]"></input>
        <button type="button">
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </div>
          &nbsp;
        </button>
      </div>
    </header>
  );
}
