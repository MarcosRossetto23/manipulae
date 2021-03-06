import styled from 'styled-components';

type MaskProps = {
  background: string;
};

type PlayerIconProps = {
  icon: boolean;
};

export const Container = styled.div`
  position: relative;
  z-index: 5;
  width: 100vw;
  height: 20vh;
`;

export const Mask = styled.div<MaskProps>`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 16px 16px;
  opacity: 0.2;
`;

export const ContainerDeezer = styled.div`
  display: flex;
  height: 10vh;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px 16px;
`;

export const Deezer = styled.a`
  text-decoration: none;
  background: none;
  outline: none;
  padding: 4px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 24px;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 12px;
`;

export const ContainerPlayer = styled.div`
  display: flex;
  height: 10vh;
  padding: 8px 24px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 16px;
`;

export const PlayerIcon = styled.i.attrs((props: PlayerIconProps) => ({
  className: props.icon ? 'fas fa-pause' : 'fas fa-play',
}))<PlayerIconProps>`
  cursor: pointer;
`;
