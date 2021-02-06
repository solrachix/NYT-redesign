import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  width: 100%;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  `

export const Upside = styled.div`${({ theme }) => css`
  width: 100%;
  padding-bottom: 10px;
  /* padding: 10px 20px; */
  
  border-bottom: 2px solid ${rgba(theme.colors.themeColors.text, 0.1)};

  display: grid;
  grid-template-columns: 1.6fr 6.8fr 1.6fr;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    column-gap: .8rem;
  }

  img {
    width: 100%;
  }

  .searchBox {
    button {
      min-width: fit-content;
      width: 100px;
      padding: 0.4rem;

      background: transparent;
      color: ${theme.colors.themeColors.text};
      border: 1px solid  ${theme.colors.themeColors.text};
      border-radius: 0.2em;

      font-weight: 800;
      cursor: pointer;

      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    form {
      input {
        width: 15px;
        padding: 0.36rem 10px;
        
        background: ${theme.colors.themeColors.background} url('https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png') no-repeat 9px center;
        border: solid 1px ${rgba(theme.colors.themeColors.text, 0.2)};
        border-radius: 0.2em;
        
        transition: all .5s;

        cursor: pointer;

        &, &:-webkit-input-placeholder {
          color: transparent;
        }
        &:focus {
          width: 130px;
          padding-left: 32px;

          color: ${theme.colors.themeColors.text};
          /* border-color:${theme.colors.themeColors.primary}; */
          box-shadow: 0 0 5px rgba(109,207,246,.5);

          cursor: auto;
        }

        &:focus ~ &::-webkit-input-placeholder {
          color:  ${rgba(theme.colors.themeColors.text, 0.8)};
        }

        &:hover {
          background-color: #fff;
        }

      }

    }
  }

  .main{
    width: 100%;
    list-style: none;


    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;

    li {
      /* width: 6rem; */
      width: fit-content;

      font-size: .8rem;
      font-weight: 500;
      text-align: center;

      color: ${theme.colors.themeColors.text};
      &.actived {
        color: ${rgba(theme.colors.themeColors.text, 0.4)};
      }

      cursor: pointer;
      transition: 1s;

      display: flex;
      justify-content: center;
      align-items: center;
      
      svg {
        margin-right: .4rem;
        
        color: ${rgba(theme.colors.themeColors.text, 0.4)};
      }


      &.title p {
        font-size: 3rem;
        font-weight: bold;
        font-family: 'Chomsky'!important;

        color: ${theme.colors.themeColors.text};
      }
    }
  }

  .user {
    .avatar {
      width: 2rem;
      height: 2rem;
      
      border-radius: 50%;
    }
  }

`}`

export const NavBar = styled.ul`${({ theme }) => css`
  width: 100%;
  height: 40px;

  list-style: none;
  
  font-size: .8rem;
  color: ${rgba(theme.colors.themeColors.text, 0.4)};
  border-bottom: 1px solid ${theme.colors.themeColors.text};

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;

`}`
