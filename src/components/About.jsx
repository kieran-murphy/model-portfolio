import React from "react";

const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col place-content-around items-center">
      <div className="flex mx-60 place-content-around">
        <img
          src="https://github.com/kieran-murphy/model-portfolio/blob/master/src/images/one.png?raw=true"
          alt=""
          className="w-1/3 rounded"
        />
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold">About me</h1>
          <p>
            "veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas. sit aspernatur aut odit
            aut fugit
          </p>
          <p>
            et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas. sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam
          </p>
          <p>
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas. sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos qui ratione"
          </p>
        </div>
      </div>
      <div className="flex mx-60 place-content-around">
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <p>
            "veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas. sit aspernatur aut odit
            aut fugit
          </p>
          <p>
            et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
          </p>
          <p>
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas. sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos qui ratione"
          </p>
        </div>
        <img
          src="https://github.com/kieran-murphy/model-portfolio/blob/master/src/images/two.png?raw=true"
          alt=""
          className="w-1/3 rounded"
        />
      </div>
    </div>
  );
};

export default About;
