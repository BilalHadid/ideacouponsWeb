import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostList from "./component/PostList";
import PostCreate from "./component/PostCreate";
import PostEdit from "./component/PostEdit";
import UserList from "./component/UserList";
import UserCreate from "./component/UserCreate";
import UserEdit from "./component/UserEdit";
import Dashbord from "./component/Dashbord";
import NetworkList from "./component/NetworkList";
import NetworkCreate from "./component/NetworkCreate";
import NetworkEdit from "./component/NetworkEdit";
import EventList from "./component/EventList";
import EventEdit from "./component/EventEdit";
import EventCreate from "./component/EventCreate";
import StoreList from "./component/store/StoreList";
import StoreCreate from "./component/store/StoreCreate";
import StoreEdit from "./component/store/StoreEdit";
import ForumCreate from "./component/forum/ForumCreate";
import ForumEdit from "./component/forum/ForumEdit";
import ForumList from "./component/forum/ForumList";
import CouponList from "./component/coupons/CouponList";
import CouponCreate from "./component/coupons/CouponCreate";
import CouponEdit from "./component/coupons/CouponEdit";
import DiscussionList from "./component/discussion/DiscussionList";
import DiscussionCreate from "./component/discussion/DiscussionCreate";
import DiscussionEdit from "./component/discussion/DiscussionEdit";
import BlogCreate from "./component/Blog/BlogCreate";
import BlogEdit from "./component/Blog/BlogEdit";
import BlogList from "./component/Blog/BlogList";
import Commentist from "./component/comment/CommentList";
import FaqList from "./component/FAQ/FaqList";
import PageList from "./component/Pages/PageList";
import PageEdit from "./component/Pages/PageEdit";
import PageCreate from "./component/Pages/PageCreate";
import HomeCreate from "./component/Home/HomeCreate";
import HomeList from "./component/Home/HomeList";
import CategoryIcon from "@material-ui/icons/Category";
import DnsIcon from "@material-ui/icons/Dns";
import EventIcon from "@material-ui/icons/Event";
import StoreIcon from "@material-ui/icons/Store";
import ForumIcon from "@material-ui/icons/Forum";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import BookIcon from "@material-ui/icons/Book";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import PagesIcon from "@material-ui/icons/Pages";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import SliderEdit from "./component/slider/SliderEdit";
import SliderCreate from "./component/slider/SliderCreate";
import SliderList from "./component/slider/SliderList";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import authProvider from "./component/authProvider";
import DealList from "./component/Deals/DealList";
import DealCreate from "./component/Deals/DealCreate";
import DealEdit from "./component/Deals/DealEdit";
import CountryList from "./component/Country/CountryList";
import CountryEdit from "./component/Country/CountryEdit";
import CountryCreate from "./component/Country/CountryCreate";

function Main() {
  return (
    <Admin
      authProvider={authProvider}
      dashboard={Dashbord}
      dataProvider={restProvider("http://localhost:3000")}
    >
      <Resource
        name="posts"
        icon={CategoryIcon}
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />

      <Resource
        name="networks"
        icon={DnsIcon}
        list={NetworkList}
        create={NetworkCreate}
        edit={NetworkEdit}
      />
      <Resource
        name="Events"
        icon={EventIcon}
        list={EventList}
        create={EventCreate}
        edit={EventEdit}
      />
      <Resource
        name="store"
        icon={StoreIcon}
        list={StoreList}
        create={StoreCreate}
        edit={StoreEdit}
      />
      <Resource
        name="forumcategory"
        icon={ForumIcon}
        list={ForumList}
        create={ForumCreate}
        edit={ForumEdit}
      />
      <Resource
        name="CouponDeal"
        icon={CardGiftcardIcon}
        list={CouponList}
        create={CouponCreate}
        edit={CouponEdit}
      />
      <Resource
        name="deals"
        icon={CardGiftcardIcon}
        list={DealList}
        create={DealCreate}
        edit={DealEdit}
      />
      <Resource
        name="country"
        icon={CardGiftcardIcon}
        list={CountryList}
        create={CountryCreate}
        edit={CountryEdit}
      />
      <Resource
        name="discussion"
        icon={ForumIcon}
        list={DiscussionList}
        create={DiscussionCreate}
        edit={DiscussionEdit}
      />
      <Resource name="comment" list={Commentist} icon={InsertCommentIcon} />
      <Resource
        name="slider"
        icon={SlideshowIcon}
        list={SliderList}
        create={SliderCreate}
        edit={SliderEdit}
      />
      <Resource
        name="users"
        icon={GroupAddIcon}
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="blog"
        icon={BookIcon}
        list={BlogList}
        create={BlogCreate}
        edit={BlogEdit}
      />

      <Resource name="FAQ" list={FaqList} icon={LiveHelpIcon} />
      <Resource
        name="pages"
        icon={PagesIcon}
        list={PageList}
        create={PageCreate}
        edit={PageEdit}
      />
      <Resource
        name="homebanner"
        list={HomeList}
        create={HomeCreate}
        icon={HomeWorkIcon}
      />
      {/* <Resource
        name="Setting"
        icon={SettingsIcon}
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      /> */}
    </Admin>
  );
}

export default Main;
