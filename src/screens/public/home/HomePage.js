import React, { useState } from 'react'
import * as S from './styled'
import Lottie from 'react-lottie'
import animationData from '../../../animation/animation.json' //animação



function HomePage() {
    window.document.title = "LabeX | Home"
    //animação
    const [animationState] = useState({
        isStopped: false, isPaused: false
    })

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }


    return (
        <S.HomeContainer>
            <S.AnimationContainer>
                <Lottie options={defaultOptions}
                    height={250}
                    width={250}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}
                />
            </S.AnimationContainer>
            <S.Message>Embarque conosco nessa aventura!</S.Message>
        </S.HomeContainer>
    )
}
export default HomePage