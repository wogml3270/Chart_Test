import React from 'react'

const sidemenu = () => {
  const sideMenuList = [
    { idx: 1, name: '홈' },
    { idx: 2, name: '초대하기' },
    { idx: 3, name: '사범 관리' },
    { idx: 4, name: '원생 관리' },
    { idx: 5, name: '출결 관리' },
    { idx: 6, name: '반 관리' },
    { idx: 7, name: '승급 관리' },
    { idx: 8, name: '단증 관리' },
    { idx: 9, name: '납부 관리' },
    { idx: 10, name: '공지' },
    { idx: 11, name: '일정표' },
    { idx: 12, name: 'SMS' },
    { idx: 13, name: '초대장 관리' },
  ]

  // const listStyle = document.querySelectorAll('.side-menu div span:first-child');

  // for(let i = 1; i < listStyle.length; i++) {
  //   const imgURL = `./components/images/side/list${i}.png`;

  //   listStyle[i].style.backgroundImage = `url(${imgURL})`;

  //   console.log(listStyle[i].style.backgroundImage);
  // }

  return (
    <div className="side-container">

      <div className="side-profile">
        <div className="side-profile-img">
          <img src="https://via.placeholder.com/150" alt="profile" />
          <p>조재윤 관장님</p>
        </div>
        <div className="side-profile-btn">
          <button>버튼</button>
        </div>
      </div>
      <div className="side-menu">
        {sideMenuList.map((list) => {
          return(
            <>
            <div>
              <span style={{backgroundImage: `url('https://tkdw-img.s3.ap-northeast-2.amazonaws.com/side_menu/list${list.idx}.png')`}}></span>
              <span>{list.name}</span>
            </div>
            </>
          )
        })}
      </div>

    </div>
  )
}

export default sidemenu