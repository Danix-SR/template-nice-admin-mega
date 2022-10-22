// https://javascript.plainenglish.io/detect-a-click-outside-of-a-react-component-with-a-reusable-hook-and-useref-a0c282171c3f
import { useEffect, useRef, useState } from 'react';

export function useDetectClickOut(): any {
  const [show, setShow] = useState(false);
  const ref = useRef<any>(null);
  const ChangeState = (): void => setShow(!show);

  useEffect(() => {
    const CloseDrowdon = (event: any): void => {
      // console.log(event);
      // console.log(ref);
      // btnRef.current && !btnRef.current.contains(event.target) -> Tiene encuenta todo los hijos
      // event.path[1] !== btnRef.current -> Solo tiene encuenta el Button
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.body.addEventListener('click', CloseDrowdon);
  }, []);

  return { ref, show, ChangeState };
}
