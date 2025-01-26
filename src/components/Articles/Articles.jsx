import Title from "../Title/Title"
import ArticleItem from "./components/ArticleItem/ArticleItem"

const Articles = () => {
  return (
    <>
      <div className="mt-[40px] sm:mt-[100px] 2xl:mt-[120px] h-fit">
        <Title title={'Статьи'} />

        <div className="flex items-start justify-between flex-wrap md:flex-nowrap gap-[20px] 2xl:gap-0 mt-[35px] sm:mt-[50px]">
          <ArticleItem 
            question={'Что такое коммерция'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae.'}
            link={'https://www.litres.ru/book/aleksandr-veshkurcev/lidery-rynka-nedvizhimosti-luchshie-strategii-71515636/'}
            check={true}
          />
          <ArticleItem 
            question={'как заработать на коммерции'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae.'}
            link={'https://www.litres.ru/book/aleksandr-veshkurcev/lidery-rynka-nedvizhimosti-luchshie-strategii-71515636/'}
          />
          <ArticleItem 
            question={'Что такое габ'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae.'}
            link={'https://www.litres.ru/book/aleksandr-veshkurcev/lidery-rynka-nedvizhimosti-luchshie-strategii-71515636/'}
          />
        </div>
      </div>
    </>
  )
}

export default Articles