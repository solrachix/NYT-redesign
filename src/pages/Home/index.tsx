import React from 'react'
import { useTheme } from 'styled-components'

import VideoPlayer from '../../components/VideoPlayer'
import Button from '../../components/Button'
import Text from '../../components/Text'
import { Container } from './styles'

import video from '../../assets/video1.mp4'
import videoBackground from '../../assets/video-background.png'
import QuestionsFrequent from './../../components/QuestionsFrequent/index'

const bonus = [
  {
    title: 'Os 5 Cartões de Créditos que são mais Fáceis de Serem Aprovados!',
    src: 'https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png'
  },
  {
    title: 'Os 5 Cartões de Créditos que são mais Fáceis de Serem Aprovados!',
    src: 'https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png'
  },
  {
    title: 'Os 5 Cartões de Créditos que são mais Fáceis de Serem Aprovados!',
    src: 'https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png'
  },
  {
    title: 'Os 5 Cartões de Créditos que são mais Fáceis de Serem Aprovados!',
    src: 'https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png'
  }
]
const Home: React.FC = () => {
  const theme = useTheme().colors.themeColors
  // const videoJsOptions = {
  //   autoplay: false,
  //   controls: true,
  //   sources: [{
  //     src: teste.urlVideo,
  //     type: 'video/mp4'
  //   }],
  //   responsive: true
  // }

  return (
    <Container>

      {/* <VideoPlayer
        videoJsOptions={videoJsOptions}
        // width={640}
        // height={320}
        poster={teste.poster}
      /> */}

    </Container>
  )
}

export default Home
