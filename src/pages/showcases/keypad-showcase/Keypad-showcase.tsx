/* eslint-disable react/no-unescaped-entities */
import { PB_Keypad } from '../../../components/pb-numpad/pb-keypad';

export const Keypad_Showcase = () => {
  return (
    <>
      <h2>PB_Keypad</h2>
      <p>
        The PB_Keypad component displays a virtual keyboard of two kinds.
        Letters and numbers or numbers only. It can display western numerals or
        arabic digits depending of the selected language or the browser default
        through the i18n lib.
      </p>
      <p>
        Available attributes:
        <br />
        <p>
          &nbsp; shuffled: boolean. Takes effect when keypad set to display
          numbers only. If true the digits do not appear in an ordered fashion.
          Default: false.
        </p>
        <p>
          &nbsp; fixedcodelength: boolean. If false the code length is not of a
          fixed length and a submit button appears at the bottom of the keypad.
          Default: true.
        </p>
        <p>
          &nbsp; codelength: number. If fixedcodelength attribute is true,
          determines the code length at which the numpad will automatically
          executes the callback function. Default: 6
        </p>
        <p>
          &nbsp; callbackfunc: the callback function that will be executed by
          the numpad. If none is passed, the callback function console logs the
          input.
        </p>
      </p>
      <h2>
        Css Selectors(changing 'numpad' with 'keypad' in every selector chooses
        between the css for the numpad or the keypad
      </h2>
      <p>
        '.pb-numpad-container' selects the main container of the numpad
        component(div element).
        <p>
          Defaults: <p>&nbsp;width: 400px; </p>
          <p>&nbsp;display: grid;</p>
          <p>
            &nbsp;grid-template-columns: repeat(3, 1fr); (11, 1fr in keypad);
          </p>
          <p>&nbsp;grid-gap:0.5rem; </p>
          <p>&nbsp;border: 1px solid black;</p>
          <p>&nbsp;border-radius: 5px;</p>
        </p>
      </p>
      <p>
        &nbsp;'.pb-numpad-key-container' selects individual container of each
        key(div &nbsp;element).
        <p>&nbsp;Defaults: Default css for div element.</p>
      </p>
      <p>
        &nbsp;'.pb-numpad-key' selects all keyspad keys (button element).
        <p>&nbsp;Defaults: height: 36.5px;</p> <p>&nbsp;width: 100%;</p>
      </p>
      <p>
        &nbsp;'.pb-done-key-container' selects individual done key container(div
        element).
        <p>&nbsp;Defaults: grid-column: 2;</p>
      </p>
      <p>
        &nbsp;'.pb-done-key' selects individual done key butto(button element).
        <p>&nbsp;Default css for button element.</p>
      </p>

      <input type="text" />
      <p>&nbsp;Default setup 'PB_Keypad' </p>
      <PB_Keypad />
      <PB_Keypad fixedcodelength={false} />
      <PB_Keypad numbersOnly />
      <PB_Keypad numbersOnly shuffled />
      <PB_Keypad numbersOnly fixedcodelength={false} />
    </>
  );
};
