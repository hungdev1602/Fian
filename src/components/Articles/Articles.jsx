import Title from "../Title/Title"
import ArticleItem from "./components/ArticleItem/ArticleItem"

const Articles = ({ articleArray }) => {
  return (
    <>
      <div className="mt-[40px] sm:mt-[100px] 2xl:mt-[120px] h-fit">
        <Title title={'Статьи'} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] 2xl:gap-0 mt-[35px] sm:mt-[50px]">
          <ArticleItem 
            question={articleArray[0].question}
            answer={articleArray[0].answer}
            link={articleArray[0].link}
            check={true}
            className="flex-1"
          />
          <ArticleItem 
            question={articleArray[1].question}
            answer={articleArray[1].answer}
            link={articleArray[1].link}
            className="flex-1"
          />
          <ArticleItem 
            question={articleArray[2].question}
            answer={articleArray[2].answer}
            link={articleArray[2].link}
            className="flex-1"
          />
        </div>
      </div>
    </>
  )
}

export default Articles