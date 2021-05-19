import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import LoginForm from './LoginForm'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalLoginWrapper = styled.div`
  width: 900px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
const ModalLoginImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;


const ModalLoginContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

const CloseModalLoginButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const ModalLogin = ({props, showModalLogin, setShowModalLogin }) => {
  const ModalLoginRef = useRef();

  console.log(props)

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModalLogin ? 1 : 0,
    transform: showModalLogin ? `translateY(-50%)` : `translateY(-100%)`
  });

  const closeModalLogin = e => {
    if (ModalLoginRef.current === e.target) {
      setShowModalLogin(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModalLogin) {
        setShowModalLogin(false);
        console.log('I pressed');
      }
    },
    [setShowModalLogin, showModalLogin]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModalLogin ? (
        <Background onClick={closeModalLogin} ref={ModalLoginRef}>
          <animated.div style={animation}>
            <ModalLoginWrapper showModalLogin={showModalLogin}>
              <ModalLoginImg src={'/janj-logo.png'} alt='logo' />
              <ModalLoginContent>
                <LoginForm {...props}/>
              </ModalLoginContent>
              <CloseModalLoginButton
                aria-label='Close ModalLogin'
                onClick={() => setShowModalLogin(prev => !prev)}
              />
            </ModalLoginWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
