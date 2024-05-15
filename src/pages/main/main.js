import React , {useState, useEffect}from 'react'
import { ImgContainer, GameContainer, ImgBox, Round, Game } from './styled'
import p0 from "../../assets/images/ayaka.gif"
import p1 from "../../assets/images/barbara.gif"
import p2 from "../../assets/images/chichi.gif"
import p3 from "../../assets/images/ching.gif"
import p4 from "../../assets/images/chiori.gif"
import p5 from "../../assets/images/clare.gif"
import p6 from "../../assets/images/furina.gif"
import p7 from "../../assets/images/ganyu.gif"
import p8 from "../../assets/images/hutao.gif"
import p9 from "../../assets/images/jin.gif"
import p10 from "../../assets/images/lumine.gif"
import p11 from "../../assets/images/miko.gif"
import p12 from "../../assets/images/nahida.gif"
import p13 from "../../assets/images/raiden.gif"
import p14 from "../../assets/images/yaran.gif"
import p15 from "../../assets/images/yura.gif"



const candidate = [
  {
    key: 0,
    name: "카미사토 아야카",
    src: p0
  },
  {
    key: 1,
    name: "바바라",
    src: p1
  },
  {
    key: 2,
    name: "치치",
    src: p2
  },
  {
    key: 3,
    name: "각청",
    src: p3
  },
  {
    key: 4,
    name: "치오리",
    src: p4
  },
  {
    key: 5,
    name: "클레",
    src: p5
  },
  {
    key: 6,
    name: "푸리나",
    src: p6
  },
  {
    key: 7,
    name: "감우",
    src: p7
  },
  {
    key: 8,
    name: "호두",
    src: p8
  },
  {
    key: 9,
    name: "진",
    src: p9
  },
  {
    key: 10,
    name: "루미네",
    src: p10
  },
  {
    key: 11,
    name: "야에 미코",
    src: p11
  },
  {
    key: 12,
    name: "나히다",
    src: p12
  },
  {
    key: 13,
    name: "라이덴 쇼군",
    src: p13
  },
  {
    key: 14,
    name: "야란",
    src: p14
  },
  {
    key: 15,
    name: "유라",
    src: p15
  }
];

export const Main = () => {


    const [candy, setCandy] = useState(candidate);
    const [winCandy, setWinCandy] = useState([]);
    const [round, setRound] = useState(1);
    const [game, setGame] = useState(candidate?.length);
    
    useEffect(() => {
        setCandy(
            candidate
                .map((c) => {
                    return { key: c.key, name: c.name, src: c.src, order: Math.random() };
                })
                .sort((l, r) => {
                    return l.order - r.order;
                })
        );
    }, [])
    
    const handleClick = (e) => {
        setCandy((prev) => {
            const temp = prev.splice(0, 2)
            return prev.filter((el, i) => el.key !== temp.key)
        })
        setRound((prev) => prev + 1);
        setWinCandy((prev) => [...prev, e])

      
    }

    //round
    useEffect(()=>{
        if(game === 1 ){
            return;
        }
        if(candy.length === 0){
            setRound(1);
            setWinCandy([]);
            setCandy(winCandy)
            setGame((prev) => prev / 2)
        }
    },[round])

  return (<>
  {
    game === 1? <Game>Win!</Game>:
    game === 2? <Game>결승</Game>:
     <Game>{game}{"강"}</Game>
  }
  {
    game > 2 &&
    <Round>{round}{"Round"}</Round>
  }
    
    <GameContainer>{candy.map((e,i)=>{
        if(i>1) return;

        return(<ImgContainer onClick={()=>handleClick(e)}>
        <ImgBox src={e.src}/>
            {e.name}
        </ImgContainer>)
    })}</GameContainer>
    </>
  )
}
