import NewsFatch from "@/components/NewsFatch"

const News = () => {
  
    return (
      <main className=" lg:pt-28 md:pt-24 pt-20 lg:px-20 md:px-10 px-5">
          <h1 className="lg:text-4xl md:text-3xl text-2xl text-blue-950 pt-10">News</h1>
          <section className=" flex-wrap flex gap-5 py-10">
             <NewsFatch/>
          </section>
      </main>
    )
  }
  
  export default News