import React, { useRef, useEffect, useState } from 'react'

import { HiMenuAlt4 } from 'react-icons/hi'
import { IoMdPaper, IoIosVideocam, IoIosRainy } from 'react-icons/io'
import { FaTemperatureLow } from 'react-icons/fa'

import Text from '../../components/Text'
import Logo from '../../assets/logo.png'
import highlighter from '../../assets/highlighter.svg'
import { Container, Upside, NavBar } from './styles'

const Tabs = [
  {
    name: 'World',
    to: '/'
  },
  {
    name: 'U.S',
    to: '/Store'
  },
  {
    name: 'N.Y',
    to: '/Blog'
  },
  {
    name: 'Business',
    to: '/Gallery'
  },
  {
    name: 'Opinion',
    to: '/'
  },
  {
    name: 'Tech',
    to: '/'
  },
  {
    name: 'Science',
    to: '/'
  },
  {
    name: 'Heath',
    to: '/Sports'
  },
  {
    name: 'Arts',
    to: '/'
  },
  {
    name: 'Style',
    to: '/'
  },
  {
    name: 'Food',
    to: '/'
  },
  {
    name: 'Travel',
    to: '/'
  },
  {
    name: 'Magazine',
    to: '/'
  },
  {
    name: 'TMagazine',
    to: '/'
  },
  {
    name: 'All',
    to: '/'
  }
]
const Header: React.FC = () => {
  const highlighterRef = useRef<HTMLImageElement>(null)
  const [openTab, setOpenTab] = useState(0)

  return (
    <Container>
      <Upside>
        <div className="searchBox">
          <button type="button">
            <HiMenuAlt4 size={14} />
            sections
          </button>
          <form>
            <input type="search" placeholder="Search" />
          </form>
        </div>

        <ul className="main">

          <li>
            <IoMdPaper size={14} />
            Today&apos;s Papers
          </li>
          <li>
            <IoIosVideocam size={14} />
            Video
          </li>
          <li className="title">
            <Text size={4}>
              The New York Times
            </Text>
          </li>
          <li>
            <FaTemperatureLow size={14} />
            25ºF
          </li>
          <li>
            <IoIosRainy size={14} />
            25ºF
          </li>

        </ul>

        <div className="user">

          <img className="avatar" src="https://avatars.githubusercontent.com/u/57706806?s=460&u=d99f75dd759767691aecc7463b92fa022a4b01ee&v=4" />
        </div>
      </Upside>

      <NavBar>
        {
          Tabs.map((tab, index) => (
            <li key={index}>
              {tab.name}
            </li>
          ))
        }
      </NavBar>
    </Container>
  )
}

export default Header
