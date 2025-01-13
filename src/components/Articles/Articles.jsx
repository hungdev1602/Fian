import Title from "../Title/Title"
import ArticleItem from "./components/ArticleItem/ArticleItem"

const Articles = () => {
  return (
    <>
      <div className="mt-[40px] sm:mt-[100px] 2xl:mt-[120px] h-fit lg:h-[340px] 2xl:h-[450px]">
        <Title title={'Статьи'} />

        <div className="flex items-start justify-between flex-wrap md:flex-nowrap gap-[20px] 2xl:gap-0 mt-[35px] sm:mt-[50px]">
          <ArticleItem 
            question={'Что такое коммерция'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae.'}
            link={'/article'}
            check={true}
          />
          <ArticleItem 
            question={'как заработать на коммерции'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae.'}
            link={'/article'}
          />
          <ArticleItem 
            question={'Что такое габ'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae.'}
            link={'/article'}
          />
        </div>
      </div>
    </>
  )
}

export default Articles