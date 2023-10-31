import React from 'react';

interface IProps {
  id: string;
  values: {
    icon?: string;
    color?: string;
    label: string | number;
    value: string | number;
  }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter: React.FC<IProps> = ({
                                    id,
                                    values,
                                    onChange,
                                  }) => {
  return (
    <fieldset id={id} className="filter">
      {values.map((item, i) => (
        <div key={item.value} className="filter__item">
          <input className="filter__checkbox" value={item.value} id={item.value.toString()} type="checkbox"
                 onChange={onChange}/>
          {item.icon ? (
            <>
              <img className="filter__icon" src={item.icon} alt={item.label as string}/>
            </>
          ) : null}

          {item.color ? (
            <div style={{backgroundColor: item.color}} className="filter__color-mark"/>
          ) : null}
          <label className={id === 'level' ? 'filter__label_level' : 'filter__label'}>{item.label}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default Filter;
