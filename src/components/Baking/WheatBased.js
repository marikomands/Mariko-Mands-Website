import React from "react";
import { Link } from "react-router-dom";

const WheatBased = () => {
  return (
    <div>
      <p>
        One of my hobbies is baking. Especially, I like to bake bread. It is
        always heaven to smell the freshly based bread. I usually make Japanese
        style fluffy bread as my children like them. They love Anpan which is
        round bread filled with read bean paste sesame seeds on top. Some people
        say that kneading is too much trouble and not bothered to do it. In my
        case, I don't feel the same as long as I have enough time for myself for
        that. I enjoy the kneading process as a part of bread making. I also
        sometimes make gluten-free muffins and bread which you can find more
        about it in the following link!
      </p>
      <Link to="/baking/gluten-free">Gluten Free Baking</Link>
    </div>
  );
};

export default WheatBased;
