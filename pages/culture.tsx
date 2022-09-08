import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
//import main from '../public/videos/main_video.mov'
import man_1 from '../public/images/man_1.svg';
import man_2 from '../public/images/man_2.svg';
import woman_1 from '../public/images/woman_1.svg';
import woman_2 from '../public/images/woman_2.svg';
import woman_3 from '../public/images/woman_3.svg';
import together_1 from '../public/images/together_1.svg';

export const Culture = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: '유비케어 기술 블로그 | CULTURE',
      }}
    >
      {/* <div className="orange-box-1"></div>
      <div className="orange-box-2"></div>
      <div className="orange-box-3"></div>
      <div className="orange-box-4"></div> */}
      {/* <section className="culture video-section">
        <video autoPlay muted loop style={{ "width": '100%',"height":"100%" }}>
          <source src="/videos/main_video.mp4"/>
        </video>
        <div className="video-div">
          <p className="video-p-1">함께 만들어 가는 유비케어</p>
          <p className="video-p-2">임직원이 행복한 유비케어</p>
        </div>
      </section> */}
      <div className="m-auto" style={{width:"1024px"}}>
        <section className="culture section-1">
          <div style={{"position":"relative","display":"flex","alignItems":"center","height":"100%"}}>
            <div style={{"position":"relative","width":"40%","height":"100%"}} className="pt-40">
              <p style={{"fontSize":"50px","fontWeight":"bold","margin":"0"}}>찾았다!!!</p>
              <p style={{"fontSize":"25px","margin":"0"}}>세상이 꿈꾸던 헬스케어</p>
              <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light"}}>유비케어는 올해 30주년을 맞이했어요.</p>
              <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light"}}>보다 더 나은 헬스케어를 만들기 위해</p>
              <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light"}}>전력으로 달려가고 있습니다.</p>
            </div>
            <div style={{"position":"relative","width":"60%","display":"flex"}}>
              <div className="w-6/12">
                <Image src={woman_1} ></Image>
              </div>
              <div className="w-6/12">
                <Image src={man_2} ></Image>
              </div>
            </div>
          </div>
        </section>
        <section className="culture section-2">
          <div style={{"position":"relative","height":"100%","display":"flex"}}>
            <div style={{"position":"absolute","top":"50%","left":"50%","transform":"translate(-50%,-50%)","scale":"0.8"}}>
              <Image src={man_1} ></Image>
            </div>
            <div className='w-6/12' style={{"zIndex":"2"}}>
            <p style={{"fontSize":"50px","fontWeight":"bold","margin":"0","textAlign":"start"}}>ALL FOR</p>
            <p style={{"fontSize":"25px","margin":"0"}}>세상이 꿈꾸던 헬스케어</p>
            <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light"}}>보다 더 나은 헬스케어를 만들기 위해</p>
            </div>
            <div className='w-6/12' style={{"zIndex":"2"}}>
            <p style={{"fontSize":"50px","fontWeight":"bold","margin":"0","textAlign":"end"}}>YOU:Bcare</p>
            <p style={{"fontSize":"25px","margin":"0","textAlign":"end"}}>세상이 꿈꾸던 헬스케어</p>
            <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light","textAlign":"end"}}>보다 더 나은 헬스케어를 만들기 위해</p>
            </div>
          </div>
        </section>
        <section className="culture section-3">
        <div style={{"position":"relative","display":"flex","alignItems":"center","height":"100%"}}>
            <div style={{"position":"relative","width":"60%","display":"flex","height":"100%"}}>
              <div className="w-12/12">
                <Image src={woman_2} ></Image>
              </div>
            </div>
            <div style={{"position":"relative","width":"40%","height":"100%"}} className="pt-40">
              <p style={{"fontSize":"50px","fontWeight":"bold","margin":"0"}}>찾았다!!!</p>
              <p style={{"fontSize":"25px","margin":"0"}}>세상이 꿈꾸던 헬스케어</p>
              <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light"}}>유비케어는 올해 30주년을 맞이했어요.</p>
              <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light"}}>보다 더 나은 헬스케어를 만들기 위해</p>
              <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light"}}>전력으로 달려가고 있습니다.</p>
            </div>
          </div>
        </section>
        <section className="culture section-4">
        <div style={{"position":"relative","display":"flex","alignItems":"center","height":"100%"}}>
            <div style={{"position":"relative","width":"40%","height":"100%"}} className="pt-40">
              <p style={{"fontSize":"50px","fontWeight":"bold","margin":"0"}}>찾았다!!!</p>
              <p style={{"fontSize":"25px","margin":"0"}}>세상이 꿈꾸던 헬스케어</p>
              <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light"}}>유비케어는 올해 30주년을 맞이했어요.</p>
              <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light"}}>보다 더 나은 헬스케어를 만들기 위해</p>
              <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light"}}>전력으로 달려가고 있습니다.</p>
            </div>
            <div style={{"position":"relative","width":"60%","display":"flex","height":"100%","justifyContent":"flex-end","scale":"0.8"}}>
              <div>
                <Image src={woman_3} ></Image>
              </div>
            </div>
          </div>
        </section>
        <section className="culture section-5">
          <div style={{"position":"relative","height":"100%","display":"flex","justifyContent":"center"}}>
              <div style={{"position":"absolute","top":"50%","left":"50%","transform":"translate(-50%,-50%)","scale":"1"}}>
                <Image src={together_1} ></Image>
              </div>
              <div className='pt-20'>
                <p style={{"fontSize":"50px","fontWeight":"bold","margin":"0","textAlign":"start"}}>ALL FOR YOU:Bcare</p>
                <p style={{"fontSize":"25px","margin":"0","textAlign":"center"}}>세상이 꿈꾸던 헬스케어</p>
                <p style={{"fontSize":"16px","margin":"0","fontFamily":"Noto Sans KR Light"}}>보다 더 나은 헬스케어를 만들기 위해</p>
              </div>
            </div>
        </section>
      </div>
    </Layout>
  );
};

export default Culture;
