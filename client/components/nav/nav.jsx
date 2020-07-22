import Router from "next/router";
import Link from "next/link";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const nav = () => (
  <div className="c-nav">
    <Link href="/index">
      <a>Home</a>
    </Link>
  </div>
);

export default nav;
