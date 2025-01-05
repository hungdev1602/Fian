import Title from "../Title/Title"
import ArticleItem from "./components/ArticleItem/ArticleItem"

const Articles = () => {
  return (
    <>
      <div className="mt-[120px] h-[450px]">
        <Title title={'Статьи'} />

        <div className="flex items-start justify-between mt-[50px]">
          <ArticleItem 
            question={'Что такое коммерция'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae.'}
            link={'/article'}
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