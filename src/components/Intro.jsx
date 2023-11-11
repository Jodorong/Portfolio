import React from "react";
import about from "../assets/img/img.png"
const Intro = () => {
  return(
    <section id="intro">
  <div class="intro__inner">
                <h1 class="intro__title">portfolio</h1>
                <div class="intro__lines" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                  
                </div>
                <div class="intro__text">
                    <div class="text">
                        <div>안녕하세요</div>
                        <div>발전중인 개발자</div>
                        <div>조재형입니다.</div>
                    </div>
                    <div class="img">
                        <img src={about} alt="사진" />
                    </div>
                </div>
                <div class="intro__lines bottom" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
            </section>
                 );
          };


export default Intro;