"use client"

import { useState } from "react";

export default function Home() {
  const [mailSrc, setMailSrc] = useState('mail_closed.png');
  const [isYes, setIsYes] = useState(false);
  const [isNoClicked, setIsNoClicked] = useState(false);

  const [sizeX, setSizeX] = useState(5); // Initial size in rem
  const [sizeY, setSizeY] = useState(20); // Initial size in rem

  const noImages = [
    'sad-reactions/sad-cat-2.gif',
    'sad-reactions/sad-cat.jpg',
    'sad-reactions/sad-hamster.gif',
    'sad-reactions/sad-iroh.jpg',
    'sad-reactions/sad-dog.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMailClick = () => {
    setMailSrc((prevSrc) => (prevSrc === 'mail_closed.png' ? 'mail_opened.png' : 'mail_closed.png'));
  }

  const handleNoClick = () => {
    const x = Math.floor(Math.random()*300)+1;
    const y = Math.floor(Math.random()*400)+1;
    setIsNoClicked(true);
    
    const linkElement = document.querySelector('#no');
    linkElement.style.position = 'absolute';
    linkElement.style.right = `${x}px`;
    linkElement.style.bottom = `${y}px`;

    setSizeX((prev) => prev*2);
    setSizeY((prev) => prev*1.5);
    const linkYesElement = document.querySelector('#yes');
    linkYesElement.style.padding = `${sizeX}px ${sizeY}px`;

    setCurrentIndex((prevIndex) => (prevIndex + 1) % noImages.length);
  };

  const handleYes = () => {
    setIsYes(true);
  }

  return (
    <>
    <div>
      { !isYes ?
        <div className="container">
          <div className="mail container">
            <img
              src={mailSrc}
              alt="Mail"
              width={500}
              onClick={handleMailClick}
              className={mailSrc === 'mail_closed.png' ? 'mail-hover' : ''}
              />
            <h1 className="text-4xl sm:text-5xl">
            You've got mail!
            </h1>
          </div>
          <img
          src="heart.png"
          width={200}
          className={`heart ${mailSrc === 'mail_opened.png' ? '' : 'hidden'}`}
          />
          <div className={`form absolute max-w-[800px] text-md p-4 ${mailSrc === 'mail_opened.png' ? 'flex' : 'hidden'}`}>
            <div className="message">
              <h4>Dear, Haven</h4>
              <br />
              <h4>Will you be my valentine?</h4>
              <br />
              <h4>Mattias</h4>
            </div>

            <div className="yesno">
              <a id="yes"
                  onClick={handleYes}
              >
                Yes
              </a>
              <a
                id="no"
                className={`no ${isNoClicked ? 'absolute-position' : ''}`}
                onClick={handleNoClick}>
                No
              </a>
              <a className={` ${isNoClicked ? 'invisible' : 'hidden'}`}>
                No
              </a>
            </div>

            <div className="img-container flex justify-center">
              <img
                src={noImages[currentIndex]}
                alt="Sad Reaction"
                width={200}
                className={`${isNoClicked ? '' : 'invisible'}`}
              />
            </div>
          </div>

        </div>
        :
        <>
        <div className='text-center flex flex-col items-center'>
          <h4>Wooo! See you on Friday!</h4>
          <br />
          <img width={150} src="aang-avatar.gif"/>
          <br />
          <p className={`${isNoClicked ? 'invisible' : ''}`}>
            ps. next time try clicking no
          </p>

        </div>
        </>
      }
    </div>
    </>
  );
}
