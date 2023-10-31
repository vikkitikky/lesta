import React, {useEffect} from 'react';

interface IProps {
  outerRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}

const useClickOutside = (props: IProps) => {
  const {
    onClose,
    outerRef,
  } = props;
  useEffect(() => {
    const useClickOutside = (e: MouseEvent) => {
      const {target} = e;
      if (outerRef.current && !outerRef.current.contains(target as Node)) {
        onClose();
      }
    };

    window.addEventListener('click', useClickOutside, true);

    return () => {
      window.removeEventListener('click', useClickOutside, true);
    };
  }, [onClose, outerRef]);
};

export default useClickOutside;
