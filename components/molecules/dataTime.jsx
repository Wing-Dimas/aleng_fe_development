import { CalendarEvent, Clock2 } from 'tabler-icons-react';
import { useState } from 'react';
import moment from 'moment';

export default function DateTime({ pages, type }) {
  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate());
  const [date, setDate] = useState(defaultDate);
  const onSetDate = (event) => {
    setDate(new Date(event.target.value));
  };

  const [time, setTime] = useState(defaultDate);
  const onSetTime = (event) => {
    setTime(event.target.value);
  };
  console.log(type);
  return (
    <div>
      {type === 'date' ? (
        <div
          className={` flex relative flex-row items-center justify-start  gap-1 w-full   ${
            pages == 'kuliner' || pages == 'wisata'
              ? 'md:justify-start'
              : 'md:justify-center'
          } `}
        >
          <CalendarEvent size={24} strokeWidth={2} color={'#615A56'} />
          <input
            type="date"
            className="bg-transparent cursor-pointer md:w-[5.5rem] md:min-w-[4.5rem]   md:text-center  font-medium  text-xs text-black"
            value={date.toLocaleDateString('en-CA')}
            onChange={onSetDate}
          />
          <img
            src="/icons/arrow-down.png"
            className={`relative top-[2px] hidden ${
              pages == 'kuliner' || pages == 'wisata' ? 'md:hidden' : 'md:flex'
            }`}
          />
        </div>
      ) : (
        <div
          className={`flex relative flex-row items-center justify-start  gap-1 w-full  ${
            pages == 'kuliner' || pages == 'wisata'
              ? 'md:justify-start'
              : 'md:justify-center'
          } `}
        >
          <Clock2 size={24} strokeWidth={2} color={'#615A56'} />
          <input
            type="time"
            className="bg-transparent cursor-pointer   md:text-center  font-medium text-sm md:text-xs text-black"
            onChange={onSetTime}
            defaultValue="07:00"
          />
          <img
            src="/icons/arrow-down.png"
            className={`relative top-[2px] hidden ${
              pages == 'kuliner' || pages == 'wisata' ? 'md:hidden' : 'md:flex'
            }`}
          />
        </div>
      )}
    </div>
  );
}
