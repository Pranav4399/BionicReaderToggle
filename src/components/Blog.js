import ToggleButton from "./ToggleButton";
import "../assets/blog.css";
const Blog = () => {
  return (
    <div className="blog">
      <h1>My Blog</h1>
      <ToggleButton className="content" />
      {/* <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          nulla vel nulla tristique malesuada eget ac nulla. Donec ultrices,
          eros non consectetur lacinia, nibh mi suscipit augue, sed viverra sem
          augue id massa. Fusce vel euismod dolor. Fusce tempor augue a risus
          commodo malesuada. Duis rhoncus laoreet massa, vel molestie nulla
          semper id. Sed interdum nisi eu tellus varius, in maximus elit
          malesuada. Sed hendrerit pharetra ipsum vitae aliquam. Sed semper
          bibendum gravida. Sed placerat, risus vel fermentum tincidunt, lacus
          risus commodo leo, id sagittis est arcu in nisi. Suspendisse tincidunt
          ante risus, ut malesuada quam luctus vitae.
        </p>
        <p>
          Nam auctor tortor ac tellus pharetra lobortis. Donec ornare nulla nec
          lacus ullamcorper, a molestie sapien vehicula. Nunc aliquet ante sit
          amet urna feugiat tincidunt. Ut feugiat ipsum eu metus pharetra, vel
          eleifend massa bibendum. Morbi accumsan, velit vitae pharetra aliquet,
          augue leo hendrerit ex, sed ullamcorper turpis augue a sapien. Nunc
          facilisis bibendum erat ut faucibus. Praesent a leo aliquet,
          ullamcorper ex vitae, ornare nulla. Nullam ultricies ante ut dolor
          consequat hendrerit. Suspendisse pulvinar interdum ligula, vel
          facilisis quam consectetur at. Donec quis fringilla augue. Donec
          sollicitudin tristique lacus, ut viverra eros. Donec vitae lectus
          condimentum, euismod arcu eget, dictum massa.
        </p>
      </div> */}
      <div className="content">
      <header>
        <div class="blogparent">
          <p>HELLLO</p>
        </div>
        <h1>Why I let go of my U.S. citizenship</h1>
        <small>2023-04-20</small>
      </header>

      <p>
        I forbid myself from anything too tempting or addicting. I keep no
        cookies in my home. To prevent myself from falling off the wagon, I
        strap myself to the mast.
      </p>
      <p>
        I was born in California, and lived the first forty years of my life in
        America. But I wanted to challenge myself to live in the rest of the
        world - to get to know it deeply - so that many countries would feel
        like home.
      </p>
      <p>
        It was a nice idea, but as soon as times abroad got a little tough, I’d
        move back to my comfort zone.
        <strong>America felt like an addiction.</strong>
      </p>
      <p>So I decided to ban myself from returning - to burn the ships.</p>
      <p>
        There’s a legend of a military leader with a hundred men in a few ships
        that landed on enemy shores. But waiting on land were a thousand enemy
        soldiers. So as soon as his men disembarked, the leader ordered them to{" "}
        <strong>burn the ships, to prevent retreat</strong>.
      </p>
      <p>
        For years I thought about this story and the idea of letting go of my
        U.S. citizenship as a way of burning my ships and preventing my retreat.
        Eventually I followed my life’s motto of “
        <a href="/scares">whatever scares you, go do it</a>”, then showed up to
        the U.S. embassy in Singapore, filled out the forms, and became an
        ex-citizen.
      </p>
      <p>
        If you suspect I was doing it for tax reasons, no. My taxes went up, not
        down, since all of my income is from the U.S. The IRS gets at least 30%
        of everything I earn.
      </p>
      <p>
        I really was just forcing myself forward into the world. And it’s
        worked. New Zealand, Singapore, England, and India are my legal and
        emotional homes now. Hopefully more to come.
      </p>
      <p>
        Since I left in 2010, I’ve only visited America for a few days. I don’t
        have the right to enter. There’s always a chance I might never see my
        family again. Because of that, <strong>I often regret it</strong>. It’s
        usually best to keep options open.
      </p>
      <p>
        I’ve kept this a secret for twelve years because I didn’t want to be
        attacked by those who might mistake my adventuring as insult. But now it
        seemed better to just explain.
      </p>
      <p>
        <em>
          For another side to this story, see “
          <a href="/left">Why I left America</a>”.
        </em>
      </p>

      <footer>
        © 2023 <a href="/">Derek Sivers</a>.
        <h1>
          Copy &amp; share:
          <span class="url">
            <a href="/xus">sive.rs/xus</a>
          </span>
        </h1>
      </footer>
    </div>
    </div>
  );
};

export default Blog;
