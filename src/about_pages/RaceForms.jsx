import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";
import articles from "../data/articles";

export default function RaceForms() {
  const background = "https://i.imgur.com/y3zvCey.jpg";

  const item = {
    title: "Race Forms",
    date: "Required Forms",
  };

  const pageContent = (
    <div className="article-content">
      <h3>Required forms to race:</h3>
      <p>
        <b>
          All new members, or anyone else that is new to racing with our club
        </b>{" "}
        need to complete{" "}
        <a
          href="https://forms.gle/4TfxvuQaofafqFoL8"
          rel="noreferrer"
          target="_blank"
        >
          the NIRCA registration survey.
        </a>{" "}
        Once we create your account you will get 2 emails to finish setting up
        your account and complete a waiver. Please do this <b>asap</b> because
        you cannot race without this, but if you raced with us in the Fall you
        are all set.
      </p>
      <p>
        <b>All returning members</b> need to log into your NIRCA account{" "}
        <a href="https://clubrunning.org/" rel="noreferrer" target="_blank">
          here
        </a>{" "}
        and fill out the waiver <b>asap</b> as you also cannot race before this
        is done. If you have done this in the Fall or have raced with us in the
        Fall you do not have to do it again.
      </p>
      <div className="img-container">
        <img src="https://i.imgur.com/XVOfSkt.jpg" alt="Penn state race" />
      </div>
    </div>
  );

  return (
    <>
      <PageHeader
        image={background}
        title={"Race Forms"}
        subtitle={"About"}
        yPos={"0"}
      />
      <div className="topbar-container" id="topbar"></div>
      <div className="bar-plus-content">
        <div className="page-content">
          <SideBarLite className="sidebar" item={item}></SideBarLite>
          <Article className="article" article={pageContent}></Article>
        </div>
      </div>
    </>
  );
}
